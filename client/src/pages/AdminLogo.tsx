import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import Logo from '@/components/Logo';
import { Upload, LogOut, Trash2, Building2, MessageSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { ClientLogo, ContactSubmission } from '@shared/schema';

export default function AdminLogo() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [clientLogoFile, setClientLogoFile] = useState<File | null>(null);
  const [clientLogoPreview, setClientLogoPreview] = useState<string | null>(null);
  const [clientName, setClientName] = useState('');

  const { data: authCheck, isLoading: authLoading } = useQuery({
    queryKey: ['/api/admin/me'],
    retry: false,
  });

  const { data: logoData } = useQuery<{ hasCustomLogo: boolean; logoUrl: string | null }>({
    queryKey: ['/api/logo'],
  });

  const { data: clientLogos } = useQuery<ClientLogo[]>({
    queryKey: ['/api/client-logos'],
  });

  const { data: contactSubmissions } = useQuery<ContactSubmission[]>({
    queryKey: ['/api/admin/contact-submissions'],
  });

  useEffect(() => {
    if (!authLoading && !authCheck) {
      setLocation('/admin/login');
    }
  }, [authCheck, authLoading, setLocation]);

  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('logo', file);

      const response = await fetch('/api/admin/logo', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Logo uploaded successfully',
      });
      queryClient.invalidateQueries({ queryKey: ['/api/logo'] });
      setSelectedFile(null);
      setPreviewUrl(null);
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to upload logo',
        variant: 'destructive',
      });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest('POST', '/api/admin/logout');
    },
    onSuccess: () => {
      setLocation('/admin/login');
    },
  });

  const uploadClientLogoMutation = useMutation({
    mutationFn: async ({ file, name }: { file: File; name: string }) => {
      const formData = new FormData();
      formData.append('logo', file);
      formData.append('name', name);

      const response = await fetch('/api/admin/client-logos', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Client logo uploaded successfully',
      });
      queryClient.invalidateQueries({ queryKey: ['/api/client-logos'] });
      setClientLogoFile(null);
      setClientLogoPreview(null);
      setClientName('');
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to upload client logo',
        variant: 'destructive',
      });
    },
  });

  const deleteClientLogoMutation = useMutation({
    mutationFn: async (id: string) => {
      return await apiRequest('DELETE', `/api/admin/client-logos/${id}`);
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Client logo deleted successfully',
      });
      queryClient.invalidateQueries({ queryKey: ['/api/client-logos'] });
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete client logo',
        variant: 'destructive',
      });
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      uploadMutation.mutate(selectedFile);
    }
  };

  const handleClientLogoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setClientLogoFile(file);
      const url = URL.createObjectURL(file);
      setClientLogoPreview(url);
    }
  };

  const handleClientLogoUpload = () => {
    if (clientLogoFile && clientName.trim()) {
      uploadClientLogoMutation.mutate({ file: clientLogoFile, name: clientName });
    }
  };

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!authCheck) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-chart-4/5 to-chart-3/5 p-4">
      <div className="max-w-6xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <Button
            variant="outline"
            onClick={() => logoutMutation.mutate()}
            data-testid="button-logout"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="logo" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="logo" data-testid="tab-logo">
              <Upload className="h-4 w-4 mr-2" />
              Logo Management
            </TabsTrigger>
            <TabsTrigger value="clients" data-testid="tab-clients">
              <Building2 className="h-4 w-4 mr-2" />
              Client Logos
            </TabsTrigger>
            <TabsTrigger value="contacts" data-testid="tab-contacts">
              <MessageSquare className="h-4 w-4 mr-2" />
              Demo Requests
            </TabsTrigger>
          </TabsList>

          <TabsContent value="logo">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Current Logo</h2>
                <div className="flex justify-center items-center min-h-[200px] bg-muted/30 rounded-lg p-8">
                  {logoData?.hasCustomLogo && logoData.logoUrl ? (
                    <img
                      src={logoData.logoUrl}
                      alt="Current logo"
                      className="max-w-full max-h-[200px] object-contain"
                      data-testid="img-current-logo"
                    />
                  ) : (
                    <div data-testid="default-logo">
                      <Logo />
                    </div>
                  )}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Upload New Logo</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="logo-upload">Select Logo File</Label>
                    <Input
                      id="logo-upload"
                      type="file"
                      accept="image/png,image/jpeg,image/jpg,image/svg+xml,.svg"
                      onChange={handleFileChange}
                      data-testid="input-logo-file"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Accepted formats: PNG, JPEG, SVG (max 2MB)
                    </p>
                  </div>

                  {previewUrl && (
                    <div>
                      <Label>Preview</Label>
                      <div className="mt-2 flex justify-center items-center min-h-[150px] bg-muted/30 rounded-lg p-4">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="max-w-full max-h-[150px] object-contain"
                          data-testid="img-logo-preview"
                        />
                      </div>
                    </div>
                  )}

                  <Button
                    onClick={handleUpload}
                    disabled={!selectedFile || uploadMutation.isPending}
                    className="w-full gap-2"
                    data-testid="button-upload-logo"
                  >
                    <Upload className="h-4 w-4" />
                    {uploadMutation.isPending ? 'Uploading...' : 'Upload Logo'}
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="clients">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Upload Client Logo</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="client-name">Client Name</Label>
                      <Input
                        id="client-name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g., Little Stars Nursery"
                        data-testid="input-client-name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="client-logo-upload">Select Logo File</Label>
                      <Input
                        id="client-logo-upload"
                        type="file"
                        accept="image/png,image/jpeg,image/jpg,image/svg+xml,.svg"
                        onChange={handleClientLogoFileChange}
                        data-testid="input-client-logo-file"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Accepted formats: PNG, JPEG, SVG (max 2MB)
                      </p>
                    </div>

                    <Button
                      onClick={handleClientLogoUpload}
                      disabled={!clientLogoFile || !clientName.trim() || uploadClientLogoMutation.isPending}
                      className="w-full gap-2"
                      data-testid="button-upload-client-logo"
                    >
                      <Upload className="h-4 w-4" />
                      {uploadClientLogoMutation.isPending ? 'Uploading...' : 'Upload Client Logo'}
                    </Button>
                  </div>

                  {clientLogoPreview && (
                    <div>
                      <Label>Preview</Label>
                      <div className="mt-2 flex justify-center items-center min-h-[200px] bg-muted/30 rounded-lg p-4">
                        <img
                          src={clientLogoPreview}
                          alt="Preview"
                          className="max-w-full max-h-[200px] object-contain"
                          data-testid="img-client-logo-preview"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Client Logos ({clientLogos?.length || 0})</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {clientLogos && clientLogos.length > 0 ? (
                  clientLogos.map((logo) => (
                    <Card key={logo.id} className="p-4 relative group" data-testid={`card-client-logo-${logo.id}`}>
                      <img
                        src={logo.logoPath}
                        alt={logo.name}
                        className="w-full h-20 object-contain mb-2"
                      />
                      <p className="text-xs text-center text-muted-foreground truncate">{logo.name}</p>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6"
                        onClick={() => deleteClientLogoMutation.mutate(logo.id)}
                        data-testid={`button-delete-client-logo-${logo.id}`}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </Card>
                  ))
                ) : (
                  <p className="col-span-full text-center text-muted-foreground py-8">No client logos yet</p>
                )}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Demo Requests ({contactSubmissions?.length || 0})</h2>
              <div className="space-y-4">
                {contactSubmissions && contactSubmissions.length > 0 ? (
                  contactSubmissions.map((submission) => (
                    <Card key={submission.id} className="p-4" data-testid={`card-contact-${submission.id}`}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Name</p>
                          <p className="text-muted-foreground">{submission.name}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Nursery</p>
                          <p className="text-muted-foreground">{submission.nurseryName}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Email</p>
                          <p className="text-muted-foreground">{submission.email}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <p className="text-muted-foreground">{submission.phone}</p>
                        </div>
                        {submission.message && (
                          <div className="md:col-span-2">
                            <p className="text-sm font-medium">Message</p>
                            <p className="text-muted-foreground">{submission.message}</p>
                          </div>
                        )}
                        <div className="md:col-span-2">
                          <p className="text-xs text-muted-foreground">
                            {submission.createdAt ? new Date(submission.createdAt).toLocaleString() : 'N/A'}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-8">No demo requests yet</p>
                )}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <Button
            variant="outline"
            onClick={() => setLocation('/')}
            data-testid="button-back-home"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}

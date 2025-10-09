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
import { Upload, LogOut } from 'lucide-react';

export default function AdminLogo() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { data: authCheck, isLoading: authLoading } = useQuery({
    queryKey: ['/api/admin/me'],
    retry: false,
  });

  const { data: logoData } = useQuery<{ hasCustomLogo: boolean; logoUrl: string | null }>({
    queryKey: ['/api/logo'],
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

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!authCheck) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-chart-4/5 to-chart-3/5 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Logo Management</h1>
          <Button
            variant="outline"
            onClick={() => logoutMutation.mutate()}
            data-testid="button-logout"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

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
                  accept="image/png,image/jpeg,image/jpg,image/svg+xml"
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


import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import Logo from '@/components/Logo';
import { 
  MessageSquare, 
  Building2, 
  Image, 
  LogOut,
  LayoutDashboard,
  Users
} from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import type { ContactSubmission, KindergartenOnboarding } from '@shared/schema';

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const { data: contactSubmissions = [] } = useQuery<ContactSubmission[]>({
    queryKey: ['/api/admin/contact-submissions'],
  });

  const { data: kindergartenOnboardings = [] } = useQuery<KindergartenOnboarding[]>({
    queryKey: ['/api/admin/kindergarten-onboardings'],
  });

  const handleLogout = async () => {
    try {
      await apiRequest('POST', '/api/admin/logout', {});
      toast({
        title: 'Success',
        description: 'Logged out successfully',
      });
      setLocation('/admin/login');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Logout failed',
        variant: 'destructive',
      });
    }
  };

  const stats = [
    {
      title: 'Contact Requests',
      value: contactSubmissions.length,
      icon: MessageSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Kindergarten Sign-ups',
      value: kindergartenOnboardings.length,
      icon: Building2,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
  ];

  const menuItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Logo Settings', path: '/admin/logo', icon: Image },
    { label: 'Contact Requests', path: '/admin/logo', icon: MessageSquare },
    { label: 'Kindergartens', path: '/admin/logo', icon: Building2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-chart-4/5 to-chart-3/5">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Logo />
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-full`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="outline"
                className="h-20 flex-col gap-2"
                onClick={() => setLocation(item.path)}
              >
                <item.icon className="h-6 w-6" />
                {item.label}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

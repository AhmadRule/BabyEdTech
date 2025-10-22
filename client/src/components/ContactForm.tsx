import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  nurseryName: z.string().min(1, 'Nursery name is required'),
  message: z.string().optional(),
  selectedProducts: z.array(z.string()).optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  selectedProducts?: string[];
}

export default function ContactForm({ selectedProducts = [] }: ContactFormProps) {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      nurseryName: '',
      message: '',
      selectedProducts: selectedProducts,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: t('contactSuccess'),
        description: language === 'en' ? 'We will contact you soon!' : 'سنتواصل معك قريباً!',
      });
    },
    onError: () => {
      toast({
        title: t('contactError'),
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitMutation.mutate(data);
  };

  if (isSuccess) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-chart-4/5" id="contact">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <Card className="p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4" data-testid="text-success-title">
              {t('contactSuccess')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'en' 
                ? 'Our team will reach out to you within 24 hours to schedule your personalized demo.'
                : 'سيتواصل فريقنا معك خلال 24 ساعة لجدولة العرض التوضيحي الخاص بك.'
              }
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              variant="outline"
              data-testid="button-submit-another"
            >
              {language === 'en' ? 'Submit Another Request' : 'إرسال طلب آخر'}
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-chart-4/5" id="contact">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            {t('contactTitle')}
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-contact-subtitle">
            {t('contactSubtitle')}
          </p>
        </div>

        <Card className="p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactName')}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={language === 'en' ? 'Ahmed Al-Mutairi' : 'أحمد المطيري'}
                          data-testid="input-contact-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactEmail')}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder={language === 'en' ? 'ahmed@nursery.sa' : 'ahmed@nursery.sa'}
                          data-testid="input-contact-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactPhone')}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="+966 50 123 4567"
                          data-testid="input-contact-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nurseryName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactNursery')}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={language === 'en' ? 'Little Stars Nursery' : 'حضانة النجوم الصغيرة'}
                          data-testid="input-contact-nursery"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contactMessage')}</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={4}
                        placeholder={language === 'en' 
                          ? 'Tell us about your nursery and what you\'re looking for...' 
                          : 'أخبرنا عن حضانتك وما الذي تبحث عنه...'
                        }
                        data-testid="input-contact-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2"
                disabled={submitMutation.isPending}
                data-testid="button-submit-contact"
              >
                <Send className="h-4 w-4" />
                {submitMutation.isPending 
                  ? (language === 'en' ? 'Submitting...' : 'جاري الإرسال...')
                  : t('contactSubmit')
                }
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}

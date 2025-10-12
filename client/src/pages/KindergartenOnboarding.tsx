import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle2, Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const onboardingSchema = z.object({
  kindergartenName: z.string().min(1, "Kindergarten name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  city: z.string().min(1, "City is required"),
  logo: z.instanceof(FileList).refine((files) => files.length > 0, "Logo is required")
    .refine((files) => files[0]?.size <= 2 * 1024 * 1024, "File size must be less than 2MB")
    .refine(
      (files) => ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'].includes(files[0]?.type),
      "Only PNG, JPEG, and SVG files are allowed"
    ),
});

type OnboardingFormData = z.infer<typeof onboardingSchema>;

export default function KindergartenOnboarding() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      kindergartenName: "",
      contactName: "",
      email: "",
      phone: "",
      city: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: OnboardingFormData) => {
      const formData = new FormData();
      formData.append('kindergartenName', data.kindergartenName);
      formData.append('contactName', data.contactName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('city', data.city);
      formData.append('logo', data.logo[0]);

      const res = await fetch('/api/kindergarten-onboarding', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Failed to submit onboarding request');
      }

      return res.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      toast({
        title: language === 'ar' ? "تم إرسال الطلب بنجاح" : "Request Submitted Successfully",
        description: language === 'ar' 
          ? "سيتواصل معك فريقنا قريباً"
          : "Our team will contact you soon",
      });
      form.reset();
      setLogoPreview(null);
    },
    onError: (error: Error) => {
      toast({
        title: language === 'ar' ? "حدث خطأ" : "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: OnboardingFormData) => {
    mutation.mutate(data);
  };

  const content = {
    en: {
      title: "Join MyBaby Platform",
      subtitle: "Start your free onboarding process and transform your kindergarten management",
      kindergartenName: "Kindergarten Name",
      contactName: "Contact Person Name",
      email: "Email Address",
      phone: "Phone Number",
      city: "City",
      logo: "Kindergarten Logo",
      uploadLogo: "Upload Logo",
      logoHelp: "PNG, JPEG, or SVG (max 2MB)",
      submit: "Submit Request",
      successTitle: "Thank You!",
      successMessage: "Your onboarding request has been received. Our tech team will review your information and contact you shortly to set up your personalized MyBaby platform.",
      submitAnother: "Submit Another Request",
    },
    ar: {
      title: "انضم لمنصة ماي بيبي",
      subtitle: "ابدأ عملية التسجيل المجانية وحوّل إدارة روضتك",
      kindergartenName: "اسم الروضة",
      contactName: "اسم الشخص المسؤول",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      city: "المدينة",
      logo: "شعار الروضة",
      uploadLogo: "رفع الشعار",
      logoHelp: "PNG أو JPEG أو SVG (حد أقصى 2 ميجابايت)",
      submit: "إرسال الطلب",
      successTitle: "شكراً لك!",
      successMessage: "تم استلام طلب التسجيل الخاص بك. سيقوم فريقنا التقني بمراجعة معلوماتك والتواصل معك قريباً لإعداد منصة ماي بيبي الخاصة بك.",
      submitAnother: "إرسال طلب آخر",
    },
  };

  const t = content[language];

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-[#F0F9FF]" dir={dir}>
        <Navigation />
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[80vh]">
          <Card className="max-w-2xl w-full text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-16 h-16 text-[#00ADEF]" />
              </div>
              <CardTitle className="text-3xl mb-2">{t.successTitle}</CardTitle>
              <CardDescription className="text-lg">{t.successMessage}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => setIsSuccess(false)} 
                className="bg-[#00ADEF] hover:bg-[#0183F1]"
                data-testid="button-submit-another"
              >
                {t.submitAnother}
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F0F9FF]" dir={dir}>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#333231] mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600">{t.subtitle}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{language === 'ar' ? 'معلومات الروضة' : 'Kindergarten Information'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="kindergartenName">{t.kindergartenName}</Label>
                  <Input
                    id="kindergartenName"
                    {...form.register("kindergartenName")}
                    placeholder={t.kindergartenName}
                    data-testid="input-kindergarten-name"
                  />
                  {form.formState.errors.kindergartenName && (
                    <p className="text-sm text-destructive">{form.formState.errors.kindergartenName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactName">{t.contactName}</Label>
                  <Input
                    id="contactName"
                    {...form.register("contactName")}
                    placeholder={t.contactName}
                    data-testid="input-contact-name"
                  />
                  {form.formState.errors.contactName && (
                    <p className="text-sm text-destructive">{form.formState.errors.contactName.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder={t.email}
                      data-testid="input-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...form.register("phone")}
                      placeholder={t.phone}
                      data-testid="input-phone"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">{t.city}</Label>
                  <Input
                    id="city"
                    {...form.register("city")}
                    placeholder={t.city}
                    data-testid="input-city"
                  />
                  {form.formState.errors.city && (
                    <p className="text-sm text-destructive">{form.formState.errors.city.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="logo">{t.logo}</Label>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Input
                        id="logo"
                        type="file"
                        accept="image/png,image/jpeg,image/jpg,image/svg+xml"
                        {...form.register("logo")}
                        onChange={(e) => {
                          form.register("logo").onChange(e);
                          handleLogoChange(e);
                        }}
                        className="hidden"
                        data-testid="input-logo"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById('logo')?.click()}
                        className="w-full md:w-auto"
                        data-testid="button-upload-logo"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        {t.uploadLogo}
                      </Button>
                      {logoPreview && (
                        <div className="flex-shrink-0">
                          <img 
                            src={logoPreview} 
                            alt="Logo preview" 
                            className="w-16 h-16 object-contain border rounded-md"
                            data-testid="img-logo-preview"
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{t.logoHelp}</p>
                    {form.formState.errors.logo && (
                      <p className="text-sm text-destructive">{form.formState.errors.logo.message as string}</p>
                    )}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#00ADEF] hover:bg-[#0183F1] text-white"
                  disabled={mutation.isPending}
                  data-testid="button-submit-onboarding"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {language === 'ar' ? 'جاري الإرسال...' : 'Submitting...'}
                    </>
                  ) : (
                    t.submit
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

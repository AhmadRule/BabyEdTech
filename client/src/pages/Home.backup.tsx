
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Features from '@/components/Features';
import PlatformShowcase from '@/components/PlatformShowcase';
import TabbedFeatures from '@/components/TabbedFeatures';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';
import CTA from '@/components/CTA';
import StakeholderValue from '@/components/StakeholderValue';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function HomeBackup() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SocialProof />
      <Features />
      <PlatformShowcase />
      <TabbedFeatures />
      <Testimonials />
      <ClientLogos />
      <CTA />
      <StakeholderValue />
      <ContactForm />
      <Footer />
    </div>
  );
}

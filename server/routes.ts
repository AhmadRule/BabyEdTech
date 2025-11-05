import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { verifyAdminCredentials, generateSessionToken } from "./lib/adminAuth";
import { requireAdmin } from "./middleware/adminAuth";
import multer from "multer";
import path from "path";
import { z } from "zod";
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadsDir = path.join(__dirname, 'uploads');

// Ensure uploads directory exists
fs.mkdir(uploadsDir, { recursive: true });

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `mybaby-logo${ext}`);
  }
});

const clientLogoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const timestamp = Date.now();
    cb(null, `client-logo-${timestamp}${ext}`);
  }
});

const upload = multer({
  storage: multerStorage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/svg'];
    const ext = path.extname(file.originalname).toLowerCase();
    const allowedExtensions = ['.png', '.jpeg', '.jpg', '.svg'];
    
    if (allowedTypes.includes(file.mimetype) || allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PNG, JPEG, and SVG are allowed.'));
    }
  }
});

const uploadClientLogo = multer({
  storage: clientLogoStorage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/svg'];
    const ext = path.extname(file.originalname).toLowerCase();
    const allowedExtensions = ['.png', '.jpeg', '.jpg', '.svg'];
    
    if (allowedTypes.includes(file.mimetype) || allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PNG, JPEG, and SVG are allowed.'));
    }
  }
});

const kindergartenLogoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const timestamp = Date.now();
    cb(null, `kindergarten-logo-${timestamp}${ext}`);
  }
});

const uploadKindergartenLogo = multer({
  storage: kindergartenLogoStorage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/svg'];
    const ext = path.extname(file.originalname).toLowerCase();
    const allowedExtensions = ['.png', '.jpeg', '.jpg', '.svg'];
    
    if (allowedTypes.includes(file.mimetype) || allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PNG, JPEG, and SVG are allowed.'));
    }
  }
});

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const contactSubmissionSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  nurseryName: z.string().min(1),
  message: z.string().optional(),
});

const kindergartenOnboardingSchema = z.object({
  kindergartenName: z.string().min(1, "Kindergarten name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  city: z.string().min(1, "City is required"),
});

// Helper function to generate a unique ID
function generateId(): string {
  return crypto.randomBytes(16).toString('hex');
}

// Placeholder knowledge base for products
const productKnowledge = {
  en: [
    { id: generateId(), name: "MyBaby Diaper", description: "Soft and absorbent diapers for your little one.", features: ["Ultra-absorbent", "Leak protection", "Hypoallergenic"], price: "$25.99" },
    { id: generateId(), name: "MyBaby Wipes", description: "Gentle and refreshing wet wipes.", features: ["Alcohol-free", "Hypoallergenic", "Plant-based"], price: "$12.50" },
    { id: generateId(), name: "MyBaby Lotion", description: "Nourishing lotion to keep baby's skin soft.", features: ["Dermatologist-tested", "Fragrance-free", "Moisturizing"], price: "$18.00" }
  ],
  ar: [
    { id: generateId(), name: "حفاضات MyBaby", description: "حفاضات ناعمة وماصة لطفلك.", features: ["امتصاص فائق", "حماية من التسرب", "مضادة للحساسية"], price: "25.99 دولار" },
    { id: generateId(), name: "مناديل MyBaby المبللة", description: "مناديل مبللة لطيفة ومنعشة.", features: ["خالية من الكحول", "مضادة للحساسية", "نباتية"], price: "12.50 دولار" },
    { id: generateId(), name: "لوشن MyBaby", description: "لوشن مغذي للحفاظ على بشرة الطفل ناعمة.", features: ["تم اختباره من قبل أطباء الجلد", "خالٍ من العطور", "مرطب"], price: "18.00 دولار" }
  ]
};

// Helper function to get product knowledge based on language
function getProductKnowledge(language: string = 'en') {
  return productKnowledge[language] || productKnowledge.en;
}

// Placeholder function to generate AI response
function generateResponse(message: string, language: string, knowledgeBase: any[]): string {
  const lowerCaseMessage = message.toLowerCase();
  const productName = knowledgeBase.find(p => lowerCaseMessage.includes(p.name.toLowerCase()));

  if (productName) {
    if (lowerCaseMessage.includes('description')) {
      return productName.description;
    } else if (lowerCaseMessage.includes('features')) {
      return `Features of ${productName.name}: ${productName.features.join(', ')}`;
    } else if (lowerCaseMessage.includes('price')) {
      return `The price of ${productName.name} is ${productName.price}.`;
    } else {
      return productName.description; // Default to description if not specific
    }
  }

  // Fallback responses
  if (language === 'ar') {
    if (lowerCaseMessage.includes('شكرا')) return 'على الرحب والسعة!';
    if (lowerCaseMessage.includes('مرحبا')) return 'أهلاً بك! كيف يمكنني المساعدة اليوم؟';
    return 'عذراً، ليس لدي معلومات حول هذا المنتج حالياً. هل يمكنك أن تسأل عن منتجاتنا مثل حفاضات MyBaby أو لوشن MyBaby؟';
  } else {
    if (lowerCaseMessage.includes('thank you')) return 'You\'re welcome!';
    if (lowerCaseMessage.includes('hello')) return 'Hello! How can I assist you today?';
    return 'Sorry, I don\'t have information on that specific product right now. You can ask about our products like MyBaby Diapers or MyBaby Lotion.';
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.use('/uploads', express.static(uploadsDir));

  app.post('/api/admin/login', async (req, res) => {
    try {
      const { username, password } = loginSchema.parse(req.body);

      const isValid = await verifyAdminCredentials(username, password);

      if (!isValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const sessionToken = generateSessionToken();
      const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

      await storage.createAdminSession({
        sessionToken,
        expiresAt,
      });

      res.cookie('admin_session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: 'Invalid request' });
    }
  });

  app.post('/api/admin/logout', requireAdmin, async (req, res) => {
    const sessionToken = req.cookies?.admin_session;
    if (sessionToken) {
      await storage.deleteAdminSession(sessionToken);
    }
    res.clearCookie('admin_session');
    res.json({ success: true });
  });

  app.get('/api/admin/me', requireAdmin, (req, res) => {
    res.json({ authenticated: true });
  });

  app.post('/api/admin/logo', requireAdmin, (req, res) => {
    upload.single('logo')(req, res, async (err) => {
      if (err) {
        if (err instanceof multer.MulterError) {
          if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'File size exceeds 2MB limit' });
          }
          return res.status(400).json({ error: `Upload error: ${err.message}` });
        }
        return res.status(400).json({ error: err.message || 'Upload failed' });
      }

      try {
        if (!req.file) {
          return res.status(400).json({ error: 'No file uploaded' });
        }

        const logoPath = `/uploads/${req.file.filename}`;

        await storage.updateBrandingSettings({ logoPath });

        res.json({ 
          success: true, 
          logoPath 
        });
      } catch (error: any) {
        res.status(400).json({ error: error.message || 'Upload failed' });
      }
    });
  });

  app.get('/api/logo', async (req, res) => {
    const settings = await storage.getBrandingSettings();

    if (settings?.logoPath) {
      res.json({
        hasCustomLogo: true,
        logoUrl: settings.logoPath,
      });
    } else {
      res.json({
        hasCustomLogo: false,
        logoUrl: null,
      });
    }
  });

  // Site settings endpoints
  app.get('/api/site-settings', async (req, res) => {
    try {
      const settings = await storage.getSiteSettings();
      
      if (settings) {
        res.json(settings);
      } else {
        // Return default values if not set
        res.json({
          nurseriesCount: "500+",
          parentsCount: "10,000+",
          appStoreRating: "4.9"
        });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Failed to fetch site settings' });
    }
  });

  app.post('/api/admin/site-settings', requireAdmin, async (req, res) => {
    try {
      const { nurseriesCount, parentsCount, appStoreRating } = req.body;
      
      const settings = await storage.updateSiteSettings({
        nurseriesCount,
        parentsCount,
        appStoreRating
      });
      
      res.json({ success: true, settings });
    } catch (error: any) {
      res.status(400).json({ error: error.message || 'Failed to update site settings' });
    }
  });

  app.post('/api/admin/client-logos', requireAdmin, (req, res) => {
    uploadClientLogo.single('logo')(req, res, async (err) => {
      if (err) {
        if (err instanceof multer.MulterError) {
          if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'File size exceeds 2MB limit' });
          }
          return res.status(400).json({ error: `Upload error: ${err.message}` });
        }
        return res.status(400).json({ error: err.message || 'Upload failed' });
      }

      try {
        if (!req.file) {
          return res.status(400).json({ error: 'No file uploaded' });
        }

        const { name, displayOrder } = req.body;

        if (!name) {
          return res.status(400).json({ error: 'Client name is required' });
        }

        const logoPath = `/uploads/${req.file.filename}`;

        const clientLogo = await storage.createClientLogo({
          name,
          logoPath,
          displayOrder: displayOrder || null,
        });

        res.json({ 
          success: true, 
          clientLogo
        });
      } catch (error: any) {
        res.status(400).json({ error: error.message || 'Upload failed' });
      }
    });
  });

  app.get('/api/client-logos', async (req, res) => {
    try {
      const logos = await storage.getAllClientLogos();
      res.json(logos);
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Failed to fetch client logos' });
    }
  });

  app.delete('/api/admin/client-logos/:id', requireAdmin, async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteClientLogo(id);
      res.json({ success: true });
    } catch (error: any) {
      res.status(400).json({ error: error.message || 'Failed to delete client logo' });
    }
  });

  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const data = contactSubmissionSchema.parse(req.body);

      const submission = await storage.createContactSubmission({
        name: data.name,
        email: data.email,
        phone: data.phone,
        nurseryName: data.nurseryName,
        message: data.message,
      });

      res.json({ 
        success: true, 
        submission
      });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: 'Invalid form data', details: error.errors });
      }
      res.status(400).json({ error: error.message || 'Failed to submit contact form' });
    }
  });

  app.get('/api/admin/contact-submissions', requireAdmin, async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Failed to fetch contact submissions' });
    }
  });

  // AI Chat endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, language, history } = req.body;

      // TODO: Replace with actual AI API integration (Grok, OpenAI, etc.)
      // For now, this is a placeholder response

      // Example using environment variable for API key
      // const apiKey = process.env.GROK_API_KEY || process.env.OPENAI_API_KEY;

      // Placeholder knowledge base - you'll replace this with actual AI API call
      const knowledgeBase = getProductKnowledge(language);

      // Simple keyword matching (replace with actual AI API)
      let response = generateResponse(message, language, knowledgeBase);

      res.json({ response });
    } catch (error: any) {
      console.error('Chat error:', error);
      res.status(500).json({ 
        error: error.message,
        response: language === 'en' 
          ? 'Sorry, I encountered an error. Please try again.' 
          : 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.'
      });
    }
  });

  app.post('/api/kindergarten-onboarding', (req, res) => {
    uploadKindergartenLogo.single('logo')(req, res, async (err) => {
      if (err) {
        if (err instanceof multer.MulterError) {
          if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'File size exceeds 2MB limit' });
          }
        }
        return res.status(400).json({ error: err.message || 'Upload failed' });
      }

      try {
        if (!req.file) {
          return res.status(400).json({ error: 'Logo is required' });
        }

        const validatedData = kindergartenOnboardingSchema.parse(req.body);
        const logoPath = `/uploads/${req.file.filename}`;

        const onboarding = await storage.createKindergartenOnboarding({
          kindergartenName: validatedData.kindergartenName,
          contactName: validatedData.contactName,
          email: validatedData.email,
          phone: validatedData.phone,
          city: validatedData.city,
          logoPath,
        });

        // TODO: Send email notification - Set up one of these in Secrets:
        // Option 1: RESEND_API_KEY (recommended - resend.com)
        // Option 2: SENDGRID_API_KEY (sendgrid.com)
        // Option 3: SMTP credentials (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)
        // Email should include: kindergarten name, contact info, and logo URL
        
        if (process.env.RESEND_API_KEY) {
          // Send email notification here
          console.log('📧 New kindergarten onboarding:', validatedData.kindergartenName);
        }

        res.json({ 
          success: true, 
          message: 'Onboarding request submitted successfully',
          onboarding
        });
      } catch (error: any) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ error: 'Invalid form data', details: error.errors });
        }
        res.status(400).json({ error: error.message || 'Failed to submit onboarding request' });
      }
    });
  });

  app.get('/api/admin/kindergarten-onboardings', requireAdmin, async (req, res) => {
    try {
      const onboardings = await storage.getAllKindergartenOnboardings();
      res.json(onboardings);
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Failed to fetch onboarding requests' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
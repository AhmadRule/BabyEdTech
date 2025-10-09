import { Request, Response, NextFunction } from 'express';
import { storage } from '../storage';

export async function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const sessionToken = req.cookies?.admin_session;
  
  if (!sessionToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const session = await storage.getAdminSession(sessionToken);
  
  if (!session) {
    res.clearCookie('admin_session');
    return res.status(401).json({ error: 'Session expired' });
  }

  next();
}

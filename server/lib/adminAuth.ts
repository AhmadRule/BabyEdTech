import { scrypt, randomBytes, timingSafeEqual } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

if (!process.env.ADMIN_PASSWORD_HASH && !process.env.ADMIN_PASSWORD) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('SECURITY ERROR: ADMIN_PASSWORD or ADMIN_PASSWORD_HASH must be set in production!');
  }
  console.warn('⚠️  WARNING: No ADMIN_PASSWORD or ADMIN_PASSWORD_HASH set. Using default credentials (admin/admin123). This is insecure for production!');
}

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString('hex');
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString('hex')}.${salt}`;
}

export async function verifyPassword(storedHash: string, suppliedPassword: string): Promise<boolean> {
  const [hashedPassword, salt] = storedHash.split('.');
  const hashedPasswordBuf = Buffer.from(hashedPassword, 'hex');
  const suppliedPasswordBuf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;
  return timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
}

export async function verifyAdminCredentials(username: string, password: string): Promise<boolean> {
  if (username !== ADMIN_USERNAME) {
    return false;
  }
  
  if (process.env.ADMIN_PASSWORD_HASH) {
    return await verifyPassword(process.env.ADMIN_PASSWORD_HASH, password);
  }
  
  return password === ADMIN_PASSWORD;
}

export function generateSessionToken(): string {
  return randomBytes(32).toString('hex');
}

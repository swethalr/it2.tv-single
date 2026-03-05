import { jwtVerify } from 'jose';

export async function verifyTokenEdge(token: string) {
  try {
    if (!process.env.JWT_SECRET) return null;
    
    // Convert secret string to a byte array for the Web Crypto API
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    
    const { payload } = await jwtVerify(token, secret);
    return payload as { userId: string; email: string; role: string };
  } catch (error) {
    return null;
  }
}
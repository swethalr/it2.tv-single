'use client';
import { Suspense } from 'react';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  
  useEffect(() => {
    const error = searchParams.get('error');
    if (error === 'session_expired') {
      setAlert({
        type: 'error',
        message: 'Your session has expired. Please login again.',
      });
    }
  }, [searchParams]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert(null);
    setErrors({});
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/admin/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        if (response.status === 400 && data.data) {
          // Validation errors
          const validationErrors: Record<string, string> = {};
          data.data.forEach((error: { field: string; message: string }) => {
            validationErrors[error.field] = error.message;
          });
          setErrors(validationErrors);
        } else {
          setAlert({
            type: 'error',
            message: data.error || 'Login failed',
          });
        }
        return;
      }
      
      // Success - redirect
      const redirect = searchParams.get('redirect') || '/admin';
      router.push(redirect);
    } catch (error) {
      setAlert({
        type: 'error',
        message: 'Network error. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <div className="text-center mb-8">
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            CMS Admin
          </h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
            className="mb-6"
          />
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="admin@example.com"
            required
            autoComplete="email"
          />
          
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Enter your password"
            required
            autoComplete="current-password"
          />
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            className="w-full"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
// --- STEP 2: THE MAIN EXPORT WRAPS EVERYTHING IN SUSPENSE ---
export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Admin...</div>}>
      <LoginForm />
    </Suspense>
  );
}

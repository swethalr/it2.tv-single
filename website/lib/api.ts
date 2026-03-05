

export const cmsApi = (path: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000';
  return `${baseUrl}/admin${path}`;
};
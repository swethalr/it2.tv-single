// lib/seo-utils.ts
export const getTextWidth = (text: string, font: string = '16px Arial'): number => {
  if (typeof window === 'undefined') return 0;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return 0;
  context.font = font;
  return Math.ceil(context.measureText(text).width);
};
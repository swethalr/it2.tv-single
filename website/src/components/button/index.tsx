'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { cn } from '@/src/utils/shadcn';

// 1. BASE BUTTON (The template code)
const disabledClasses = cn('pointer-events-none opacity-60');
const buttonVariants = cva(
  [
    'relative z-[2] bg-[#3cb878] text-white  overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear]',
    'inline-flex items-center justify-center gap-3 md:min-h-[3rem] min-h-[3.rem] px-5 md:px-5 py-2 md:py-3',
    'transition-colors ease-in-out',
    'ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'bg-primary',
    'after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out]',
    'hover:text-white ',
    'hover:after:w-full hover:after:left-0',
  ],
  {
    variants: {
      colorScheme: { primary: '' },
      shape: { default: 'rounded-5', circle: 'rounded-full' },
    },
    defaultVariants: { colorScheme: 'primary', shape: 'default' },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          disabled && disabledClasses,
          buttonVariants({ className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// 2. PRIMARY BUTTON
export function PrimaryButton({
  label,
  onClick,
  className = '',
  type = 'button',
}: {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative inline-flex items-center gap-4 rounded-2xl bg-[#3cb878] px-6 py-1 text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-[#3cb878] ${className}`}
    >
      <span className="h5 font-bold tracking-[0.1em]">{label}</span>
    </motion.button>
  );
}

// 3. CASE STUDY BUTTON
export function CaseStudyButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative inline-flex items-center gap-4 rounded-2xl bg-[#3cb878] px-10 py-6 text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-[#3cb878]"
    >
      <span className="h6 font-bold uppercase tracking-[0.25em]">{label}</span>
    </motion.button>
  );
}

// 4. CHOOSE EXPERT CTA BUTTON (This fixes your current error)
export function ChooseExpertCtaButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p rounded-2xl bg-[#3cb878] lg:px-10 lg:py-5 px-5 py-2 font-bold uppercase text-white shadow-xl transition-all hover:bg-white hover:text-[#3cb878]"
    >
      {label}
    </motion.button>
  );
}

// 5. FORM SUBMIT BUTTON
export function FormSubmitButton({
  label,
  showSendIcon = true,
  className = '',
}: {
  label: string;
  showSendIcon?: boolean;
  className?: string;
}) {
  return (
    <button
      type="submit"
      className={`group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#3cb878] py-5 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-lg transition-all hover:bg-slate-900 ${className}`}
    >
      {label}
      {showSendIcon && (
        <Send
          size={16}
          className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      )}
    </button>
  );
}

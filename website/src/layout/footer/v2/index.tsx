

import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import { BrandLogo } from 'src/layout/brand-logo';
import { FaPhone, FaEnvelope } from 'react-icons/fa6';
import { SectionProps } from '@/src/common-types';
import { ClassValue } from 'clsx';
import { footerSectionData } from '@/data/layout/footer/v2';

// ── Types ─────────────────────────────────────────────────────────────────────
interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

interface QuickLink {
  label: string;
  href: string;
  openNewTab?: boolean;
}

export interface FooterSectionProps {
  aboutTitle: string;
  aboutDescription: string;
  socialLinks: SocialLinkProps[];
  quickLinks: {
    title: string;
    columnOne: QuickLink[];
    columnTwo: QuickLink[];
  };
  bottomBar: {
    liveChatLabel: string;
    liveChatSub: string;
    email: string;
    emailSub: string;
  };
  footerBottom: {
    copyrightText: string;
  };
}

// ── Shared styles ─────────────────────────────────────────────────────────────
const accentLine = cn('block w-10 h-[3px] mt-2 mb-6 rounded-full bg-[#3cb878]');
const linkClass = cn(
  'flex items-center gap-2 p text-gray-900 transition-colors duration-200 hover:text-[#3cb878]'
);
const arrowSpan = cn('text-[#3cb878] text-lg');

// ── Component ─────────────────────────────────────────────────────────────────
interface Props extends SectionProps {
  footerTopClassName?: ClassValue;
}

export function Footer({ className }: Props) {
  const data = footerSectionData;

  return (
    <footer
      className={cn(
        'overflow-hidden',
        // Light green tinted background — very light version of #3cb878
        'bg-[#f0fdf6]',
        className
      )}
    >
      <Container>

        {/* ── MAIN BODY ────────────────────────────────────────────────────── */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1fr_1fr] lg:py-20 border-b border-[#3cb878]/20">

          {/* LEFT — About */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <BrandLogo />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 leading-snug">
              {data.aboutTitle}
            </h3>
            <span className={accentLine} />

            {/* Description */}
            <p className="p leading-relaxed text-gray-900 mb-6 max-w-md">
              {data.aboutDescription}
            </p>

            {/* Social Icons */}
            {data.socialLinks && data.socialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {data.socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#3cb878]/30 text-[#3cb878] text-base shadow-sm transition-all duration-200 hover:bg-[#3cb878] hover:text-white hover:shadow-md"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — Quick Links (two sub-columns) */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 leading-snug">
              {data.quickLinks.title}
            </h3>
            <span className={accentLine} />

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {/* Column One */}
              <ul className=" grid gap-1">
                {data.quickLinks.columnOne.map((link, i) => (
                  <li key={i}>
                    <CustomLink
                      href={link.href}
                      openNewTab={link.openNewTab}
                      className={linkClass}
                    
                    >
                      <span className={arrowSpan}>›</span>
                      {link.label}
                    </CustomLink>
                  </li>
                ))}
              </ul>

              {/* Column Two */}
              <ul className="grid gap-1">
                {data.quickLinks.columnTwo.map((link, i) => (
                  <li key={i}>
                    <CustomLink
                      href={link.href}
                      openNewTab={link.openNewTab}
                      className={linkClass}
                    >
                      <span className={arrowSpan}>›</span>
                      {link.label}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ───────────────────────────────────────────────────── */}
        <div className="grid gap-6 py-8 sm:grid-cols-2 border-b border-[#3cb878]/20">

          {/* Live Chat */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full border-2 border-[#3cb878]/40 bg-white text-[#3cb878] text-xl shadow-sm">
              <FaPhone />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-base">{data.bottomBar.liveChatLabel}</p>
              <p className="text-sm text-gray-500">{data.bottomBar.liveChatSub}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 sm:justify-end">
            <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full border-2 border-[#3cb878]/40 bg-white text-[#3cb878] text-xl shadow-sm">
              <FaEnvelope />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-base">{data.bottomBar.email}</p>
              <p className="text-sm text-gray-500">{data.bottomBar.emailSub}</p>
            </div>
          </div>
        </div>

        {/* ── COPYRIGHT ────────────────────────────────────────────────────── */}
        <div className="flex min-h-[64px] items-center justify-center py-5">
          <p className="text-sm text-gray-500 text-center">
            {data.footerBottom.copyrightText}
          </p>
        </div>

      </Container>
    </footer>
  );
}

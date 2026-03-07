// data/layout/footer/v2/index.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Footer data — matches the screenshot content exactly
// ─────────────────────────────────────────────────────────────────────────────

import { FooterSectionProps } from '@/src/layout/footer/v2';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { FaGoogle } from 'react-icons/fa';

export const footerSectionData: FooterSectionProps = {

  // ── About section (left column) ──────────────────────────────────────────
  aboutTitle: 'About Zammy!',

  aboutDescription:
    'Zammy Zaif - Helping small businesses scale into medium and large companies worldwide by optimizing their website and Google Business Profile from first page to Rank #1 on Google | Google Ranking Expert',

  socialLinks: [
    { icon: <FaGoogle />,    href: 'https://www.google.com/' },
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/' },
    { icon: <FaTwitter />,   href: 'https://twitter.com/' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/' },
  ],

  // ── Quick Links (right column — two sub-columns) ─────────────────────────
  quickLinks: {
    title: 'Quick Links',

    columnOne: [
      { label: 'Google Ranking Expert',  href: '/', openNewTab: false },
      { label: 'GMB Ranking Specialist', href: '/', openNewTab: false },
      { label: 'Best SEO Expert',        href: '/', openNewTab: false },
      { label: 'Internet Influencer',    href: '/', openNewTab: false },
      { label: 'Google Influencer',      href: '/', openNewTab: false },
      { label: 'Best Local SEO Expert',  href: '/', openNewTab: false },
      { label: 'Course Verification',    href: '/', openNewTab: false },
    ],

    columnTwo: [
      { label: 'Google SEO Training', href: '/', openNewTab: false },
      { label: 'Privacy Policy',      href: '/', openNewTab: false },
      { label: 'Cookie Policy',       href: '/', openNewTab: false },
      { label: 'Contact Us',          href: '/contact', openNewTab: false },
    ],
  },

  // ── Bottom bar ───────────────────────────────────────────────────────────
  bottomBar: {
    liveChatLabel: 'Live Chat',
    liveChatSub:   '24 x 7',
    email:         'enquiry@it2.tv',
    emailSub:      'online support',
  },

  // ── Copyright ────────────────────────────────────────────────────────────
  footerBottom: {
    copyrightText: 'Copyright ©2025 All Rights Reserved by IT2.TV',
  },
};

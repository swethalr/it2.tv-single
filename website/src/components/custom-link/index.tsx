import Link from 'next/link';
import { LinkProps } from '@/src/common-types';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

export type CustomLinkProps = Omit<LinkProps, 'label'> &
  PropsWithChildren &
  AnchorHTMLAttributes<HTMLAnchorElement>;


export function CustomLink({
  children,
  href,
  openNewTab,
  ...props
}: CustomLinkProps) {
  return (
    <Link href={href} target={openNewTab ? '_blank' : '_self'} {...props}>
      {children}
    </Link>
  );
}

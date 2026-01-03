import { ReactNode } from 'react';

// Navigation
export interface NavLink {
  name: string;
  href: string;
}

// Projects
export interface Project {
  id: number;
  title: string;
  appName: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

// Skills
export interface Skill {
  name: string;
  logo: string;
}

// Social Links
export interface SocialLink {
  name: string;
  username: string;
  link: string;
  logo: string | null;
}

// Contact Info
export interface ContactInfo {
  label: string;
  value: string;
  link: string | null;
  icon: ReactNode;
}

// SEO Props
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

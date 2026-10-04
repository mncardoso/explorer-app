import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explorer App — Case Study',
  description: 'Design case study for the Explorer App concept.',
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}

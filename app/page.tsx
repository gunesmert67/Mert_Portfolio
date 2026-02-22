import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mert Güneş | Personal Portfolio',
  description: 'Personal portfolio of Mert Güneş',
};

export default function Home() {
  // Redirect the root path to the new about landing page
  redirect('/about');
}

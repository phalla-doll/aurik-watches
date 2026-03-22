import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'AURIK | Swiss Precision. Redefined.',
  description: 'Meet the UA-01: A new era in innovation. Expertly crafted for those who explore the world every day with precision and style in mind.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-satoshi bg-[#F9F9F9] text-[#111111] antialiased selection:bg-[#E03C31] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

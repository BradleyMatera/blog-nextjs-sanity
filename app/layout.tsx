import 'tailwindcss/tailwind.css';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-customBackground min-h-screen">{children}</body>
    </html>
  );
}
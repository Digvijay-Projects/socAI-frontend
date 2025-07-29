// app/layout.tsx (or a suitable parent component)
'use client'; // If this layout component itself needs client features, otherwise remove

import './globals.css';
import { AuthProvider } from '../contexts/AuthContext'; // Adjust path if needed

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
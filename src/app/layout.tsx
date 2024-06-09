import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | My Playground',
    default: 'My Playground',
  },
  // description: 'The official Next.js Learn Dashboard built with App Router.',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
        </div>
        <div>
          {children}
        </div>
      </body> */}

      <body className={inter.className}>
        <div className="mt-10 max-w-100 flex items-center justify-center h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

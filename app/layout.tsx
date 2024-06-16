import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
        <div className="relative  overflow-hidden bg-random tracking-tighter ">
        <div
        className="  w-full  h-full bg-gradient-to-r from-black to-transparent"
        style={{
          height: '100vh',
          display: 'grid',
          placeItems: 'center',
        
          zIndex: 100,
          position: 'relative',
        }}>
             {children}
             <div>

             </div>
            <div className="absolute bottom-1">
            Your menuba goes here 
            </div>
        </div>
       
        <div className="absolute inset-[-200%]  bg-noise opacity-20 animate-shift" >
      
      </div>
        </div>
      
        </section>
        </body>
    </html>
  );
}
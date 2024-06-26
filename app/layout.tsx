import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/component/footer";

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
        <div className="relative  overflow-hidden bg-gradient-to-r from-slate-950 to-slate-800 tracking-tighter ">
        <div
        className= " w-full h-full"
        style={{
          height: '100vh',
          display: 'grid',
          placeItems: 'center',
        
          zIndex: 10,
          position: 'relative',
        }}>
             {children}
             <div>

             </div>
             <Footer/>
        </div>
       
        <div className="absolute inset-[-200%]  bg-noise opacity-20 animate-shift" >
      
      </div>
        </div>
      
        </section>
        </body>
    </html>
  );
}

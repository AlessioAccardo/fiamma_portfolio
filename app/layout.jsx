import { Roboto_Slab } from "next/font/google";
import HeaderBar from "@/components/HeaderBar";
import "./globals.css";
import Footer from "@/components/Footer";

const robotoSlab = Roboto_Slab({
    subsets: ['latin']
})

export const metadata = {
  title: "PASTAFIAMMA",
  description: "Migliore Ristorante a Palermo",
  icons: {
    icon: "/logo.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${robotoSlab.className} antialiased w-full max-w-full text-sm sm:text-base min-h-screen flex flex-col`}>
        <HeaderBar />
        {children}
        <Footer />        
      </body>
    </html>
  );
}

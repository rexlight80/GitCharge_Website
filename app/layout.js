import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "GitCharge",
  description: "Gitcharge is an extension that is loaded with features that make Gitlab code review and exploration awesome.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>

      </head>
      <body>
        <div className='w-screen h-screen bg-[#F9F6F2] pt-[2rem] px-[3.5rem]  xl:px-[5rem] overflow-y-auto flex flex-col relative'>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}

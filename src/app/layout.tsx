import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Poppins, Alex_Brush, Noto_Serif_Gujarati } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: ["400"],
});

const notoGujarati = Noto_Serif_Gujarati({
  variable: "--font-gujarati",
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "હર્ષિલ અને માનસીનું મંગલ આમંત્રણ | Premium Gujarati Wedding Website",
  description: "હર્ષિલ અને માનસીના લગ્ન પ્રસંગનું મંગલ આમંત્રણ.",
  openGraph: {
    title: "હર્ષિલ અને માનસીનું મંગલ આમંત્રણ",
    description: "હર્ષિલ અને માનસીના લગ્ન પ્રસંગનું મંગલ આમંત્રણ.",
    images: ["/Wedding_photos/imgi_35_harshil-weds-mansi.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="gu"
      className={`${cinzel.variable} ${playfair.variable} ${poppins.variable} ${alexBrush.variable} ${notoGujarati.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#faf5f0] text-[#6b4f2c] flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}

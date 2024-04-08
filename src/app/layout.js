import { Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const font = Syne({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "ORIEL - Igniting Digital Brand Experiences.",
  description:
    "Unlock your full potential and achieve unparalleled success with our expert services. We combine cutting-edge strategies, creativity, and industry insights to deliver tailored solutions that drive exceptional results. Partnering with us ensures you receive innovative, impactful, and highly effective solutions that propel your business to new heights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}

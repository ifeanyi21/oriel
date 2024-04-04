import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const roboto = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ORIEL",
  description:
    "Unlock your full potential and achieve unparalleled success with our expert services. We combine cutting-edge strategies, creativity, and industry insights to deliver tailored solutions that drive exceptional results. Partnering with us ensures you receive innovative, impactful, and highly effective solutions that propel your business to new heights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

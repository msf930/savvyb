import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--dm_sans",
  display: "swap",
});
const themysion = localFont({
  src: "./fonts/Themysion.ttf",
  variable: "--themysion",
  display: "swap",
});
export const metadata = {
  title: "Savvy B Studio & Collective",
  description:
    "Savvy B offers stylish, fully-equipped salon rental spaces designed for beauty professionals to elevate their services in a sophisticated and modern environment",
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} ${themysion.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

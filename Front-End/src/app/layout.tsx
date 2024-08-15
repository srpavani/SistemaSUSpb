import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { Toaster } from "sonner";
import { LoaderContextProvider } from "@/contexts/LoaderContext";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login - ESP",
  description: "Página de Login ESP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        <AuthContextProvider>
          <LoaderContextProvider>
            {children}

            <Toaster richColors expand duration={2500} />

            <Loader />
          </LoaderContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}

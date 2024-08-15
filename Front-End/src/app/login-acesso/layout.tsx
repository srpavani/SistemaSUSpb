import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Footer } from "@/components/Footer";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Home Resus",
  description: "Página inicial Resus",
};

export default function RootLayoutLoginAcesso({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}

      <Footer />
      
      <Toaster richColors expand duration={2500} />

      <Loader />
    </>
  );
}
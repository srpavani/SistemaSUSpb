import type { Metadata } from "next";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { Toaster } from "sonner";
import InputUserArea from "@/components/ResusPage/Home/InputUserArea";
import { Footer } from "@/components/Footer";
import { MenuResus } from "@/components/ResusPage/MenuResus";
import { LoaderContextProvider } from "@/contexts/LoaderContext";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Home Resus",
  description: "Página inicial Resus",
};

export default function RootLayoutHomeResus({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex w-full flex-1">
        <MenuResus />

        <main className="mt-10 mb-16 w-full px-[1.5%] xl:px-[2%] 2xl:px-[6%] flex-grow">
          <InputUserArea />

          {children}
        </main>
      </div>

      <Footer />

      <Toaster richColors expand duration={2500} />

      <Loader />
    </>
  );
}

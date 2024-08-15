import type { Metadata } from "next";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { Toaster } from "sonner";
import { MenuNeps } from "@/components/NepsPage/MenuNeps";
import InputUserArea from "@/components/NepsPage/Home/InputUserArea";
import { Footer } from "@/components/Footer";
import { LoaderContextProvider } from "@/contexts/LoaderContext";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Home NEPS",
  description: "Página inicial NEPS",
};

export default function RootLayoutHomeNEPS({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LoaderContextProvider>
        <AuthContextProvider>
          <div className="flex w-full flex-1">
            <MenuNeps />

            <main className="mt-10 mb-16 w-full px-[1.5%] xl:px-[2%] 2xl:px-[6%] flex-grow">
              <InputUserArea />

              {children}
            </main>
          </div>

          <Footer />

          <Toaster richColors expand duration={2500} />

          <Loader />
        </AuthContextProvider>
      </LoaderContextProvider>
    </>
  );
}

import type { Metadata } from "next";
import { AuthContextProvider } from "@/contexts/AuthContext";
import InputUserArea from "@/components/NepsPage/Home/InputUserArea";
import { Footer } from "@/components/Footer";
import { MenuIes } from "@/components/IEsPage/MenuIes";
import { Toaster } from "sonner";
import { LoaderContextProvider } from "@/contexts/LoaderContext";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Home IEs",
  description: "Página inicial IEs",
};

export default function LayoutHomeIEs({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LoaderContextProvider>
        <AuthContextProvider>
          <div className="flex w-full flex-1">
            <MenuIes />

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

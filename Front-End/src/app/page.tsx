import { Footer } from "@/components/Footer";
import LoginForm from "@/components/Login/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-grow justify-center mt-12 mb-16">
        <div className="flex justify-center items-center bg-white">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
import { SignIn } from "@clerk/nextjs";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Page() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl">
        <SignIn />
      </div>
    </BackgroundGradientAnimation>
  );
}
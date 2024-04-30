import { Ichildren } from "../../../@types/index";
export default function MainWrapper({ children }: Ichildren) {
  return (
    <main className="w-full h-screen flex items-center justify-center text-foreground bg-background">
      {children}
    </main>
  );
}

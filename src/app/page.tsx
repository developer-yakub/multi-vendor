import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/themeToggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end gap-x-5">
        <UserButton />
        <ThemeToggle />
      </div>
      <h1 className="text-3xl text-red-600 font-barlow">my - vendor - app</h1>
    </div>
  );
}

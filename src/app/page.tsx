import { Button } from "@/components/ui/button";
import Image from "next/image";
import ThemeToggle from "@/components/shared/themeToggle";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end">
        <ThemeToggle/>
      </div>
      <h1 className="text-3xl text-red-600 font-barlow">my - vendor - app</h1>
      <Button variant={"destructive"}>Click me</Button>
    </div>
  );
}

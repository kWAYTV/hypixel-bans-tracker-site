import { BackButton } from "@/components/core/reusable/back-button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function InfoHeader() {
  return (
    <header className="border-b">
      <div className="w-full px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <BackButton href="/" />
          <h1 className="text-xl font-semibold">Information</h1>
        </div>

        <ModeToggle />
      </div>
    </header>
  );
}

import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full items-center justify-center p-6">
      <Spinner className="size-8 text-primary" />
    </div>
  );
}

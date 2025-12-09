import { PhoneIcon } from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";

type DialerProps = {
  number: string;
};

const keypad = [
  { label: "1", letters: "" },
  { label: "2", letters: "ABC" },
  { label: "3", letters: "DEF" },
  { label: "4", letters: "GHI" },
  { label: "5", letters: "JKL" },
  { label: "6", letters: "MNO" },
  { label: "7", letters: "PQRS" },
  { label: "8", letters: "TUV" },
  { label: "9", letters: "WXYZ" },
  { label: "*", letters: "" },
  { label: "0", letters: "+" },
  { label: "#", letters: "" },
];

const IPhoneDialer: React.FC<DialerProps> = ({ number }) => {
  return (
    // <div className="flex min-h-screen w-full max-w-md items-center justify-center rounded-3xl bg-linear-to-b from-white via-neutral-50 to-neutral-100 p-6 text-white md:min-h-[80vh]">
    <div className="flex min-h-[80vh] w-full max-w-sm mx-auto md:mx-0 items-center justify-center rounded-3xl p-2 sm:p-6 text-white md:min-h-[80vh]">
      <div className="w-full max-w-sm rounded-3xl bg-linear-to-b from-neutral-50/80 to-white/60 p-6 shadow-2xl ring-1 ring-black/5">
        <div className="mb-6 text-center">
          <p className="text-neutral-600 text-sm">Enter Number</p>
          <div className="mx-auto mt-3 max-w-xs rounded-xl border border-black/6 bg-black/6 px-4 py-3 backdrop-blur-sm">
            <p className="font-light text-4xl text-neutral-800 tracking-wide">
              {number}
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-3 gap-4 px-2">
          {keypad.map((key) => (
            <Button
              aria-label={`Dial ${key.label}`}
              className={`flex h-20 w-20 flex-col items-center justify-center rounded-full bg-neutral-800/60 font-medium text-2xl shadow-inner ring-1 ring-white/5 backdrop-blur-sm transition-transform hover:scale-[1.02] active:scale-95`}
              key={key.label}
            >
              <span className="leading-none">{key.label}</span>
              <span className="text-neutral-200 text-xs">{key.letters}</span>
            </Button>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            aria-label="Call"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-b from-green-500 to-green-600 font-semibold text-3xl shadow-lg ring-1 ring-white/6 transition-transform hover:scale-105 active:scale-95"
            href={`tel:${number}`}
          >
            <PhoneIcon className="size-8" size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IPhoneDialer;

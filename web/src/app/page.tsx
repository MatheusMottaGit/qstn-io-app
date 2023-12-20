import { Button } from "@/components/ui/button";
import { AtSign, ClipboardSignature, Fingerprint } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center gap-12">
      <div className="flex flex-col gap-5 items-center w-72 bg-slate-100 p-4 rounded-md shadow">
        <ClipboardSignature />

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Sign your role</h1>
          <p className="text-slate-500 text-base">
            Are you a <strong>teacher</strong> or <strong>student</strong>?
          </p>
        </div>

        <Button className="w-full text-sm font-semibold gap-1">
          <AtSign className="w-4 h-4" />
          Sign with Google
        </Button>

        <p className="text-center text-sm text-slate-500">
          By clicking continue, you agree to our{" "}
          <a href="" className="underline font-semibold">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="" className="underline font-semibold">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col gap-5 items-center w-72 bg-slate-100 p-4 rounded-md shadow">
        <Fingerprint />

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Join Qstn</h1>
          <p className="text-slate-500 text-base">
            Use your default <strong>google acount</strong>.
          </p>
        </div>

        <Button className="w-full text-sm font-semibold gap-1">
          <AtSign className="w-4 h-4" />
          Sign with Google
        </Button>

        <p className="text-center text-sm text-slate-500">
          By clicking continue, you agree to our{" "}
          <a href="" className="underline font-semibold">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="" className="underline font-semibold">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </main>
  );
}

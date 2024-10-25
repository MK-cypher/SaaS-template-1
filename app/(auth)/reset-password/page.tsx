import Logo from "@/components/Logo";
import ResetPasswordForm from "@/components/resetPasswordForm";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-svh flex flex-col">
      <div className="w-full container mx-auto relative">
        <Link href={"/"} className="w-fit block top-0 left-0">
          <Logo />
        </Link>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <ResetPasswordForm />
      </div>
    </div>
  );
}

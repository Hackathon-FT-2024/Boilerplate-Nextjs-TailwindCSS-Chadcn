import { SignUpForm } from "./signUpForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="text-center font-semibold text-5xl my-[6%] pb-2 sm:my-[1%] ">
        Créer un compte
      </h1>
      <SignUpForm />
      <div className="mx-auto place-content-center text-sm mb-[10%] sm:mb-[3%] text-center w-[50%]">
        <p className="text-primary">
          Vous avez un compte ? <br className="my-2" />
          <Link
            className="hover:underline hover:underline-offset-4 text-accent"
            href="/login"
          >
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}

// form: zod for schema & shadcn for ui (from tuto)

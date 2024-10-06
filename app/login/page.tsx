import { LogInForm } from "./logInForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto  min-h-screen">
      <h1 className="text-center font-semibold text-5xl my-[6%] pb-2 sm:my-[1%] ">
        Connexion
      </h1>
      <LogInForm />
      <div className="mx-auto place-content-center text-sm mb-[10%] sm:mb-[5%] mt-2 text-center w-72">
        <div className="grid grid-cols-1 xs:grid-cols-2">
          <Link
            className="hover:underline hover:underline-offset-4"
            href="/signup"
          >
            Créer un compte
          </Link>
          <Link className="hover:underline hover:underline-offset-4" href="/">
            Mot de passe oublié ?
          </Link>
        </div>
      </div>
    </div>
  );
}

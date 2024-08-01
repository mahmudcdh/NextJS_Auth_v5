
import { auth } from "@/auth";
import SocialLoginForm from "./SocialLoginForm";
import CredentialsLoginForm from "./CredentialsLoginForm";
import { redirect } from "next/navigation";
import Link from "next/link";


export default async function LoginForm() {

  const session = await auth();
  if(session?.user) redirect('/home');

  return (
    <div>
        <CredentialsLoginForm/>
        <SocialLoginForm/>
        <p className="text-center text-sm mt-4 px-2">Not registered yet? 
          <Link href="/register" className="ml-2 bg-green-600 p-2 hover:bg-green-700 text-white rounded-md transition-color">Signup Now</Link>
        </p>
    </div>
  )
}

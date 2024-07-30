
import { auth } from "@/auth";
import SocialLoginForm from "./SocialLoginForm";
import CredentialsLoginForm from "./CredentialsLoginForm";
import { redirect } from "next/navigation";


export default async function LoginForm() {

  const session = await auth();
  if(session?.user) redirect('/home');

  return (
    <div>
        <CredentialsLoginForm/>

        <SocialLoginForm/>
    </div>
  )
}

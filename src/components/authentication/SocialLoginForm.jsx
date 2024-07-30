import Image from "next/image";
import { Button } from "../ui/button";
import { doSocialLogin } from "@/app/actions";


export default function SocialLoginForm() {
  return (
    <div>
        <h2 className="mb-2 text-center">Login Using Social Authentication</h2>
        <form action={doSocialLogin}>
            <Button variant="destructive" type="submit" name="action" value="google">
              {/* <GoalIcon className="w-4 h-4 mr-2" /> */}
              <Image src="/icons/google.svg" className="w-4 h-4 mr-2" width={16} height={16} alt="Google" />
              Login with Google
            </Button>
            &nbsp;
            <Button type="submit" name="action" value="github">
              {/* <Mail className="w-4 h-4 mr-2" /> */}
              <Image src="/icons/github.svg" className="w-4 h-4 mr-2" width={16} height={16} alt="Github" />
              Login with Github
            </Button>
        </form>
    </div>
  )
}


import { auth } from "@/auth"
import Logout from "@/components/authentication/Logout";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {

    const session = await auth();

    if(!session?.user) redirect('/');

  return (
    <div className="flex flex-row gap-3 items-center m-4">
        <Image src={session?.user?.image} alt={ session?.user?.name } width={50} height={50} className="rounded-full" />
        <h1 className="text-2xl my-2">{ session?.user?.name }</h1>
        <Logout/>
    </div>
  )
}

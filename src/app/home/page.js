
import { auth } from "@/auth"
import Logout from "@/components/authentication/Logout";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {

    const session = await auth();

    if(!session?.user) redirect('/');

  return (
    <div className="flex flex-row gap-3 items-center m-4">
      <h2 className="text-xl text-green-500 items-center text-center">Welcome Next Auth v5</h2>
      {session?.user?.image && session?.user?.name ?
        (<div><Image src={session?.user?.image} alt={ session?.user?.name } width={50} height={50} className="rounded-full" />
        <h1 className="text-2xl my-2">{ session?.user?.name }</h1></div>)
        :
        (<h1 className="text-2xl my-2">{ session?.user?.email }</h1>)}
        <Logout/>
    </div>
  )
}

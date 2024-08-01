"use client"

import { auth } from "@/auth";
import { KeySquare } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation"


export default function RegisterForm() {

  const router = useRouter();
    
    // const session = await auth();
    // if(session?.user) redirect('/home');

    async function handleSubmit(ev){
        ev.preventDefault()

        try{
          const formData = new FormData(ev.currentTarget);

          const name = formData.get('name');
          const email = formData.get('email');
          const password = formData.get('password');

          const response = await fetch( `/api/register`, {
            method: 'POST',
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
          });

          response.status === 201 && router.push('/');

        }
        catch(err){
          console.error(err.message)
        }
    }

  return (
    <>
        <h2 className="mb-3 text-center font-semibold">Signup with Your Credential</h2>
        <form onSubmit={handleSubmit} className="bg-slate-300 p-4 rounded-md shadow-md mb-5 w-1/3">
          <div className="mb-3">
            <Label className="p-3" htmlFor="name">Name</Label>
            <Input className="mt-1" type="text" name="name" id="name" placeholder="Name"/>
          </div>
          <div className="mb-3">
            <Label className="p-3" htmlFor="email">Email Address</Label>
            <Input className="mt-1" type="email" name="email" id="email" placeholder="Email"/>
          </div>
          <div className="mb-3">
            <Label className="p-3" htmlFor="password">Password</Label>
            <Input className="mt-1" type="password" name="password" id="password" placeholder="Password"/>
          </div>
          <div className="flex flex-row gap-3 justify-between">
            <Button variant="destructive" type="submit">
                <KeySquare className="w-4 h-4 mr-2" />
                Sign Up
            </Button>
            <p className="py-3 text-sm">Already have an account?  
                <Link href="/" className="ml-2 bg-green-600 p-2 hover:bg-green-700 text-white rounded-md transition-color">Login</Link>
            </p>
          </div>
        </form>
    </>
  )
}

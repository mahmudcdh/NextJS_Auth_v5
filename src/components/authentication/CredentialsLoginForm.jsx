'use client'

import { KeySquare } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { doCredentialLogin } from "@/app/actions"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function CredentialsLoginForm() {

    const router = useRouter()
    const [error, setError] = useState('')

    async function handleFormSubmit(ev){
        ev.preventDefault()

        try{
            const formData = new FormData(ev.currentTarget);

            const response = await doCredentialLogin(formData);

            if(!!response.error){
                setError(response.error.message);
            }else{
                router.push('/home')
            }

        }
        catch(err){
            console.error(err);
            setError('Check your Credentials')
        }
    }

  return (
    <>
        <h2 className="mb-3 text-center font-semibold">Login with User Credential</h2>
        {error && 
        <div className="mb-1 p-2 text-center text-xs font-semibold bg-red-300 rounded-md">
            {error}
        </div>
        }
        <form onSubmit={handleFormSubmit} className="bg-slate-300 p-4 rounded-md shadow-md mb-5">
          <div className="mb-3">
            <Label className="p-3" htmlFor="email">Email Address</Label>
            <Input className="mt-1" type="email" name="email" id="email" placeholder="Email"/>
          </div>
          <div className="mb-3">
            <Label className="p-3" htmlFor="password">Password</Label>
            <Input className="mt-1" type="password" name="password" id="password" placeholder="Password"/>
          </div>
          <Button variant="destructive" type="submit">
            <KeySquare className="w-4 h-4 mr-2" />
            Sign In
          </Button>
        </form>
    </>
  )
}

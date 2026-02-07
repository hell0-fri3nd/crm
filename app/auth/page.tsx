"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AuthInput from "@/features/auth/components/auth-input"

export default function LoginPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push("/pages")
    router.refresh()
  }

  return (

    <form className="flex flex-col gap-6 w-full max-w-full"  onSubmit={handleSubmit}>

      <div className="grid gap-6  w-full">
        <AuthInput 
        label="Email" 
        type="email" 
        placeholder="you@company"
        value={user.email} 
        onChange={(e) => setUser({ ...user, email: e.target.value })} 
        required/>

        <AuthInput 
        label="Password" 
        type="password" 
        placeholder="You Company" 
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })} 
        required/>
      </div>
        
      <Button className="w-full" type="submit">
        Login
      </Button>

      <p className="text-center text-sm text-muted-foreground mt-4">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/signup"
          className="font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
        >
          Sign up
        </Link>
      </p>
    </form>
  )
}

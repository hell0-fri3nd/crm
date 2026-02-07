"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import AuthLayout from "@/features/auth/components/auth-layout"
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
        
      <Button className="w-full" type='submit'>Login</Button>

    </form>
  )
}

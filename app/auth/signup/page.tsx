"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AuthInput from "@/features/auth/components/auth-input"

export default function SignUpPage() {
  const router = useRouter()
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push("/pages")
    router.refresh()
  }

  return (
    <form
      className="flex flex-col gap-6 w-full max-w-full"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-6 w-full">

        <div className="flex flex-col gap-4 sm:flex-row">
        <AuthInput
          label="First Name"
          type="text"
          placeholder="First name"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          required
        />

        <AuthInput
          label="Last Name"
          type="text"
          placeholder="Last name"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          required
        />
        </div>

        <AuthInput
          label="Email"
          type="email"
          placeholder="lisboamillen30@gmail.com"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="123456"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
      </div>

      <Button className="w-full" type="submit">
        Create account
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/auth"
          className="font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
        >
          Log in
        </Link>
      </p>
    </form>
  )
}

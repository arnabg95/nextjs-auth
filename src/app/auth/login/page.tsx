"use client"

import { signIn, signOut } from "next-auth/react"
import { FormEvent } from "react";

export default function Page() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signIn("credentials",{email: "tejhvadsa", password: "asdasdad"} )
}
  return (
    <>
    <form onSubmit={handleSubmit} >
        <input type="email" placeholder="email" />
        <input type="submit" value="Login" />
    </form>
    <button onClick={() => signIn("github")}>Github Login</button>
    <button onClick={() => signOut()}>Logout</button>
    </>
  )
}

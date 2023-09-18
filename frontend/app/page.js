// import Task from "@/components/CreateTask"

import Link from "next/link"
export default function Home() {
  return (
    <main>
      hi
      <Link href={'/login'}>login</Link>
      <Link href={'/register'}>Register</Link>
      
    </main>
  )
}

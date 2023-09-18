// import Task from "@/components/CreateTask"
import Login from "@/components/Login"
import Register from "@/components/Register"
import TaskList from "@/components/TaskList"
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

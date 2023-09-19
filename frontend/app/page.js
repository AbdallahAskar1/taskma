// import Task from "@/components/CreateTask"

import Link from "next/link"
export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
     <section className="text-center">
        <h1 className="text-4xl font-semibold mb-4">Welcome to Your Task Manager</h1>
        <p className="text-lg text-gray-600 mb-8">Manage your tasks efficiently with time tracking</p>
        <div className="space-x-4">
          <Link href="/login"  className="btn bg-blue-500 text-white rounded-full hover:bg-blue-600 py-2  w-[100px]">
              Login
          </Link>
          <Link href="/register" className="btn bg-gray-400  text-white rounded-full hover:bg-gray-600 py-2  w-[100px] ">
              Register
          </Link>
        </div>
      </section>
      
    </main>
  )
}

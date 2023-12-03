import Link from "next/link";

export default function () {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-96">
        <h2 className="text-3xl font-bold mb-8 text-red-500">Login</h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="john.doe@example.com" className="w-full p-2 border border-gray-400 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full p-2 border border-gray-400 rounded" />
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="text-white-500 bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded w-full md:w-auto">Login</button>
            <Link href="/accounts/forgot-password" className="text-red-500 hover:text-red-600">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
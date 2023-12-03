export default function RegisterPage() {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <div className="bg-white-500 p-8 rounded-lg shadow-lg w-full md:w-96">
        <h2 className="text-3xl font-bold mb-8 text-orange-500">Register New User</h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" className="w-full p-2 border border-gray-300 rounded"/>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="john.doe@example.com" className="w-full p-2 border border-gray-300 rounded"/>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full p-2 border border-gray-300 rounded"/>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Confirm Password</label>
            <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Confirm your password" className="w-full p-2 border border-gray-300 rounded"/>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white-500 font-bold p-2 rounded w-full md:w-auto">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}
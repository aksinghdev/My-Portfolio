
import { useState } from "react"
import axios from "axios"

export default function Login(){

  const [form,setForm] = useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      form
    )

    alert("Login Successful")
  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-[#081b29]">

      <form
        onSubmit={handleSubmit}
        className="bg-[#112e42] p-8 rounded-xl flex flex-col gap-4 w-[350px]"
      >

        <h2 className="text-white text-2xl text-center">
          Login
        </h2>

        <input
          name="email"
          placeholder="Email"
          className="p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-2 rounded"
          onChange={handleChange}
        />

        <button className="bg-cyan-500 text-white py-2 rounded">
          Login
        </button>

      </form>

    </div>

  )

}
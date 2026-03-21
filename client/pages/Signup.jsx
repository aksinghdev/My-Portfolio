
import { useState } from "react"
import axios from "axios"

export default function Signup(){

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()

    await axios.post(
      "http://localhost:5000/api/auth/signup",
      form
    )

    alert("Account Created")
  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-[#081b29]">

      <form
        onSubmit={handleSubmit}
        className="bg-[#112e42] p-8 rounded-xl flex flex-col gap-4 w-[350px]"
      >

        <h2 className="text-white text-2xl text-center">
          Signup
        </h2>

        <input
          name="name"
          placeholder="Name"
          className="p-2 rounded"
          onChange={handleChange}
        />

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
          Signup
        </button>

      </form>

    </div>

  )

}
import { useForm } from "react-hook-form";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import {useDispatch} from "react-redux";
import { apiConnector } from "../../api/apiConnector";
import { authEndpoints } from "../../api/apis";


export default function Signup(){

  const navigate = useNavigate();
  const {SIGNUP_API} = authEndpoints;
  const {register,reset,handleSubmit,formState:{errors}} = useForm();

  const onSubmit = async(data)=>{
    console.log("data ",data);
    console.log("signup api :",SIGNUP_API);
    try{
        const responce = await apiConnector(
          "POST",
          SIGNUP_API,
          data,
          null,
          null
        )
      if(!responce?.data.success){
        throw new Error(responce.data.message);
      }

      localStorage.setItem("token", responce.data.token);
      alert("Account Created");
      reset();
      navigate("/login");

    }catch(err){
      
      alert("Signup Failed");
      console.log(err);
    }

  }

  return(

    <div className="bg-[#081b29] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full">
      {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white">
            Sign Up with Me
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Have a project or opportunity? Send me a message.
          </p>
        </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="backdrop-blur-lg bg-white/5 border border-white/10
          p-8 rounded-xl flex flex-col gap-5 shadow-lg"
      >

        <input
          placeholder="Name"
          autoComplete="name"
          {...register("name",{required:true})}
          className="p-3 rounded-md bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        {errors.name && (
          <span className="text-red-400 text-sm">
            Name required
          </span>
        )}

        <input
          autoComplete="email"
          placeholder="Email"
          {...register("email",{required:true})}
          className="p-3 rounded-md bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <input
          type="password"
          autoComplete="new-password"
          placeholder="Password"
          {...register("password",{required:true,minLength:6})}
          className="p-3 rounded-md bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <button
          className="bg-cyan-700 hover:bg-cyan-600 border-2 border-cyan-600
            text-richblack-100 font-semibold py-3 rounded-full
            shadow-[0_0_15px_rgba(34,211,238,0.6)]
            transition duration-300"
        >
          Create Account
        </button>

      </form>
        </div>
    </div>

  )

}
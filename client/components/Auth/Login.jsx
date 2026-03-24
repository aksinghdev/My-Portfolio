import { useForm } from "react-hook-form";
import axios from "axios";
import { apiConnector } from "../../api/apiConnector";
import { userEndpoints } from "../../api/apis";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login(){

  const {register, reset, handleSubmit,formState:{errors}} = useForm();
  const navigate = useNavigate();

  const onSubmit = async(data)=>{

    try{
      const responce = await apiConnector(
        "POST",
        userEndpoints.LOGIN_API,
        data,
        null,
        null,
      )
      if(!responce?.data.success){
        throw new Error(responce.data.message)
      }

      console.log("inside login jsx print api responce : ",responce);
      console.log("inside login jsx print api responce user : ",responce.data.user);

      localStorage.setItem("token",responce.data.token);   // token save to local storage
      localStorage.setItem("user",JSON.stringify(responce.data.user));   // user save to local storage
      reset();

      toast.success("Login Successful");
      navigate("/dashboard");

    }catch(err){
      toast.error("Invalid Credentials");
      console.log("login api error",err);
    }

  }

  return(

    <div className="bg-[#081b29] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white">
            Login to know more
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Download my resume from dashboard. See my projects demo.
          </p>
        </div>


        <form
          onSubmit={handleSubmit(onSubmit)}
          className="backdrop-blur-lg bg-white/5 border border-white/10
          p-8 rounded-xl flex flex-col gap-5 shadow-lg"
        >
          <p className=" text-center text-xl font-semibold text-richblack-100 px-2 py-3">Log In</p>
          <input
            placeholder="Email"
            autoComplete="email"
            {...register("email",{required:true})}
            className="p-3 rounded-md bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {errors.email && (
            <span className="text-red-400 text-sm">
              Email is required
            </span>
          )}

          <input
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            {...register("password",{required:true})}
            className="p-3 rounded-md bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {errors.password && (
            <span className="text-red-400 text-sm">
              Password is required
            </span>
          )}

          <button
            className="bg-cyan-700 hover:bg-cyan-600 border-2 border-cyan-600 text-richblack-100
             font-semibold py-3 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)] transition duration-300"
             >
            Login
          </button>

        </form>
      </div>
    </div>

  )

}
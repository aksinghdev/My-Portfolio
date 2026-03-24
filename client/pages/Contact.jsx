import { useForm } from "react-hook-form";
import axios from "axios";
import { apiConnector } from "../api/apiConnector";
import { userEndpoints } from "../api/apis";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import Spinner from "../components/Auth/Spinner";

export default function Contact() {

  const [loading, setLoading] = useState(false)
  const { CONTACT_API} = userEndpoints;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState:{errors}
  } = useForm();

  const onSubmit = async(data)=>{
      setLoading(true);
    try{
      const responce = await apiConnector(
        "POST",
        CONTACT_API,
        data,
        null,
        null,
      )
      console.log("contact responce",responce);
      if(!responce?.data.success){
        throw new Error(responce?.data.message) 
      }
      reset();
      setLoading(false);
      toast.success("Your message submitted successfuly")
      navigate("/");

    }catch(err){
      toast.error("Mssage sending Failed")
      console.log("Message not sent ",err)
      setLoading(false)
      console.log(responce?.data.message);
    }

  };

  return(

    <section className="bg-[#081b29] min-h-screen flex items-center justify-center px-6">

      <div className="max-w-xl w-full">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white">
            Contact Me
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Have a project or opportunity? Send me a message.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="backdrop-blur-lg bg-white/5 border border-white/10
          p-8 rounded-xl flex flex-col gap-5 shadow-lg"
        >

          <input
            placeholder="Your Name"
            {...register("name",{required:true})}
            className="p-3 rounded-md bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {errors.name && (
            <span className="text-red-400 text-sm">
              Name is required
            </span>
          )}

          <input
            type="email"
            placeholder="Your Email"
            {...register("email",{required:true})}
            className="p-3 rounded-md bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {errors.email && (
            <span className="text-red-400 text-sm">
              Email is required
            </span>
          )}

          {/* Optional Mobile */}
          <input
            placeholder="Mobile Number (optional)"
            {...register("mobileNo")}
            className="p-3 rounded-md bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            placeholder="Subject"
            {...register("subject",{required:true})}
            className="p-3 rounded-md bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {errors.subject && (
            <span className="text-red-400 text-sm">
              Subject is required
            </span>
          )}

          <textarea
            rows="5"
            placeholder="Your Message"
            {...register("message",{required:true})}
            className="p-3 rounded-md bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          />

          {errors.message && (
            <span className="text-red-400 text-sm">
              Message is required
            </span>
          )}

          <button
            type="submit"
            className="bg-cyan-700 hover:bg-cyan-600 border-2 border-cyan-600
            text-richblack-100 font-semibold py-3 rounded-full
            shadow-[0_0_15px_rgba(34,211,238,0.6)]
            transition duration-300"
          >
            {loading ? <Spinner/> : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  );
}
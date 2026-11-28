import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../components/FormSchema/registerschema";

function Register() {
  const navigate = useNavigate();

  const {register,handleSubmit,formState: { errors }} = useForm({
    resolver: zodResolver(registerschema),
  });

  function onSubmit(data) {
    console.log(data);
    alert("register successful");
    navigate("/login",{state:data});
  }

  return (
    <>
      <div className="text-blue-700 font-bold font-sans text-3xl w-fit mt-3 mx-auto">Sign In</div>
      <hr className="bg-gray-600 w-70 mx-auto mt-2"/>
      <form onSubmit={handleSubmit(onSubmit)} className="w-77 mx-auto mt-15 p-3 pt-4 flex flex-col items-start gap-4 bg-slate-50 rounded shadow-2xl shadow-slate-400 border-2 border-gray-100">
        <div className="flex items-center gap-10">
          <label htmlFor="name" className="text-sm font-bold text-slate-900">Name:</label>
          <input id="name" type="text" {...register("name")} className="border border-slate-300 rounded-xl px-2 py-1"/>
        </div>
        <p className="text-red-500 text-sm">{errors.name?.message}</p>

        <div className="flex items-center gap-10">
          <label htmlFor="email" className="text-sm font-bold text-slate-900">Email:</label>
          <input id="email" type="email" {...register("email")} className="border border-slate-300 rounded-xl px-2 py-1"/>
        </div>
        <p className="text-red-500 text-sm ">{errors.email?.message}</p>

        <div className="flex items-center gap-4">
          <label htmlFor="pass" className="text-sm font-bold text-slate-900">Password:</label>
          <input id="pass" type="password" {...register("pass")} className="border border-slate-300 rounded-xl px-2 py-1"/>
        </div>
        <p className="text-red-500 text-sm">{errors.pass?.message}</p>

        <div className="flex items-center gap-13">
          <label htmlFor="age" className="text-sm font-bold  text-slate-900">Age:</label>
          <input id="age" type="number" {...register("age")} className="border border-slate-300 rounded-xl px-2 py-1"/>
        </div>
        <p className="text-red-500 text-sm">{errors.age?.message}</p>

        <button type="submit" className="self-center w-60 bg-gray-600 text-white rounded-sm px-2 py-1 mb-3 hover:bg-gray-800 border border-slate-400">Submit</button>
      </form>
    </>
  );
}

export default Register;

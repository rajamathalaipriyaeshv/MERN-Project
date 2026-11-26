import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../components/FormSchema/registerschema";

function Register() {
  const navigate = useNavigate();

  const {register,handleSubmit,formState: { errors }} = useForm({
    resolver: zodResolver(registerschema),
  });

  function onSubmit1(data) {
    console.log(data);
    alert("register successful");
    navigate("/login");
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit1)} className="w-fit mx-auto mt-15 p-6 flex flex-col items-end gap-5 bg-slate-50 rounded shadow border-2 border-gray-100">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-slate-900">Enter Email:</label>
          <input type="email" {...register("email")} className="border border-slate-300 rounded px-2 py-1"/>
        </div>
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-slate-900">Enter Password:</label>
          <input type="password" {...register("pass")} className="border border-slate-300 rounded px-2 py-1"/>
        </div>
        <p className="text-red-500 text-sm">{errors.pass?.message}</p>

        <button type="submit" className="self-center bg-gray-600 text-white rounded-sm px-2 py-1 hover:bg-gray-800 border border-slate-400">Submit</button>
      </form>
    </>
  );
}

export default Register;

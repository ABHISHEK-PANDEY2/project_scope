import pattern from "../../static/images/login/pattern.svg";
import logo from "../../static/brand/logo-dark.svg";
import { FcGoogle } from "react-icons/fc";
import AuthForm from "../../common/component/form";

const Signup = () => {
  return (
    <section className="flex w-full h-full">
      <div className="flex-1 w-full flex justify-center items-center px-5">
        <div className="w-full max-w-[350px] flex flex-col gap-3">
          <div className="logo w-52 mx-auto lg:mx-0">
            <img className="w-full" src={logo} alt="" />
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-[#424242] mb-3 text-center lg:text-start">
              Sign Up
            </h3>
            <p className="text-center lg:text-start">
              Join the Project Scope for free!
            </p>
          </div>
          <button className="w-full bg-blue-100 rounded-full flex gap-3 justify-center items-center h-14 mt-7 mb-3 outline-none hover:bg-blue-50">
            <FcGoogle /> Signup with Google
          </button>
          <div className="flex gap-3 items-center justify-between">
            <hr className="flex-auto border-1" />
            <p className="flex-1">Or use email</p>
            <hr className="flex-auto border-1" />
          </div>
          <div>
            <AuthForm />
          </div>
        </div>
      </div>
      <div className="flex-1 h-full overflow-y-hidden lg:block hidden">
        <img className="ml-auto h-full" src={pattern} alt="" />
      </div>
    </section>
  );
};

export default Signup;

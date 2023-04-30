import pattern from "../../static/images/login/pattern.svg";
import logo from "../../static/brand/logo-dark.svg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section className="flex w-full h-full">
      <div className="flex-1 flex justify-center items-center">
        <div className="w-fit flex flex-col">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div>
            <h3>Sign in</h3>
            <p></p>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full overflow-y-hidden lg:block hidden">
        <img className="ml-auto h-full" src={pattern} alt="" />
      </div>
    </section>
  );
};

export default Login;

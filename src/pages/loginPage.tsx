import GoogleIcon from "../assets/googleIcon";
import FacebookIcon from "../assets/facebookIcon";
import { FunctionComponent } from "react";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className="flex items-center bg-white w-full md:w-1/2 h-screen ">
        <div className="px-20 py-20">
          <p className="text-3xl font-bold mb-5">Log in to your Account</p>
          <p className="text-sm font-light mb-10 text-gray-500">
            Welcome back! Select method to log in:
          </p>
          <div className="flex flex-row gap-2 mb-10">
            <button
              type="button"
              className="w-full h-10 text-sm bg-white border border-gray-100 text-black rounded-lg hover:bg-black-300"
            >
              <GoogleIcon className="inline-block w-6 h-6 mr-2" />
              Google
            </button>
            <button
              type="button"
              className="w-full text-sm bg-white border border-gray-100 text-black rounded-lg hover:bg-black-300"
            >
              <FacebookIcon className="inline-block w-6 h-6 mr-2" />
              Facebook
            </button>
          </div>
          <p className="flex justify-center text-xs font-light text-gray-300 mb-5">
            or continue with email
          </p>
          <form>
            <div className="mb-5">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Email"
                className="border bg-gray-50 border-gray-200 p-2 w-full rounded-lg"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="border bg-gray-50 border-gray-200 p-2 w-full rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Log in
            </button>
            <div className="flex flex-row justify-between items-center mt-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="mr-2"
                />
                <label className="text-gray-500 text-xs">Remember me</label>
              </div>
              <div>
                <p className="text-blue-700 text-xs">Forgot password?</p>
              </div>
            </div>

            <p className="flex justify-center text-gray-500 text-xs mt-5">
              Dont't have an account?
              <span className="text-blue-700">Create an account!</span>
            </p>
          </form>
        </div>
      </div>
      <div className="bg-gray-500 w-full md:w-1/2 h-screen">
        <div className="p-10">
          <h2 className="text-3xl font-bold text-white mb-5">Carousel</h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

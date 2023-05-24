import { initializeApp } from "firebase/app";
import GoogleIcon from "../assets/googleIcon";
import FacebookIcon from "../assets/facebookIcon";
import { FunctionComponent, useState } from "react";
import "firebase/auth";
import "firebase/firestore";
import Registration from "./registrationPage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseConfiguration } from "../config/config";
interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  const [isRegistrationPage, setIsRegistrationPage] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const navigate = useNavigate();
  const app = initializeApp(firebaseConfiguration);
  const auth = getAuth(app);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user logged in", user);
        navigate("/dashboard-page");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (isRegistrationPage) {
    return <Registration />;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className="flex justify-center items-center bg-white w-full md:w-1/2 h-screen ">
        <div className="py-20">
          <p className="text-3xl font-bold mb-5">Log in to your account</p>
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
                id="email"
                name="email"
                placeholder="Email"
                className="border bg-gray-50 border-gray-200 p-2 w-full rounded-lg"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="border bg-gray-50 border-gray-200 p-2 w-full rounded-lg"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              disabled={isLogin}
              type="submit"
              className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              onClick={handleLogin}
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
                <button className="text-blue-700 text-xs">
                  Forgotten password?
                </button>
              </div>
            </div>

            <p className="flex justify-center text-gray-500 text-xs mt-5">
              Dont't have an account?{" "}
              <button
                disabled={isLogin}
                className="text-blue-700 ml-2"
                onClick={() => navigate("/registration-page")}
              >
                Create an account!
              </button>
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

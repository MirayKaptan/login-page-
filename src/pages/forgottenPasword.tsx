import { FunctionComponent, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
interface ForgottenPasswordProps {}

const ForgottenPassword: FunctionComponent<ForgottenPasswordProps> = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const handleLoginPage = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/login-page");
  };
  const handleForgotPassword = () => {
    if (email !== "") {
      alert("Password reset email sent");
      navigate("/login-page");
    }
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center bg-white w-full md:w-1/2 h-screen ">
        <div>
          {" "}
          <h2 className="text-3xl font-bold text-black mb-5">
            Forgot Password?
          </h2>
          <h3 className="mb-5 text-gray-400">
            Please enter the email you use to sign in.
          </h3>
          <form>
            <div className="mb-5">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="border bg-gray-50 border-gray-200 p-2 w-full rounded-lg"
              />
            </div>

            <button
              color="success"
              type="submit"
              className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              onClick={handleForgotPassword}
            >
              Request Password Reset
            </button>
            <p className="flex justify-center text-gray-500 text-xs mt-5 mr-2">
              Already have an account?
              <button className="text-blue-700 ml-2" onClick={handleLoginPage}>
                Log in!
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

export default ForgottenPassword;

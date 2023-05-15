import { initializeApp } from "firebase/app";
import "firebase/auth";
import { FunctionComponent, useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import ErrorText from "../components/errorText";
import { firebaseConfiguration } from "../config/config";
interface RegistrationProps {}

const RegistrationPage: FunctionComponent<RegistrationProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const signUpWithEmailAndPassword = () => {
    if (password !== confirm) {
      setError("Please make sure your passwords match.");
      return;
    }

    setError("");
    setIsRegistration(true);

    const app = initializeApp(firebaseConfiguration);
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered:", user);
      })
      .catch((error) => {
        console.log("Registration error:", error);
        if (error.code.includes("weak-password")) {
          setError("Please enter a stronger password.");
        } else if (error.code.includes("email-already-in-use")) {
          setError("Email already in use.");
        } else {
          setError("Registration failed. Please try again later.");
        }
      });
  };
  return (
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className="flex justify-center items-center bg-white w-full md:w-1/2 h-screen ">
        <div>
          {" "}
          <h2 className="text-3xl font-bold text-black mb-5">
            Create an account
          </h2>
          <form>
            <div className="mb-5">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
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
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="border bg-gray-50 border-gray-200 p-2 w-full rounded-lg"
                onChange={(event) => setConfirm(event.target.value)}
                value={confirm}
              />
            </div>
            <button
              disabled={isRegistration}
              color="success"
              type="submit"
              className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              onClick={() => signUpWithEmailAndPassword()}
            >
              Sign Up
            </button>
            <p className="flex justify-center text-gray-500 text-xs mt-5 mr-2">
              Already have an account?
              <button className="text-blue-700 ml-2">Log in!</button>
            </p>
            <ErrorText error={error} />
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

export default RegistrationPage;

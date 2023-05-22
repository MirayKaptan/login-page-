import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="p-20 justify-center items-center ">
      <p className="mb-5 flex justify-center">Welcome to the page!</p>
      <button
        className="w-full h-10 text-white bg-orange-400 rounded-lg mb-10"
        type="button"
        onClick={() => navigate("./login-page")}
      >
        Click here to log-in with Firebase!
      </button>
      <button
        className="w-full h-10 text-white bg-blue-700 rounded-lg"
        type="button"
        // onClick={() => navigate("./login-page")}
      >
        Click here to log-in with OpenId!
      </button>
    </div>
  );
};

export default Welcome;

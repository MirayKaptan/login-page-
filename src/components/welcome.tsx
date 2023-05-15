import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="p-20 justify-center items-center">
      <p>Welcome to the page!</p>
      <button
        className="w-full h-10 text-white bg-blue-700 rounded-lg"
        type="button"
        onClick={() => navigate("./login-page")}
      >
        Click here to log-in!
      </button>
    </div>
  );
};

export default Welcome;

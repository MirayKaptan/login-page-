import { signOut } from "firebase/auth";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/config";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const navigate = useNavigate();
  const handleLogout = (event: React.FormEvent) => {
    event.preventDefault();
    signOut(auth).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="flex flex-col items-center gap-5 p-20">
      You logged in.
      <button
        className="w-full h-10 text-white bg-blue-700 rounded-lg"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default Dashboard;

import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage";
import Dashboard from "./pages/dashboard";

export interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/registration-page" element={<RegistrationPage />} />
          <Route path="/dashboard-page" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

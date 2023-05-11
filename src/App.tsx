import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import LoginPage from "./pages/loginPage";

export interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login-page" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

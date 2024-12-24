import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./public/Navbar/Navbar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

import { Outlet, Link, useLocation } from "react-router-dom";
import "../assets/logo.png";
import logo from "../assets/logo.png";

const PublicLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  let text = "Login";
  let link = "/login";

  if (currentPath === "/" || currentPath === "/login") {
    text = "Sign up";
    link = "/register";
  } else if (currentPath === "/admin/login") {
    text = "Client Login";
    link = "/login";
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-1xl text-center font-bold flex items-center text-primary"
          >
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt="Metties MedSpa"
                className="h-8 w-auto inline-block mr-2"
              />
              <span className=" text-center mt-2">Metties MedSpa</span>
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <Link
              to={link}
              className="bg-primary-blue btn-primary hover:bg-primary-lightblue"
            >
              {text}
            </Link>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;

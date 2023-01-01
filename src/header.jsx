import logo from "./images/logo.svg";
import ham from "./images/icon-hamburger.svg";
import hero from "./images/illustration-working.svg";
import $ from "jquery";

export function Header() {
  function handleNav() {
    $(".nav").toggle();
  }

  return (
    <div className="flex flex-col items-center relative">
      <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:px-24">
        <div className="flex w-10/12 justify-between items-center pt-8 pb-4 md:w-64">
          <img src={logo} alt="logo" />
          <img
            src={ham}
            alt="ham"
            className="md:hidden cursor-pointer ham"
            onClick={handleNav}
          />
          <div className="hidden md:flex">
            <p className="ml-8">Features</p>
            <p className="mx-4">Pricing</p>
            <p>Resources</p>
          </div>
        </div>
        <div className="hidden md:flex">
          <button>Login</button>
          <button className="border px-8 py-2 rounded-full ml-4 sign ">
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse ">
        <img src={hero} alt="hero" className="  md:w-7/12" />
        <div className="flex flex-col items-center md:text-left md:mt-24 md:px-16">
          <h1 className="text-4xl mt-8  md:w-full md:px-8">
            More than just shorter links
          </h1>
          <p className="mt-4 w-10/12">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <div className="w-full md:px-8">
            <button className="mt-8 border px-8 py-2 rounded-full start">
              {" "}
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="nav hidden flex flex-col items-center py-4 w-10/12">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center w-10/12 ">
            <div className="border-b pb-8 w-full">
              <p className="cursor-pointer">Features</p>
              <p className="my-8 cursor-pointer">Pricing</p>
              <p className="cursor-pointer">Resources</p>
            </div>
            <div className="flex flex-col items-center w-10/12 md:flex mt-8">
              <button>Login</button>
              <button className="border px-8 py-2 mt-4 w-full rounded-full sign ">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

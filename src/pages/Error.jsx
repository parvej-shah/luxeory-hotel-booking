import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../assets/images/errorAnimation.json";
import { useEffect } from "react";

const ErrorPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className=" flex  text-secondary min-h-screen text-center bg-[#70cfe4] flex-col justify-center items-center pb-6">
      <Lottie
        animationData={errorAnimation}
      />
      <h1 className="text-3xl font-bold mt-6">Oops!</h1>
      <p className="text-lg mt-2">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link to="/" className="">
        <button className="mt-6 px-6 py-3 bg-primary  text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark-hover hover:scale-105 transition-all">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;

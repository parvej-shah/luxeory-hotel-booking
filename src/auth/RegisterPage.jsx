import Lottie from "lottie-react";
import { useForm } from "react-hook-form"
import registerAnimation from '../assets/images/registerAnimation.json'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile} from "firebase/auth";
import { useAuth } from "./AuthProvider";
import { auth } from "../firebase.init";
export default function RegisterPage() {
  const {createUser,loginWithGoggle} = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const { userName, email, photoURL, password } = data;
    createUser(email,password)
    .then(() => {
      // Signed up 
      toast.success("Registration Successful!");
      updateProfile(auth.currentUser, {
        displayName: userName, photoURL: photoURL
      }).then(() => {
        // Profile updated!
      }).catch((error) => {
        toast.error("Profile Update Failed: " + error.message);
      });
      navigate("/");
    })
    .catch((error) => {
      /* const errorCode = error.code; */
      toast.error("Registration Failed: " + error.message);
    });
  };

  const handleLoginWithGoogle = () =>{
    loginWithGoggle()
    .then(()=>{
      toast.success("Login Successful!");
      navigate('/')
    })
    .catch((error)=>{
      toast.error("Login failed");
      console.log(error.code);
    })
  }
  return (
    <div className="lg:py-10 bg-bgEnd ">
      <div className="text-textPrimary">
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-4">
          <div className="text-center lg:text-left">
            <Lottie animationData={registerAnimation}/>
          </div>
          <div className="card bg-bgStart w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Register now!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="form-control">
                <label className="input input-bordered flex bg-bgEnd items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Username" {...register("userName", { required: "User Name is required" })}/>
                </label>
                  {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}
              </div>
              <div className="form-control">
                <label className="input input-bordered flex bg-bgEnd items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="photoUrl" {...register("photoUrl", { required: "Photo URL is required" })}/>
                </label>
                  {errors.photoUrl && <p className="text-red-500 text-sm">{errors.photoUrl.message}</p>}
              </div>
              <div className="form-control">
                <label className="input input-bordered flex items-center gap-2 bg-bgEnd">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="email" className="grow" placeholder="Email" {...register("email", { required: "Email is required" ,pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },})}/>
                </label>
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="form-control">
                <label className="input input-bordered flex items-center bg-bgEnd  gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="password" className="grow" placeholder="password" {...register("password", { required: "Country image URL is required" ,validate: {
                  hasUpperCase: (value) => /[A-Z]/.test(value) || "Must include an uppercase letter",
                  hasLowerCase: (value) => /[a-z]/.test(value) || "Must include a lowercase letter",
                  minLength: (value) => value.length >= 6 || "Must be at least 6 characters",
                },})}/>
                </label>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                <label className="label">
                  <p className="text-textPrimary text-sm">
                  Have an acount?
                  <Link to={'/login'} className="link font-medium link-hover">
                    Login
                  </Link>
                    </p>
                </label>
              </div>
              <div className="form-control mt-3">
                <button type='submit' className="btn bg-secondary font-medium border-none text-white/90 hover:bg-secondary/10 hover:text-secondary hover:border hover:border-secondary">Register</button>
              </div>
            </form>
              <div className="divider text-primary">OR</div>
              <button onClick={handleLoginWithGoogle} className="btn hover:bg-secondary font-medium border-none hover:text-white/90 bg-secondary/10 text-secondary flex justify-center items-center"><FcGoogle className="text-3xl"/> Login with Goggle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

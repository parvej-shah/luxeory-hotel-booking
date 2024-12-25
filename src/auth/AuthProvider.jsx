import { useContext, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.init";
import { toast } from "react-toastify";
import API from "../hooks/useAPI";
const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [googleAuthLoading, setGoogleAuthLoading] = useState(false);
  const [title, setTitle] = useState("Home|Luxeory");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoggle = () => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userResult) => {
      if (userResult) {
        setLoading(false);
        setUser(userResult);
        if (userResult?.email) {
          const user = { email: userResult.email };
          API.post("jwt", user, { withCredentials: true }).then(() => {
            setLoading(false);
          });
        } else {
          API.post(
            "logout",
            {},
            {
              withCredentials: true,
            }
          ).then(() => {
            setLoading(false);
          });
        }
      } else {
        setLoading(false);
        setUser(null);
      }
    });
    return () => unSubscribe();
  }, []);
  const onLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign-out successful!");
      })
      .catch(() => {
        toast.success("An Error Occured!");
      });
  };
  const value = {
    createUser,
    loginWithGoggle,
    googleAuthLoading,
    setGoogleAuthLoading,
    signInUser,
    user,
    onLogout,
    loading,
    title,
    setTitle,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

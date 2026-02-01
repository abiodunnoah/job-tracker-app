import { ref } from "vue";
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { mapAuthError } from "../utils/authErrors";

const error = ref(null);
const isPending = ref(false);
const googleProvider = new GoogleAuthProvider();

const login = async (email, password) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = "Incorrect login credentials";
    isPending.value = false;
  }
};

const loginWithGoogle = async () => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await signInWithPopup(auth, googleProvider);
    if (!res) {
      throw new Error("Could not complete the login with Google");
    }
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    console.log(err.message);
    // Use mapAuthError if available or fallback string
    // useLogin didn't import mapAuthError originally, but I can import it or use simple error
    // The original code used "Incorrect login credentials" for all errors in login.
    // I should probably follow that or improve it.
    // Let's try to import mapAuthError if it exists in utils/authErrors to be consistent with useSignup
    error.value = mapAuthError
      ? mapAuthError(err.code)
      : "Could not login with Google";
    isPending.value = false;
  }
};

const useLogin = () => {
  return { error, isPending, login, loginWithGoogle };
};

export default useLogin;

import { ref } from "vue";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { mapAuthError } from "../utils/authErrors";

const error = ref(null);
const isLoading = ref(false);
const googleProvider = new GoogleAuthProvider();

const signup = async (email, password, displayName) => {
  error.value = null;
  isLoading.value = true;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete the signup");
    }
    await updateProfile(res.user, { displayName });
    error.value = null;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = mapAuthError(err.code);
  } finally {
    isLoading.value = false;
  }
};

const signupWithGoogle = async () => {
  error.value = null;
  isLoading.value = true;

  try {
    const res = await signInWithPopup(auth, googleProvider);
    if (!res) {
      throw new Error("Could not complete the signup with Google");
    }
    error.value = null;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = mapAuthError(err.code);
  } finally {
    isLoading.value = false;
  }
};

const useSignup = () => {
  return { error, isLoading, signup, signupWithGoogle };
};

export default useSignup;

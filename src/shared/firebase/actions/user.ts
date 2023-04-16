import { getAuth, User } from "firebase/auth";
import { app } from "../config";

export const getCurrentUser = (): (User | null) => {
  const auth = getAuth(app);
  return auth.currentUser;
}
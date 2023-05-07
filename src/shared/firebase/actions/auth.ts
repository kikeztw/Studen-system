import { 
  signOut,
  getAuth, 
  signInAnonymously,
  UserCredential,
  updatePassword,
  signInWithEmailLink,
  sendSignInLinkToEmail, 
  isSignInWithEmailLink, 
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getCurrentUser } from "./user";
import { app } from "../config";

export const inviteUser = async (email: string): Promise<void> => {
  const auth = getAuth(app);
  try {
    await sendSignInLinkToEmail(auth, email, {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: `${window.location.origin}/signin/?email=${email}`,
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
      dynamicLinkDomain: 'studensystem.page.link'
    })
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(JSON.stringify(error));
  }
} 

export const changePassword = async (password: string): Promise<void> => {
  const user = getCurrentUser();

  if(!user){
    throw new Error('Current user no found');
  }

  try {
    await updatePassword(user, password);
    console.log('success');
  } catch (error) {
    console.log(JSON.stringify(error));
    throw new Error('error change password');
  }
}


export const signInWithEmail = async (email: string): Promise<UserCredential | undefined> => {
  const auth = getAuth(app);

  if (!isSignInWithEmailLink(auth, window.location.href)) {
    return undefined;
  }

  try {
    await signInWithEmailLink(auth, email, window.location.href);
  } catch (error) {
    console.log(JSON.stringify(error));
    throw new Error('Error');
  }

};

export const signInUser = async (email: string, password: string): Promise<void> => {
  const auth = getAuth(app);
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(JSON.stringify(error));
    throw new Error('Error signin user');
  }
};

export const signOutUser = async (): Promise<void> => {
  const auth = getAuth(app);
  await signOut(auth);
}

export const signInAnony = async (): Promise<void> => {
  const auth = getAuth(app);
  try{
    await signInAnonymously(auth);
  }catch(error){
    console.log('error anony', error);
    throw error;
  }
};
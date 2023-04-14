import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { app } from "./config";
import { actionCodeSettings } from './constants';

export const inviteCoordinador = async (email: string): Promise<void> => {
  console.log(email);
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
import { collection, addDoc } from "firebase/firestore"; 
import { updateProfile } from "firebase/auth";
import { database } from "../config";
import { getCurrentUser } from "./user";

type FormType = {
  email: string;
  uuid: string;
  firstname: string;
  lastname: string;
  ci: string;
  phone: string;
}

export const createProfile = async (params: FormType): Promise<void> => {
  try{
    // Add a new document in collection "cities"
    const user = getCurrentUser();

    if(!user){
    return
    }

    await updateProfile(user, {
      displayName: params.firstname
    });

    const response = await addDoc(collection(database, 'profile'), {
      user:{
        uuid: params.uuid,
        email: params.email,
      },
      firstname: params.firstname,
      ci: params.ci,
      lastname: params.lastname,
      phone: params.phone,
    });
    console.log(response);
  }catch (error){
    console.log(JSON.stringify(error));
  }
}
import { collection, addDoc } from "firebase/firestore"; 
import { database } from "../config";

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
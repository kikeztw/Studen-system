import { arrayUnion,  } from "firebase/firestore";
import { Operation } from "../operation";
import { COLLECTION_NAME } from "../constants";
import { StudentCollectionTye, GradesCollectionTye } from "../../types/collections";

export const Students = new Operation<StudentCollectionTye>(COLLECTION_NAME.student);

export const createStudent = async (data: StudentCollectionTye): Promise<void> => {
  const response = await Students.create(data);
};

export const addGradeToStuden = async (id: string, grades: GradesCollectionTye): Promise<void> => {
  return Students.update(id, {
    grades: arrayUnion(grades)
  });
}

export const updateStudentById = async (id: string, data: StudentCollectionTye): Promise<void> => {
  return Students.update(id, data);
}

export const getStudentByCI = async (ci: string): Promise<StudentCollectionTye | null> => {  
  let result: StudentCollectionTye | null = null;
  const reponse = await Students.getByFilter('ci', '==', ci);
  console.log('respsonse', reponse);
  reponse.forEach((doc) => {
    result = {
      id: doc.id,
      ...doc.data(),
    }
  });
  return result;
}

export const getStudentById = async (id: string): Promise<StudentCollectionTye | null> => {
  return Students.get(id);
};

export const deleteStudentById = async(id: string): Promise<void> => {
  return Students.delete(id);
}
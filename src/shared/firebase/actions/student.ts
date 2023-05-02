import { Operation } from "../operation";
import { COLLECTION_NAME } from "../constants";
import { StudentCollectionTye } from "../../types/collections";

export const Students = new Operation<StudentCollectionTye>(COLLECTION_NAME.student);

export const createStudent = async (data: StudentCollectionTye): Promise<void> => {
  const response = await Students.create(data);
  console.log('response', response);
};

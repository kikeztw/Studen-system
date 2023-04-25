import { Operation } from "../operation";
import { COLLECTION_NAME } from "../constants";
import { TeacherCollectionType } from "../../types/collections";

export const Coordinators = new Operation<TeacherCollectionType>(COLLECTION_NAME.coordinators);

export const getAllTeachers = async (): Promise<TeacherCollectionType[]> => {
  const list: TeacherCollectionType[] = [];
  const response = await Coordinators.get_list();
  response.forEach((teacher) => {
    list.push({ id: teacher.id, ...teacher.data() })
  });
  return list;
};

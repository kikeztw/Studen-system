import { Operation } from "../operation";
import { COLLECTION_NAME } from "../constants";
import { TeacherCollectionType } from "../../types/collections";

export const Teachers = new Operation<TeacherCollectionType>(COLLECTION_NAME.teachers);

export const createTeacher = async (data: TeacherCollectionType): Promise<void> => {
  const response = await Teachers.create(data);
  console.log('response', response);
};

export const getAllTeachers = async (): Promise<TeacherCollectionType[]> => {
  const list: TeacherCollectionType[] = [];
  const response = await Teachers.get_list();
  response.forEach((teacher) => {
    list.push({ id: teacher.id, ...teacher.data() })
  });
  return list;
};

export const getTeacherById = async (id: string): Promise<TeacherCollectionType | null> => {
  return Teachers.get(id);
};

export const updateTeacherById = async (id: string, data: TeacherCollectionType): Promise<void> => {
  return Teachers.update(id, data);
}

export const deleteTeacherById = async(id: string): Promise<void> => {
  return Teachers.delete(id);
}
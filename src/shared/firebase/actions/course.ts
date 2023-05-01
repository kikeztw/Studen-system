import { Operation } from "../operation";
import { COLLECTION_NAME } from "../constants";
import { CourseCollectionType } from "../../types/collections";

export const Courses = new Operation<CourseCollectionType>(COLLECTION_NAME.course);

export const createCourse = async (data: CourseCollectionType): Promise<void> => {
  const response = await Courses.create(data);
  console.log('response', response);
};

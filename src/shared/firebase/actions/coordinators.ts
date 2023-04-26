import { Operation } from "../operation";
import { COLLECTION_NAME } from "../constants";
import { CoordinatorCollectionType } from "../../types/collections";

export const Coordinators = new Operation<CoordinatorCollectionType>(COLLECTION_NAME.coordinators);

export const getAllCoordinators = async (): Promise<CoordinatorCollectionType[]> => {
  const list: CoordinatorCollectionType[] = [];
  const response = await Coordinators.get_list();
  response.forEach((teacher) => {
    list.push({ id: teacher.id, ...teacher.data() })
  });
  return list;
};

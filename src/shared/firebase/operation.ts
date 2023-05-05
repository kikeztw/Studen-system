import { 
  WhereFilterOp,
  FieldPath,
  where,
  doc,
  UpdateData,
  getDoc,
  updateDoc,
  Unsubscribe,
  onSnapshot,
  query,
  collection, 
  addDoc, 
  CollectionReference, 
  DocumentData, 
  DocumentReference,
  getDocs,
  QuerySnapshot,
  deleteDoc,
} from "firebase/firestore"; 
import { database } from "./config";

export class Operation<T extends DocumentData>{

  name: string;
  collection: CollectionReference<T>;
  unsubscribe: Unsubscribe | null = null;

  constructor(name: string){
    this.name = name;
    this.collection = collection(database, name) as  CollectionReference<T>;
  }

  async delete(id: string): Promise<void> {
    const docRef = doc(database, this.name, id) as DocumentReference<T>;
    try{
      return deleteDoc(docRef);
    }catch(error){
      const meessage = `Operation error in delete ${this.name}`;
      console.log(meessage, JSON.stringify(error, null, 2));
      throw new Error(meessage);
    }
  }

  async update(id: string, data: UpdateData<T>): Promise<void>{
    const docRef = doc(database, this.name, id) as DocumentReference<T>;
    try{
      return updateDoc<T>(docRef, data);
    }catch(error){
      const meessage = `Operation error in update ${this.name}`;
      console.log(meessage, JSON.stringify(error, null, 2));
      throw new Error(meessage);
    }
  }

  async create(data: T): Promise<DocumentReference<T>>{
    try{
      return addDoc<T>(this.collection, data);
    }catch(error){
      const meessage = `Operation error in create ${this.name}`;
      console.log(meessage, JSON.stringify(error, null, 2));
      throw new Error(meessage);
    }
  }

  async get_list(): Promise<QuerySnapshot<T>>{
    return getDocs(this.collection);
  }

  async get(id: string): Promise<T | null> {
    const docRef = doc(database, this.name, id) as DocumentReference<T>;
    const docSnap = await getDoc<T>(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  }

  async getByFilter(fieldPath: string | FieldPath, opStr: WhereFilterOp, value: unknown): Promise<QuerySnapshot<T>> {
    const _query = query<T>(this.collection, where(fieldPath, opStr, value));
    return getDocs<T>(_query);
  }

  subscription(cb: (value: QuerySnapshot<T>) => void, filter?: { fieldPath: string | FieldPath, opStr: WhereFilterOp, value: unknown  }): void {
    this.unsubscribe?.();
    let _query = filter ? query(this.collection, where(filter.fieldPath, filter.opStr, filter.value)) : query(this.collection);
    this.unsubscribe = onSnapshot(_query, cb);
  }

  remove_subscription(): void{
    this.unsubscribe?.();
  }
}
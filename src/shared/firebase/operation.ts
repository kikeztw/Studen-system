import { 
  doc,
  getDoc,
  Unsubscribe,
  onSnapshot,
  query,
  collection, 
  addDoc, 
  CollectionReference, 
  DocumentData, 
  DocumentReference,
  getDocs,
  QuerySnapshot
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

  subscription(cb: (value: QuerySnapshot<T>) => void): void {
    this.unsubscribe?.();
    const _query = query(this.collection);
    this.unsubscribe = onSnapshot(_query, cb);
  }

  remove_subscription(): void{
    this.unsubscribe?.();
  }
}
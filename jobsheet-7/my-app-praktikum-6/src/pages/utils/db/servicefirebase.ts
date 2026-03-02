import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveProduct(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  console.log(snapshot.docs);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

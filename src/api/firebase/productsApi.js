import { db } from '../firebase/config';
import { 
    collection, 
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc 
} from 'firebase/firestore';
const recetasCollection = collection(db, 'recetas');

export const getRecipes = async () => {
    const snapshot = await getDocs(recetasCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getRecipeById = async (id) => {
    const docRef = doc(recetasCollection, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const createRecipe = async (recipe) => {
    const docRef = await addDoc(recetasCollection, recipe);
    return { id: docRef.id, ...recipe };
};

export const updateRecipe = async (id, recipe) => {
    const docRef = doc(recetasCollection, id);
    await updateDoc(docRef, recipe);
    return { id, ...recipe };
};

export const deleteRecipe = async (id) => {
    const docRef = doc(recetasCollection, id);
    await deleteDoc(docRef);
};
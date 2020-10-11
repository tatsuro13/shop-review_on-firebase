import * as firebase from 'firebase';
import 'firebase/firestore';
import { Shop } from '../types/shops';
import Constants from 'expo-constants';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

export const getShops = async () => {
  const snapshot = await firebase
    .firestore()
    .collection('shops')
    // .where('place', '==', '品川')
    .orderBy('score', 'desc')
    .get();
  const shops = snapshot.docs.map((doc) => doc.data() as Shop);
  return shops;
};

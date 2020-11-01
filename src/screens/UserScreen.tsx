import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import firebase from "firebase";

/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";
import { UserConText } from '../contexts/userContexts';
import { updateUser } from '../lib/firebase';

import Form from '../components/Form';
import Loading from '../components/Loading';
import Button from '../components/Button';


type Props = {
  navigation: StackNavigationProp<RootStackParamList, "User">;
  route: RouteProp<RootStackParamList, "User">;
};

export const UserScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { user, setUser } = useContext(UserConText);
  const [name, setName] = useState<string>(user.name);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    setLoading(true);
    const updatedAt = firebase.firestore.Timestamp.now();
    await updateUser(user.id, { name, updatedAt });
    setUser({ ...user, name, updatedAt });
    setLoading(false);
  };


  return (
    <SafeAreaView style={styles.container}>
      <Form value={name} onChangeText={(text) => setName(text)} label="名前" />
      <Button onPress={onSubmit} text="保存する" />
      <Loading visible={loading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
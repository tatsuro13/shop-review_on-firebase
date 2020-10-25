import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet, Text } from 'react-native'
import { UserConText } from '../contexts/userContexts'
import { signin } from '../lib/firebase'

const AuthScreen:React.FC = () => {

  const {setUser} = useContext(UserConText);
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await signin();
      setUser(user);
    };
    fetchUser();
  },[]);

    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size="large" />
            <Text>ログイン中...</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      marginTop: 16,
      fontSize: 12,
      color: "#888",
    },
});

export default AuthScreen

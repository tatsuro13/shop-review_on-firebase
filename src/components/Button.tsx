import React from 'react'
import { GestureResponderEvent, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
    onPress: (event: GestureResponderEvent) => void;
    text: string;
}

const Button:React.FC<Props> = ({onPress, text}: Props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000",
      height: 40,
      margin: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 18,
      color: "#fff",
    },
  });

export default Button

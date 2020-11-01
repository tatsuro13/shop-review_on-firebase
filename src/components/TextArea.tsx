import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

type Props = {
    onChangeText: (text: string) => void;
    value: string;
    label: string;
    height?: number;
    placeHolder?: string; 
}

const TextArea: React.FC<Props> = ({value, onChangeText, label, height, placeHolder}: Props) => {
    return (
        <View style={[styles.container, !!height && {height}]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            multiline={true}
            placeholder={placeHolder}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    input: {
      height: 120,
      borderColor: "#999",
      borderBottomWidth: 1,
      marginTop: 8,
    },
    label: {
      fontWeight: "bold",
      color: "#999",
    },
  });

export default TextArea

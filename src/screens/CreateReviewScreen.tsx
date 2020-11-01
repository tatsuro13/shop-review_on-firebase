import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import {SafeAreaView, StyleSheet } from 'react-native'
import { RootStackParamList } from '../types/navigation'
import { IconButton } from '../components/IconButton'
import Button from '../components/Button'
import TextArea from '../components/TextArea'
import StarInput from '../components/StarInput'
import { Value } from 'react-native-reanimated'
import { addReview } from '../lib/firebase'
import { UserConText } from '../contexts/userContexts'
import firebase from "firebase";
import { Review } from '../types/review'

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'CreateReview'>
    route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen:React.FC<Props> = ({navigation, route}: Props) => {
    const {shop} = route.params;
    const [text, setText] = useState<string>('');
    const [score, setScore] = useState<number>(3);
    const {user} = useContext(UserConText)

    useEffect(() => {
        navigation.setOptions({
            title: shop.name,
            headerLeft: () => (
                <IconButton name='x' onPress={() => navigation.goBack()} />
                )
        })
    },[])

    const onSubmit = async () => {
        const review = {
            user: {
                name: user.name,
                id: user.id,
              },
              shop: {
                name: shop.name,
                id: shop.id,
              },
              text,
              score,
              updatedAt: firebase.firestore.Timestamp.now(),
              createdAt: firebase.firestore.Timestamp.now(),
        } as Review
        await addReview(shop.id, review)
    };

    return (
        <SafeAreaView style={styles.container}>
            <StarInput score={score} onChangeScore={(value) => setScore(value)} />
            <TextArea value={text} onChangeText={(value) => setText(value)} label='レビュー' placeHolder='レビューを書いてください' />
            <Button text="レビューを投稿する" onPress={onSubmit} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    photoContainer: {
      margin: 8,
    },
    image: {
      width: 100,
      height: 100,
      margin: 8,
    },
});
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { ListViewBase, SafeAreaView, StyleSheet, Text } from 'react-native'
import { RootStackParamList } from '../types/navigation'
import { IconButton } from '../components/IconButton'
import TextArea from '../components/TextArea'
import StarInput from '../components/StarInput'
import { Value } from 'react-native-reanimated'

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'CreateReview'>
    route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen:React.FC<Props> = ({navigation, route}: Props) => {
    const {shop} = route.params;
    const [text, setText] = useState<string>('');
    const [score, setScore] = useState<number>(3);

    useEffect(() => {
        navigation.setOptions({
            title: shop.name,
            headerLeft: () => (
                <IconButton name='x' onPress={() => navigation.goBack()} />
                )
        })
    },[])

    return (
        <SafeAreaView>
            <StarInput score={score} onChangeScore={(value) => setScore(value)} />
            <TextArea value={text} onChangeText={(value) => setText(value)} label='レビュー' plaveHolder='レビューを書いてください' />
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
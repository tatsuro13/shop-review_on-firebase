import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { RootStackParamList } from '../types/navigation'
import { IconButton } from '../components/IconButton'

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'CreateReview'>
    route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen:React.FC<Props> = ({navigation, route}: Props) => {
    const {shop} = route.params;

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
            <Text>Create Review Screen</Text>
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
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { FloatingActionButton } from '../components/FloatingActionButton';
import { ReviewItem } from '../components/ReviewItem';
import { ShopDetail } from '../components/ShopDetail';
import { ReviewsContext } from '../contexts/reviewsContext';
import { getReviews } from '../lib/firebase';
import { RootStackParamList } from '../types/navigation';
import { Review } from '../types/review';

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Shop'>,
    route: RouteProp<RootStackParamList, 'Shop'>
}

export const ShopScreen:React.FC<Props> = ({navigation, route}: Props) => {
    const { shop } = route.params;
    //const [reviews, setReviews] = useState<Review[]>([])
    const {reviews, setReviews} = useContext(ReviewsContext);

    useEffect(() => {
        navigation.setOptions({title: ShopDetail.name});

        const fetchReview = async () =>{
            const reviews = await getReviews(shop.id);
            setReviews(reviews);
        }
        fetchReview();
    }, [shop])

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
            ListHeaderComponent={<ShopDetail shop={shop} />}
            data={reviews}
            renderItem={({item}) => <ReviewItem review={item} />}
            keyExtractor={(item) => item.id}
             />
            <FloatingActionButton iconName='plus' onPress={() => navigation.navigate("CreateReview", { shop })} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start"
    }
})
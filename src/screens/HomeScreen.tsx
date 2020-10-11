import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ShopReviewItem from '../components/ShopReviewItem';
import { getShops } from '../lib/firebase';
import { RootStackParamList } from '../types/navigation';
import { Shop } from '../types/shops';

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>
}

export const HomeScreen = ({navigation}:Props) =>  {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShops(shops);
  };

  const onPressShop = (shop: Shop) => {
      navigation.navigate("Shop", {shop})
  }

  // const shopItems = shops.map((shop, index) => (
  //   <ShopReviewItem shop={shop} key={index.toString()} />
  // ));

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} onPress={() => onPressShop(item)} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

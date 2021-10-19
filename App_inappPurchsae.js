import React, {useState, useEffect} from 'react';
import { Button } from 'react-native';
// import all the components we are going to use
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import IAP from 'react-native-iap';
import { useFocusEffect } from '@react-navigation/native';

const productIds = ['com.nokelstv1001','com.nokelstv1003'];
const App = () => {
  const [user, setUser] = useState({
    name: "Pravesh",
    subscriotion: undefined,
  });
  const [products, setProducts] = useState([]);


  
  useEffect(() => {
    IAP.getProducts(productIds).then((res) => {
      // alert(JSON.stringify(res))
      setProducts(res)
    });

    const purchaseUpdateSubscription = IAP.purchaseUpdatedListener(
      (purchase) => {
      console.log('purchase: ', purchase);
        const receipt = purchase.transactionReceipt;
        if(receipt){
        console.log('receipt: ', receipt);
          
          alert("1"+JSON.stringify(receipt))
        }
       });

       return () => {
         purchaseUpdateSubscription.remove();
       }
  }, [])
  return (
    
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
    {/* <Text>Hello Pravesh </Text> */}
      {
        products.map((product) => {
          return(<View key={1}>
            <Text>{product.productId}</Text>
            <Button 
            title="Subscribe Now"
            onPress={() => IAP.requestSubscription(product.productId)}
            />
          </View>
          )
        })

        
      }
    </View>
    
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
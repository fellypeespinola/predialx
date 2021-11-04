import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Image, AsyncStorage, Text } from 'react-native';
import OrderList from '../components/OrderList';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {

      const user_id = 1;
  
      const socket = socketio('http://192.168.0.2:3000', {
        query: { user_id }
      })
    
  }, []);

  return (
    <SafeAreaView style={styles.container}>
         <OrderList />     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: 'center',
    marginTop: 10
  },
});
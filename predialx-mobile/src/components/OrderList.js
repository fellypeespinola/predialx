import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { listOrder } from '../hooks/useOrder';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    await listOrder({}).then(response =>{
      console.log(response.data)
      setOrders(response.data);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orderm de <Text style={styles.bold}>Serviço</Text></Text>

      <FlatList
        style={styles.list}
        data={orders}
        keyExtractor={orders => orders.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.client}>Cliente: {item.creator.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },

  title: {
    fontSize: 20,
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  bold: {
    fontWeight: 'bold'
  },

  list: {
    paddingHorizontal: 20
  },

  listItem: {
    backgroundColor: '#e8e8e8',
    marginTop: 15,
    padding: 15
  },

  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },

  client: {
    fontSize: 15,
    color: '#999',
    marginTop: 5
  },

  button: {
    height: 32,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 15,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default withNavigation(OrderList);
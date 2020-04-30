import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  //generate random ids
  const getRand = () => {
    return (
      new Date().getTime().toString() + Math.floor(Math.random() * 1000000)
    );
  };

  //global state object
  const [items, setItems] = useState([
    {id: getRand(), text: 'Milk'},
    {id: getRand(), text: 'Eggs'},
    {id: getRand(), text: 'Bread'},
    {id: getRand(), text: 'Juice'},
  ]);
  //delete item function
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  //add item function

  const addItem = (text) => {
    if (text === '') {
      Alert.alert('Error', 'Please enter an item');
    } else {
      setItems((prevItems) => {
        return [{id: getRand(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

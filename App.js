import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {v4 as uuid} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Egg'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    } else {
      setItems(previousItems => [{id: uuid(), text}, ...previousItems]);
    }
  };

  const deleteItem = id => {
    setItems(previousItems => {
      return previousItems.filter(eachItem => eachItem.id !== id);
    });
  };

  return (
    <View style={style.container}>
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'dodgerblue',
  },
});

export default App;

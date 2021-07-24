import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [itemText, setItemText] = useState('');
  const handleSetItemText = textValue => setItemText(textValue);

  return (
    <View>
      <TextInput
        style={style.input}
        placeholder="Add item"
        onChangeText={handleSetItemText}
      />
      <TouchableOpacity style={style.btn} onPress={() => addItem(itemText)}>
        <Text style={style.btnText}>
          <Icon name="plus" size={20} />
          Add item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;

import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

const Header = ({title}) => {
  // const [counter, setCounter] = useState(0);
  // const handleCounterIncrement = () => {
  //   setCounter(counter + 1);
  // };
  // const handleCounterDecrement = () => {
  //   setCounter(counter - 1);
  // };

  return (
    <View style={style.header}>
      <Text style={style.text}>{title}</Text>
      {/* <Image
        style={style.img}
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
      />
      <Text style={style.text}>{`Counter : ${counter}`}</Text>
      <Button style={style.btn} onPress={handleCounterIncrement} title="Add" />
      <Button
        style={style.btn}
        onPress={handleCounterDecrement}
        title="Substract"
      /> */}
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    height: 60,
    padding: 10,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 100 / 2,
  //   padding: 10,
  //   marginTop: 20,
  //   marginBottom: 20,
  // },
  // btn: {
  //   padding: 10,
  //   marginTop: 20,
  //   marginBottom: 20,
  // },
});

Header.defaultProps = {
  title: 'Shopping List',
};

export default Header;

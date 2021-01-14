import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Context } from '../context/TodoContext';
import { Feather } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';


const IndexScreen = ({ navigation }) => {
  return (
    <>
      <Text h1>Hello World</Text>
    </>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Icon
            name="pencil-outline"
            type="ionicon"
            size={30}
            style={styles.icon}
          />
          
        </TouchableOpacity>
      ),
    };
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10
  }
})


export default IndexScreen;

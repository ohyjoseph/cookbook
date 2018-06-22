import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

class Ingredients extends React.Component {
  static navigationOptions = {
    tabBarColor: 'green',
    tabBarIcon: () => {

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name='ios-basket' size={25} color='white' />;
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Here are your Ingredients</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Ingredients;
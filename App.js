import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Vibration, } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={() => true}
        onResponderStart={() => {Vibration.vibrate(500)}}
      >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Vibration, } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={() => true}
        onResponderStart={() => {Vibration.vibrate(99999)}}
        onResponderRelease={() => {Vibration.cancel()}}
      >
        <Text
          style={styles.instructiontext}
        >
          Tap and hold anywhere to test vibration motor
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d070',
    alignItems: 'center',
    justifyContent: 'center',
  },

  instructiontext: {
    fontSize: 40,
    color: '#fff',
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',
  },
});

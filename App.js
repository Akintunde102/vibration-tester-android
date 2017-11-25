import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Vibration, } from 'react-native';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}
        onStartShouldSetResponder={() => true}
        onResponderStart={() => {Vibration.vibrate(99999)}}
        onResponderRelease={() => {Vibration.cancel()}}
      >

        <Text style={styles.instructionText}>
          Tap and hold anywhere to test vibration motor
        </Text>

        <Text style={styles.infoButton}
          onStartShouldSetResponder={() => true}
          onResponderStart={() => {Alert.alert(
              'Made by Jack Paine, 2017',
              'This app is open-source and available on GitHub: https://github.com/kapito/vibration-tester-android'
          )}}
        >
          info
        </Text>

        <Text style={styles.motto}>
          info
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

  instructionText: {
    position: 'relative',
    fontSize: 36,
    color: '#fff',
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',
  },

  infoButton: {
    position: 'absolute',
    fontSize: 24,
    color: '#fff',
    top: 25,
    right: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

});

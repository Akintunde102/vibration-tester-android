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
          Source available on GitHub
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
    fontSize: 38,
    color: '#fff',
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',
  },

  infoButton: {
    position: 'absolute',
    fontSize: 24,
    color: '#fff',
    top: 23,
    right: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  motto: {
    position: 'absolute',
    fontSize: 18,
    color: '#fff',
    bottom: 5,
    left: 0,
    right: 0,
    textAlign: 'center',
  },

});

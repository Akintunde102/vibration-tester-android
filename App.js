import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Vibration, WebView, Linking, } from 'react-native';
import { Constants } from 'expo';

import GitHub_corner from './assets/GitHub_corner.html';

export default class App extends React.Component {
  render() {
    return (


      <View style={styles.container}>

        <View style={styles.statusBar}></View>

        <View style={styles.area}
          onStartShouldSetResponder={() => true}
          onResponderStart={() => {Vibration.vibrate(99999)}}
          onResponderRelease={() => {Vibration.cancel()}}
        >

          <Text style={styles.instructionText}>
            Tap and hold anywhere to test vibration motor
          </Text>

          <View style={styles.infoButton}>
            <Button title='info'
              color='#000'
              onPress={() => {Alert.alert(
                'Made by Jack Paine, 2017',
                'A simple Android app for testing the vibration motors on mobile phones.\n\nThis app is open-source! Click the GitHub icon in the right corner to view the source and contribute.'
              )}}
            />
          </View>

          <View style={styles.corner}
            onStartShouldSetResponder={() => true}
            onResponderStart={() => {
              Alert.alert(
                'View source on GitHub?',
                'This will open the GitHub repository in your default web browser. Continue?',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => {Linking.openURL('https://github.com/kapito/vibration-tester-android');}},
                ],
              )}}
          >
            <WebView style={styles.corner}
              source={GitHub_corner}
            />
          </View>

        </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#00d070',
  },

  statusBar: {
    position: 'absolute',
    backgroundColor: '#000',
    top: 0,
    height: Constants.statusBarHeight,
    left: 0,
    right: 0,
  },

  area: {
    position: 'absolute',
    top: Constants.statusBarHeight,
    left: 0,
    right: 0,
    bottom: 0,
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
    top: 15,
    left: 15,
  },

  corner: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 100,
    backgroundColor: '#00d070',
  },


});

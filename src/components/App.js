import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import Sound from 'react-native-sound';

class App extends Component {
  playSound() {
    const mySound = new Sound('frog.wav', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        console.log('duration', mySound.getDuration());
        mySound.play();
      }
    });
  }

  render() {
    return (
      <View style={{ marginTop: 50 }} >
        <TouchableWithoutFeedback onPress={this.playSound.bind(this)}>
          <Text>Play Sound!</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
export default App;

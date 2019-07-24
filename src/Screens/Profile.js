import React from 'react';
import { Button, View, Text } from "react-native";

class Profile extends React.Component {
  static navigationOptions = {
    title: 'DAMN',
  };
  render() {
    fetch('https://www.google.pt');
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to ReactScreensExample"
          onPress={() => this.props.navigation.navigate('ReactScreens')}
        />
      </View>
    );
  }
}

export default Profile;
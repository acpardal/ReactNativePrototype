import React from 'react';
import { Button, View, Text } from "react-native";

class Profile extends React.Component {
  static navigationOptions = {
    title: 'DAMN',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default Profile;
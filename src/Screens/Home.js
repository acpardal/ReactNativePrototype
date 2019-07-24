import React from 'react';
import { Button, View, Text } from 'react-native';
import Webview from '../Components/Webview';


class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  state = { count: 0 };

  render() {
    const { count } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen, counter {count}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Increment"
          onPress={() => this.setState({ count: this.state.count + 1})}
        />
        <Webview />
      </View>
    );
  }
}

export default Home;
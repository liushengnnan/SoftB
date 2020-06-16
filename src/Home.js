import React, {Component} from 'react';
import {Button, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Login from './Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisibility: true,
    };
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Screen3')}>
          <View style={styles.headView}>
            <Ionicons name={'ios-person'} size={44} color={'333333'} />
            <Text>Home</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.blueContainer}>
          <Text>Blue</Text>
        </View>
        <View style={styles.yellowContainer}>
          <Text>Yellow</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
        <Login
          modalVisibility={this.state.modalVisibility}
          loginSuccess={() => {
            this.setState({
              modalVisibility: false,
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'stretch',
  },
  headView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    margin: 10,
  },
  blueContainer: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'blue',
    flex: 1,
  },
  yellowContainer: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'orange',
    flex: 1,
  },
});

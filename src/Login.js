import React, {Component} from 'react';
import {
  Alert,
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      passward: '',
    };
  }

  onChangeAccountText = text => {
    this.setState({
      account: text,
    });
  };

  onChangePasswordText = text => {
    this.setState({
      passward: text,
    });
  };

  lgoinTap = () => {
    const {account, passward} = this.state;
    const {loginSuccess} = this.props;
    if (account.length > 0 && passward === '123') {
      loginSuccess();
    }
  };

  render() {
    const {account, passward} = this.state;
    const {modalVisibility} = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <TextInput
              placeholder={'Login ID'}
              style={styles.accountView}
              onChangeText={text => this.onChangeAccountText(text)}
              value={account}
            />
            <TextInput
              placeholder={'Password'}
              style={styles.accountView}
              onChangeText={text => this.onChangePasswordText(text)}
              value={passward}
            />
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                // this.lgoinTap();
              }}>
              <Text style={styles.textStyle}>Forget password</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button2}
              onPress={() => {
                this.lgoinTap();
              }}>
              <Text style={styles.textStyle}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  accountView: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    margin: 5,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    margin: 10,
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    margin: 10,
    height: 44,
  },
});

import React,{Component} from 'react';
import {
  StyleSheet,
  //Button,
  View,
  //SafeAreaView,
  Text,
  TextInput
  //TouchableOpacity
} from 'react-native';

function func2(){
  console.log(this)
}
func2()
export default class App extends Component {
  constructor(){
    super()
    // this.state = {
    //   username:"",
    //   password:""
    // }
    this.handleUsernameChanges=this.handleUsernameChanges.bind(this)
    this.handlePasswordChanges = this.handlePasswordChanges.bind(this)
  }
  handleUsernameChanges(newText){
    console.log('username='+newText)
  }
  handlePasswordChanges(newText) {
    console.log('password=' + newText)
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput 
//            defaultValue={this.state.username}
            onChangeText={this.handleUsernameChanges}>
        </TextInput>

        <Text>Password</Text>
        <TextInput
//          defaultValue={this.state.password}
          onChangeText={this.handlePasswordChanges}>
        </TextInput>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    padding:20
  },
});

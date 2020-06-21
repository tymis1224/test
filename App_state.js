import React,{Component} from 'react';
import {
  StyleSheet,
  //Button,
  View,
  //SafeAreaView,
  Text,
  TextInput,
  Button
  //TouchableOpacity
} from 'react-native';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      username:"",
      password:""
    }
    this.abc={
      username2:"alan",
      password2:"1234"
    }
    this.buttonPressed=this.buttonPressed.bind(this)
  }
  buttonPressed(){
    //console.log(this._username,this._password)
    //const username=this._username._lastNativeText;
    //const password=this._password._lastNativeText;
//    console.log(username,password)
//    console.log(this.state.username,this.state.password);
    console.log(this.abc.username2,this.abc.password2)
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput 
          defaultValue={this.abc.username2}
          onChangeText={text => this.abc.username2=text}
          //ref={input => this._username = input} 
        />

        <Text>Password</Text>
        <TextInput 
//          ref={input => this._password = input} 
            defaultValue={this.abc.password2}
            onChangeText={text => this.setState({password2:text})}
          />
        <Button title={"Hello"} onPress={this.buttonPressed}></Button>
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

import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class App extends Component {
  constructor(){
    super()
    this.state = {}
    this.state.customStyles={
      color:'red'
    }
    // setInterval(() => {
    //   if(this.state.customStyles.color=='red'){
    //     this.setState({
    //       customStyles: {
    //         color: 'blue'
    //       }
    //     })      
    //   }else{
    //     this.setState({
    //       customStyles: {
    //         color: 'red'
    //       }
    //     })      

    //   }
    // },1000);

    }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.half1}>
          <Text style={styles.text}>This is 1</Text>
        </View>
        <View style={styles.half2}>
          <View style={[styles.half21,styles.half2x]}>
            <Text style={styles.text}>This is 2/1</Text>
          </View>
          <View style={[styles.half22,styles.half2x]}>
            <Text style={styles.text}>This is 2/2</Text>
          </View>
        </View>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  welcome:{
    //backgroundColor:'blue',
    //color:'white',
    width:100,
    alignItems:'center',
    //opacity:0
  },
  half1:{
    flex:1,
    backgroundColor:'red'
  },
  half2:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'blue'
  },
  half2x:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  half21:{
    backgroundColor:'green'
  },
  half22:{
    backgroundColor:'black'
  },
  text:{
    color:'white',
    fontSize:20
  }
});

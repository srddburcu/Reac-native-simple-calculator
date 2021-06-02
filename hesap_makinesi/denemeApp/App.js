import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button,SafeAreaView} from 'react-native';

export default class App extends Component {
 constructor(props){
   super(props);
   this.state={
     input1:'',
     input2:'',
     result:''
   }
   this.sum=this.sum.bind(this);
   this.deduct=this.deduct.bind(this);
   this.mult=this.mult.bind(this);
   this.div=this.div.bind(this);
 }
sum(){
  const number1=parseInt(this.state.input1);
  const number2=parseInt(this.state.input2);
  const result=number1+number2;
  this.setState({
    result:result
  })
}
deduct(){
  const number1=parseInt(this.state.input1);
  const number2=parseInt(this.state.input2);
  const result=number1-number2;
  this.setState({
    result:result
  })
}
div(){
  const number1=parseInt(this.state.input1);
  const number2=parseInt(this.state.input2);
  const result=number1/number2;
  this.setState({
    result:result
  })
}
mult(){
  const number1=parseInt(this.state.input1);
  const number2=parseInt(this.state.input2);
  const result=number1*number2;
  this.setState({
    result:result
  })
}
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
        <Text style={styles.headertext}>Welcome Calculator</Text>
        </View>
        <View style={styles.content}>
      <TextInput style={styles.input}
      placeholder='First Number'
        onChangeText={(text)=>{
            this.setState({
              input1:text
            });
        }}
        value={this.state.input1}
      />
      <View style ={styles.buttonwrapper}>
             <View style={styles.sum}>
            <Button onPress={this.sum} 
              color="#841584"
              title="+"
            />
            </View>
            <View style={styles.deduct}>
             <Button onPress={this.deduct} 
              color="#841584"
              title="-"
            /></View>
             <View style={styles.mult}>
             <Button onPress={this.mult} 
              color="#841584"
              title="*"
            /></View>
            <View  style={styles.div}>
             <Button onPress={this.div}
              color="#841584"
              title="/"
            /></View>
      </View>
      <TextInput style={styles.input}
      placeholder='Second Number'
        onChangeText={(text)=>{
            this.setState({
              input2:text
            });
        }}
        value={this.state.input2}
      />
       <Text style={styles.sample}>Result: {this.state.result}</Text>
       
          </View>

        </View>
      );
    }
  }
const styles=StyleSheet.create({
header:{
  height:80,
  marginTop:70,
  shadowColor:'#0000',
  shadowOffset:{width:0, height:2},
  shadowOpacity:0.4,
  justifyContent:'center',
  backgroundColor: '#F2F8F9',

},
headertext:{
  fontSize:20,
  textAlign:'center'
},
content:{
padding:20,
flexDirection:'column',
justifyContent:'center',
marginTop:50,


},
input:{

}, buttonwrapper:{
  margin:10,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'
  
},
input:{
  height:40
},
 
sample:{
  height:30,
  fontSize:14
},

container:{
  flex:1,
  flexDirection:'column'
},
sum:{
  margin:10,
  width:50
},
div:{
  margin:10,
  width:50
},
deduct:{
  margin:10,
  width:50
},
mult:{
  margin:10,
  width:50
}

})
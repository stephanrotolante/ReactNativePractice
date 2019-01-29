import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends Component {
   
    state = {
        placeName: ''
      }
    
      placeNameOnChangeHandler = val => {
        this.setState({
          placeName:val
        });
      }



      placeSubmitHandler = () => {
        if(this.state.placeName.trim() === '') {
          return;
        }
    
        this.props.onPlaceAdded(this.state.placeName);
      }
   
   
    render (props) {
        return(
            <View style={styles.inputContainer}>
                <TextInput 
              style={styles.placeInput}
              placeholder="An awesome place"
              value={this.state.placeName}
              onChangeText={this.placeNameOnChangeHandler}
              />
              <Button 
              style={styles.placeButton}
              onPress={this.placeSubmitHandler} title="Add"/>
          </View>
        );
    }
}


const styles = StyleSheet.create({
        inputContainer: {
            // flex:1,
            width:'100%',
             flexDirection:'row',
             justifyContent:'space-between',
             alignItems:'center'
           },
           placeButton:{
             width:'30%'
           },
           placeInput: {
             width:'70%'
           }
});


export default PlaceInput;
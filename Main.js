import { StyleSheet, View } from 'react-native';
import PlaceInput from './src/Components/PlaceInput/PlaceInput';
import PlaceList from './src/Components/PlaceList/PlaceList';
//import placeImage from './src/assets/paul-rabil-usa.jpg';
import PlaceDetail from './src/Components/PlaceDetail/PlaceDetail'
import React from 'react';
import { connect } from 'react-redux';
import {addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index'




class Main extends React.Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  }

  placeSelectedHandler = key => {
   this.props.onSelectPlace(key);
  }


  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }


  render() {

    return (
          <View style={styles.container}>
              <PlaceDetail 
              selectedPlace={this.props.selectedPlace}
              onItemDeleted={this.placeDeletedHandler}
              onModalClosed={this.modalClosedHandler}/>
              <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
              <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
          </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:40,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});


const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);
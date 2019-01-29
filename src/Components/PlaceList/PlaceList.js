import React from 'react';
import {FlatList, StyleSheet} from 'react-native';


import ListItem from '../ListItem/ListItem';


const PlaceList = (props) => {
    
    const placesOutput = props.places.map((place,i) => (
               <ListItem 
               key={i} 
               placeName={place} 
               onItemPressed={() => props.onItemDeleted(i)}/>
   ));
    
    return( <FlatList
         style={styles.listContainer}
         data={props.places}
         renderItem={(info) => (
            <ListItem 
            placeName={info.item.name}
            placeImag={info.item.image}
            onItemPressed={() => props.onItemSelected(info.item.key)}/>
         )}
        />
    );
}


const styles = StyleSheet.create({
    listContainer: {
        width:'100%'
      }
});

export default PlaceList;
import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {withNavigation} from 'react-navigation';


const ViewPhoto=({navigation})=>{
    photo=navigation.getParam('Photo');
    
    console.log(photo)
    return (<View>
        <Image source={{uri:photo}}/>
    </View>)
};
const styles=StyleSheet.create({
    image:{
        height:400,
        width:350
    }
});

export default withNavigation(ViewPhoto);
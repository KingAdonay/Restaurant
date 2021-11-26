import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const resultDetail=({result})=>{
    return (<View style={styles.container}>
        <Image source={{uri:result.image_url}} style={styles.image}/>
        <Text style={styles.name}> {result.name}</Text>
    <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>);
};

const styles=StyleSheet.create({
    image:{
        height:150,
        width:225,
        borderRadius:4
    },
    name:{
        fontWeight:"bold",
        fontSize:16
    },
    container:{
        marginLeft:15
    }
});

export default resultDetail;
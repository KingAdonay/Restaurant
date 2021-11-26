import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import Yelp from '../api/yelp';

const ResultShow=({navigation})=>{
    const id=navigation.getParam('id');
    const [results, setResults]=useState(null);
    

    const getResults= async(id)=>{
        const response= await Yelp.get(`${id}`);
        setResults(response.data);
    };
    useEffect(()=>{
        getResults(id);
    },[])

    if(!results){
        return results;
    }

    return (<View style={styles.container}>
    <Text style={styles.title}>{results.name}</Text>
    <FlatList
        data={results.photos}
        keyExtractor={photo=>photo}
        renderItem={({item})=>{
            return (<View>
                {/* <TouchableOpacity onPress={()=>navigation.navigate('ShowPic', {photo: `item`})}>  */}
                    <Image style={styles.image} source={{uri:item}}/> 
                {/* </TouchableOpacity> */}
                </View>)
        }}
    />
    </View>
    );
};

const styles=StyleSheet.create({
    image:{
        height:200,
        width:200,
        borderRadius:4,
        marginLeft:15,
        marginTop:10
    },
    container:{
        flex:1,
        backgroundColor:'white'
    },
    title:{
        marginLeft:15,
        fontSize:14,
        fontWeight: 'bold'
    }
});

export default ResultShow;
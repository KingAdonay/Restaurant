import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from '../components/resultDetail';
import {withNavigation} from 'react-navigation';

const RenderList=({title,results, navigation})=>{
    if(!results.length){
        return null;
    }
    return (<View style={styles.container}>
        <Text style={styles.title} >{title}</Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result=>result.id}
        renderItem={
            ({item})=>{
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate('Results',{id: item.id})}>
                        <ResultDetail result={item}/>
                    </TouchableOpacity>
                )
            }
        }
        />
    </View>)
};

const styles=StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:15,
        marginBottom:5
    },
    container:{
        marginBottom:5
    }
});

export default withNavigation(RenderList);
import React,{useState} from 'react';
import {Text,View,StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import RenderList from '../components/renderList';

const searchScreen=()=>{
    const [term,onTermChange]=useState('');
    const [searchApi,results,errMessage]=useResult();

    const filterByPrice=(price)=>{
        return results.filter(result=>{
            return result.price===price;})
    };

    return (
    <View style={styles.background}>
        <SearchBar 
            term={term} 
            onTermChange={onTermChange}
            onTermSubmit={()=>searchApi(term)}
            />
        {errMessage?<Text>{errMessage}</Text>:null}
   
    <ScrollView>
        <RenderList results={filterByPrice('$')} title='Cost Effective'/>
        <RenderList results={filterByPrice('$$')} title='A Bit Pricier'/>
        <RenderList results={filterByPrice('$$$')} title='Big Spender'/>
    </ScrollView>
    </View>
    );
};

const styles=StyleSheet.create({
    background:{
        backgroundColor:'white',
        flex:1
    }
});

export default searchScreen;
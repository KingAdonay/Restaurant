import React from 'react';
import {TextInput,View,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const searchBar=({term,onTermChange, onTermSubmit})=>{
    return (
    <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
    );
};

const styles=StyleSheet.create({
    background:{
        backgroundColor:'#f0eeee',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        marginVertical:10,
        flexDirection:'row'
        
    },
    inputStyle:{
        
        flex:1,
        fontSize:18,
        
    },
    iconStyle:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal: 15
    }
});

export default searchBar;
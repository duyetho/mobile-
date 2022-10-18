import * as React from 'react';
import {View,Text, Image, StyleSheet } from 'react-native';

export default function Banner (){
    return(
        <View style ={styles.container}>
            <Image
            style={styles.imgLarge}
            source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLndXGqqTsGW9SvdqtutxIb4dI3TxrK10CA&usqp=CAU',
            }}
            />
            <Text style={styles.textLarge}>
                Wellcome app
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        margin:0,

       
    },
    imgLarge:{
        display: 'flex',
        position: 'relative',
        width: 420,
        height:200,
        paddingLeft: 10,
        
    },
    textLarge:{
        position:'absolute',
        fontSize: 30,
        paddingTop: 200,
        paddingLeft: 100,
        color: 'white',
       
    }
})
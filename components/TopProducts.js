import * as React from 'react';
import {View,Text, Image, StyleSheet } from 'react-native';

export default function TopProducts (){
    return(
        <View style ={
            [styles.container,
            {flexDirection:'row' }
            ]} >
            <View>
                <Image
                style={styles.imgLarge}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLndXGqqTsGW9SvdqtutxIb4dI3TxrK10CA&usqp=CAU',
                }}
                />
                <Text style={styles.textLarge}>
                    Apple
                </Text>
            </View>
            <View>
                <Image
                style={styles.imgLarge}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLndXGqqTsGW9SvdqtutxIb4dI3TxrK10CA&usqp=CAU',
                }}
                />
                <Text style={styles.textLarge}>
                    Apple
                </Text>
            </View>
            <View>
                <Image
                style={styles.imgLarge}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLndXGqqTsGW9SvdqtutxIb4dI3TxrK10CA&usqp=CAU',
                }}
                />
                <Text style={styles.textLarge}>
                    Apple
                </Text>
            </View>
        </View>
    );
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        gap:50,
    },
    row:{
        flexDirection:'row',
    },
    product:{
        width:50,
        height:150,
    },
    imgLarge:{
        width: 100,
        height:140,
        gap:20,
        
    },
})
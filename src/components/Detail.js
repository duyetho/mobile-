import {View,Text,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function Detail ({navigation}){
    return(
    <View  style={{fex:1, alignItems: 'center'}}>
        <Text>Welcome to my detail</Text>
        <Text>
            <Icon name="rocket" color="red" size={30} />
            <Icon name="home" color="green" size={30} />
            <Icon name="heart" color="yellow" size={30} />
        </Text>
        <Button title='come back Home' onPress={() => navigation.navigate('Home')}/>
    </View>
    );
}
export default Detail;
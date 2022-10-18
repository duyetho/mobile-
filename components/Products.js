import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
export default function FirstScreen() {
    const [selectedValue, setSelectedValue] = useState('ltr');
    const values = ['ltr', 'rtl'];
    return (
      <View style={{padding: 10, flex: 1}}>
        <View style={styles.row}>
          {values.map(value => (
            <TouchableOpacity
              key={value}
              onPress={() => setSelectedValue(value)}
              style={[styles.button, selectedValue === value && styles.selected]}>
              <Text
                style={[
                  styles.buttonLabel,
                  selectedValue === value && styles.selectedLabel,
                ]}>
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.container, {direction: selectedValue}]}>
          <View style={{width: 50, height: 50, backgroundColor: '#EE2C38'}} />
          <View style={{width: 50, height: 50, backgroundColor: '#FAA030'}} />
          <View style={{width: 50, height: 50, backgroundColor: '#32B76C'}} />
        </View>
      </View>
    );
  };

  const styles = {
    container: {
      flex: 1,
      marginTop: 8,
      backgroundColor: 'grey',
    },
    box: {
      width: 50,
      height: 50,
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 4,
      backgroundColor: 'oldlace',
      alignSelf: 'flex-start',
      marginHorizontal: '1%',
      marginBottom: 6,
      minWidth: '48%',
      textAlign: 'center',
    },
    selected: {
      backgroundColor: 'coral',
      borderWidth: 0,
    },
    buttonLabel: {
      fontSize: 12,
      fontWeight: '500',
      color: 'coral',
    },
    selectedLabel: {
      color: 'white',
    },
    label: {
      textAlign: 'center',
      marginBottom: 10,
      fontSize: 24,
    },
  };
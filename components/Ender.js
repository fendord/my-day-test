import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Ender = props => {
    return(
        <View style={styles.Ender}>
            <Text style={styles.enderTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Ender: {
        width:'100%',
        height:40,
        paddingBottom: 10,
        backgroundColor: '#FFC72C',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,

    },

    enderTitle: {
        color: 'white',
        fontSize: 18
    }
});
export default Ender;
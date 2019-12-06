import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const Taskitem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
            <View style={styles.mytasks}>
                <Text style={styles.mytaskstext}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mytasks: {
        padding: 5,
        margin: 5,
        backgroundColor: '#FFc72C',
        borderColor: 'black',
        borderRadius: 10,
        textAlign: 'center',
        width:'90%'
    },
    mytaskstext:{
        color:'white',
    }
});

export default Taskitem;
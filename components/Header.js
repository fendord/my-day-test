import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
    return(
        <View style={styles.Header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Header: {
        width:'100%',
        height:90,
        paddingTop: 36,
        backgroundColor: '#FA4616',
        alignItems: 'center',
        justifyContent: 'center',

    },

    headerTitle: {
        color: 'white',
        fontSize: 18
    }
});
export default Header;
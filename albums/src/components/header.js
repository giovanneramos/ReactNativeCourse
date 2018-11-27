//Import librarys to make a component

import React from 'react';
import { Text, View } from 'react-native';

// Make a component

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    
    return (
    <View style={viewStyle} >
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 35,
        shadowColor: '#000',
        shadowOffset: { with: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
// Make the component availble to other parts of the app

export default Header;

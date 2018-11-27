// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component 

const App = () => (
    <View>
        <Header headerText={'New Koi app'} />
        <AlbumList />
    </View>
    );
// Render it to a device
AppRegistry.registerComponent('albums', () => App);
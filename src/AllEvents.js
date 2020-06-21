import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class AllEvents extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>AllEvents</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db'
    },
});

import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Forecast extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.box2}>{this.props.main}</Text>
                <Text style={styles.box2}>{this.props.description}</Text>
                <Text style={styles.box2}>{this.props.temp} °C</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%' },
    box2: {
        flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start',
        alignItems: 'center', textAlign: 'center', color: 'white',
      padding: '5%', color:'white' ,fontSize: 20,fontWeight: 'bold',
    },
});
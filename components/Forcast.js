import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Forecast extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 60, color: 'white' }}>{this.props.main}</Text>
                <Text style={{ fontSize: 30, color: 'white' }}>{this.props.description}</Text>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{ fontSize: 40, color: 'white' }}>{this.props.temp}</Text>
                    <Text style={{ paddingTop:5,fontSize: 20, color: 'white' }}>°C</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', },
    
});
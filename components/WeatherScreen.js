import React, { Component } from 'react';
import Forecast from './Forcast'
import Weather from './Weather'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import ZipCodeScreen from './ZipCodeScreen'

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>Weather</Text>),
        }
    }
    render() {
        return (
            <Weather zipCode="90110" />
        );
    }
}
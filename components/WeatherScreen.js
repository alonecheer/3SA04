import React, { Component } from 'react';
import Forecast from './Forcast'
import Weather from './Weather'
import { StyleSheet, Text, View, ImageBackground ,Button} from 'react-native';
import ZipCodeScreen from './ZipCodeScreen'

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text>Weather</Text>),
            headerRight: (
                <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')}
                />
            )
        }
    }
    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (<Weather zipCode={zipCode} />);
    }

}
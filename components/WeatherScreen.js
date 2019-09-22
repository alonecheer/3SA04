import React, { Component } from 'react';
import Forecast from './Forcast'
import Weather from './Weather'
import { StyleSheet, Text, View, ImageBackground ,Button} from 'react-native';
import ZipCodeScreen from './ZipCodeScreen'

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={{color:'orange',fontSize: 20, fontWeight: 'bold'}}>Weather</Text>),
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
const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%' },
    box1: {
        flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start',
        backgroundColor: "black", opacity: 0.3, alignItems: 'center', textAlign: 'center', color: 'white',
        width: '100%', height: '45%',
    },
}
);

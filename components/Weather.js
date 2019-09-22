import React, { Component } from 'react';
import Forecast from './Forcast'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: 'Main', description: 'description', temp: 0
            }
        }
    }

    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&appid=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        }
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    componentDidMount = () => this.fetchData()
    componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
            this.fetchData()
        }
    }
    render() {
        return (
            <View style={styles.container}>
                
                <ImageBackground source={require('./bg.jpeg')} style={styles.backdrop}>

                    <View style={styles.box1}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }}>Zip code is {this.props.zipCode}.</Text>
                        <Forecast {...this.state.forecast} />
                    </View>
                    
                </ImageBackground>

            </View>
        );
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

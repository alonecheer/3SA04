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
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=83000,th&units=metric&appid=fd68c0f2039c5a25f666a9ff374bc93e`)
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
    render() {
        return (
            <View style={styles.setLayout}>
                <ImageBackground source={require('./1.jpg')} style={styles.container}>
                    <View style={styles.backdrop}>

                        <Text style={{ color: 'white', fontSize: 30, }}>Zip code is {this.props.zipCode}.</Text>
                        <Forecast {...this.state.forecast} />

                    </View>
                </ImageBackground>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', width: '100%', height: '100%' },
    backdrop: {
        width: '100%', height: '50%', opacity: 0.3, backgroundColor: '#000',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    },
    setLayout: { width: '100%', height: '100%' }

});

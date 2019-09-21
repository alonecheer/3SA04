import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight, ImageBackground } from 'react-native';
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({ place, code, navigate }) => (

    <TouchableHighlight onPress={() => navigate('Weather', { zipCode: code })}>

        <View style={styles.BackgroundText}>
            <View style={styles.zipItem}>
                    <Text style={{ fontSize: 30, color: 'white' }}>{place}</Text>
                    <Text style={{ fontSize: 30, color: 'white' }}>{code}</Text>
            </View>
        </View>

    </TouchableHighlight>

)

const _keyExtractor = item => item.code
export default class ZipCodeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text>Choose a zip code</Text>),
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    zipItem: { alignItems: 'center', paddingTop: 10, },
    BackgroundText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 1,
        width: '100%',
        height: '10%'
    },
    container: { flex: 1, alignItems: 'center', width: '100%', height: '100%' },
});
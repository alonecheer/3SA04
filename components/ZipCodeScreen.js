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


        <View style={[styles.view, styles.withBorderRadius, styles.withBottomBorder,styles.zipItem]}>
            
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
         
        </View>


    </TouchableHighlight>

)

const _keyExtractor = item => item.code
export default class ZipCodeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={{color:'orange',fontSize: 20, fontWeight: 'bold'}}>Choose a zip code</Text>),
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
    zipItem: {
        alignItems: 'center', paddingTop: 10, flexDirection: 'row', flex: 1,
       backgroundColor: '#82caaf', padding: '10%', marginTop: 20,
    },
    zipItem2: {
        alignItems: 'center',  flexDirection: 'column', flex: 1,
        
    },
    zipPlace: {
        textAlign:'left',
       
        color:'white',
    },
    zipCode: {
        textAlign:'left',
       
        color:'white',
    },
    container: {
        flex: 1,
        backgroundColor: '#82caaf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        width: 300,
        height: 50,
        backgroundColor: '#82caaf',
        margin: 10,
        padding: 10,
        alignItems: 'center',
    },
    withBorderRadius: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
        /* the same is ofr the borderBottomRight/Left */
    },
    withBottomBorder: {
        borderBottomColor: '#82caaf',
        borderBottomWidth: 1,
        backgroundColor: '#82caaf'
    },

});
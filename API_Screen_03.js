import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { useState } from 'react';
const widthWindow = Dimensions.get('window').width;

const App = ({navigation}) => {

    const [text, setText] = useState('');
    var url = 'https://670b36dcac6860a6c2cb6921.mockapi.io/Task';
    var fnAdd = ()=>{
        console.log('add');
        var task = {name:text};
        console.log(task);
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(task)
        }).then(res=>res.json()).then(data=>console.log(data))
    }
    return (
        <View style={Styles.container}>
            <View style={Styles.Part1}>
                <View style={Styles.InfoArea}>
                    <View style={Styles.InfoDetail}>
                        <Image source={require('./Images/Avatar.png')} style={{ width: 50, height: 50 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: '#171A1F', fontWeight: 700, fontSize: 20, paddingLeft: 12 }}>Hi Twinkle</Text>
                            <Text style={{ color: '#171A1F', fontWeight: 700, fontSize: 14, opacity: 0.75 }}>Have agrate day a head</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ marginRight: 30 }} onPress={() => navigation.goBack()} >
                        <Image source={require('./Images/ArrowLeft.png')} style={{ width: 22, height: 22 }} />
                    </TouchableOpacity>
                </View>

                <Text style={{ fontWeight: 700, fontSize: 32, color: '#171A1F' }}>ADD YOUR JOB</Text>

                <View style={{ position: 'relative' }}>
                    <Image source={require('./Images/Name.png')} style={{ width: 24, height: 24, position: 'absolute', top: 8, left: 8 }} />
                    <TextInput style={Styles.Input} placeholder='input your job' 
                    onChangeText={(value) => setText(value)}
                    value={text}/>
                </View>

                <TouchableOpacity style={Styles.ButtonFinish} onPress={fnAdd}>
                    <Text style={Styles.ButtonFinishName}>FINISH→</Text>
                </TouchableOpacity>
            </View>

            <View style={Styles.Part2}>
                <Image source={require('./Images/Image 95.png')} style={{ width: 190, height: 170 }} />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Part1: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    InfoArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: widthWindow
    },
    InfoDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30
    },
    Input: {
        width: 300,
        height: 44,
        borderWidth: 1,
        borderColor: '#9095A0',
        borderRadius: 4,
        paddingLeft: 40,
        fontWeight: 400,
        fontSize: 14,
        color: '#171A1F',
        marginBottom: 20
    },
    Part2: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonAdd: {
        height: 69,
        width: 69,
        borderRadius: 34,
        backgroundColor: '#00BDD6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    ButtonFinish: {
        width: 190,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#00BDD6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonFinishName: {
        color: '#FFFFFF',
        fontWeight: 400,
        fontSize: 16
    }
})

export default App;
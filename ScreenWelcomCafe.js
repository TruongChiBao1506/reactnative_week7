import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

const App =({navigation})=>{
    return (
        <View style = {Styles.container}>
            <View style = {{flex:1}}>
                <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style = {Styles.Title}>Welcome to Cafe world</Text>
                </View>
                <View style = {{flex:2, justifyContent:'space-around', alignItems:'center'}}>
                    <Image source={require('./Images/JewelBox.png')} style = {{width:200, height:62}}/>
                    <Image source={require('./Images/Javasti.png')} style = {{width:200, height:62}}/>
                    <Image source={require('./Images/Image (3).png')} style = {{width:200, height:62}}/>
                </View>
                <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style = {Styles.Button} onPress={()=>navigation.navigate('ScreenShop')}>
                        <Text style = {Styles.ButtonName}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Title:{
        color:'#171A1F',
        fontWeight:700,
        fontSize:24
    },
    Button:{
        width:312,
        height:50,
        backgroundColor:'#00BDD6',
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center'
    },
    ButtonName:{
        color:'#FFFFFF',
        fontWeight:400,
        fontSize:14
    }
})
export default App;
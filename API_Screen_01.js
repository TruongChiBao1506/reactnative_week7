import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

const App = ({navigation})=>{
    return(
        <View style = {Styles.container}>
            <View style = {Styles.Part1}>
                <Image source = {require('./Images/Image 95.png')} style = {{width:271, height:271}}/>
                <Text style = {{textAlign:'center', width:180, color:'#8353E2', fontWeight:700, fontSize:24}}>MANAGE YOUR TASK</Text>
            </View>
            <View style = {Styles.Part2}>
                <View style = {{position:'relative'}}>
                    <Image source={require('./Images/Frame.png')} style = {{width:20, height:20, position:'absolute', top:12, left:12}}/>
                    <TextInput style = {Styles.TextInput} placeholder='Enter your name'/>
                </View>
                
                <TouchableOpacity style = {Styles.Button} onPress={() => navigation.navigate('Screen02')}>
                    <Text style = {Styles.ButtonName}>GET STARTED→</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    Part1:{
        flex:2,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    Part2:{
        flex:1.5,
        justifyContent:'space-around',
        alignItems:'center'
    },
    TextInput:{
        width:334,
        height:43,
        borderWidth:1,
        borderColor:'#9095A0',
        borderRadius:12,
        paddingLeft:40,
        color:'#BCC1CA',
        fontWeight:400,
        fontSize:16
    },
    Button:{
        width:190,
        height:44,
        borderRadius:12,
        backgroundColor:'#00BDD6',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40
    },
    ButtonName:{
        color:'#FFFFFF',
        fontWeight:400,
        fontSize:16
    }
})
export default App;
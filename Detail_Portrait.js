import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, FlatList, PixelRatio } from 'react-native';

const App = ({route, navigation})=>{
    const {item} = route.params;

    const widthImage = 90* PixelRatio.get();
    const heightImage = 90* PixelRatio.get();
    const price = Number(item.price).toFixed(2);

    return (
        <View style = {Styles.container}>
            <View style = {Styles.Part1}>
                <Image source={item.image} style = {{width:widthImage, height:heightImage}} resizeMode='contain'/>
            </View>

            <View style = {Styles.Part2}>
                <Text style = {Styles.Name}>{item.name}</Text>
                <View style = {{flexDirection:'row', width:330, justifyContent:'space-between', alignItems:'center'}}>
                    <Text style = {Styles.Content}>{item.content}</Text>
                    <Text style = {Styles.Price}>${price}</Text>
                </View>
                <View>
                    <Text style = {[Styles.Content,{marginBottom:10}]}><Image source={require('./Images/Vector.png')} style = {{width:20, height:20, top:5, marginRight:5}}/> Delivery in</Text>
                    <View style = {{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:300, marginLeft:20}}>
                        <Text style = {Styles.Name}>30 min</Text>
                        <View style = {{flexDirection:'row'}}>
                            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
                                <Image source={require('./Images/Group 15.png')} style = {{width:21, height:21}}/>
                            </TouchableOpacity >
                            <TextInput value='1' style = {{textAlign:'center', width:40, color:'#000000', fontWeight:700, fontSize:20}}/>
                            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
                                <Image source={require('./Images/Group 15.png')} style = {{width:21, height:21}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style = {Styles.Name}>Restaurants info</Text>
                <Text style = {Styles.Info}>
                Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
            </View>

            <View style = {Styles.Part3}>  
                <TouchableOpacity style = {Styles.Button}>
                    <Text style = {Styles.ButtonName}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    Part1:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    Part2:{
        flex:2,
        justifyContent:'space-around',
        alignItems:'flex-start',
        width:'94%'
    },
    Part3:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center'
    },
    Name:{
        color:'#000000',
        fontWeight:700,
        fontSize:20
    },
    Content:{
        color:'#0000008A',
        fontWeight:700,
        fontSize:15
    },
    Price:{
        color:'#000000',
        fontWeight:700,
        fontSize:20
    },
    Info:{
        color:'#000000AB',
        fontWeight:700, 
        fontSize:15
    },
    Button:{
        width:316,
        height:58,
        backgroundColor:'#F1B000',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#00000033'
    },
    ButtonName:{
        color:'#FFFDFD',
        fontWeight:700,
        fontSize:25
    }
})
export default App;
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, FlatList } from 'react-native';

const calculateDelivery = (itemLength)=>{
    return 2.5* itemLength;
}
const calculateTotal = (item)=>{
    let total = 0;
    item.forEach(element => {
        total += Number(element.price);
    });
    return total;
}

const Item = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={Styles.Item}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '33%' }}>
                    <Image source={item.image} style={{ width: 62, height: 62, borderRadius: 6 }} />
                    <View style={{ alignItems: 'flex-start', justifyContent: 'space-between', height: 60, marginLeft: 10 }}>
                        <Text>{item.name}</Text>
                        <Text> <Image source={require('./Images/Play.png')} style={{ width: 8, height: 9 }} /> ${item.price}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '25%', marginRight: 10 }}>
                    <TouchableOpacity>
                        <Image source={require('./Images/decrease.png')} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                    <TextInput style={{ width: 30, height: 30 }} />
                    <TouchableOpacity>
                        <Image source={require('./Images/increase.png')} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const App = ({route, navigation}) => {
    const item= route.params.arrayItem;
    const itemLength = route.params.arrayItemLength;
    
    return (
        <View style={Styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={Styles.Header}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={()=>navigation.goBack()} >
                        <Image source={require('./Images/leftArrow.png')} style={{ width: 44, height: 44 }} />
                    </TouchableOpacity>
                    <Text style={Styles.Title}>Your orders</Text>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 50, marginRight: 30 }}>
                        <Image source={require('./Images/searchIcon.png')} style={{ width: 24, height: 24 }} />
                    </TouchableOpacity>
                </View>
                <View style = {Styles.Delivery}>
                    <View style = {{justifyContent:'space-around', height:'100%', marginLeft:10}}>
                        <Text style = {Styles.TextScreen}>CAFE DELIVERY</Text>
                        <Text style = {Styles.TextScreen}>Order #18</Text>
                    </View>
                    <Text style = {Styles.Price}>${calculateDelivery(itemLength)}</Text>
                </View>
                <View style = {Styles.Total}>
                    <View style = {{justifyContent:'space-around', height:'100%', marginLeft:10}}>
                        <Text style = {Styles.TextScreen}>CAFE </Text>
                        <Text style = {Styles.TextScreen}>Order #18</Text>
                    </View>
                    <Text style = {Styles.Price}>${calculateTotal(item)}</Text>
                </View>
                <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                    <SafeAreaView style={{ height: '100%' }}>
                        <FlatList
                        data={item}
                        renderItem={({item}) =><Item item={item}/>}
                        keyExtractor={item=> item.id}/>
                    </SafeAreaView>
                </View>
                <View style={{ flex: 1.5, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity style={Styles.Button} onPress={()=> navigation.navigate('ScreenOrder',{arrayItem:item, arrayItemLength: item.length})}>
                        <Text style={Styles.ButtonName}>PAY NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20
    },
    Title: {
        color: '#171A1F',
        fontWeight: 700,
        fontSize: 24,
        marginLeft: 30,
        marginRight: 30
    },
    Delivery:{
        width:347,
        height:100,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#00BDD6',
        marginVertical:5
    },
    Total:{
        width:347,
        height:100,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#8353E2',
        marginVertical:5
    },
    TextScreen:{
        color:'#FFFFFF',
        fontWeight:700,
        fontSize:16
    },
    Price:{
        color:'#FFFFFF',
        fontWeight:700,
        fontSize:20,
        marginRight:10
    },
    Item: {
        width: 330,
        height: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF00',
        borderWidth: 1,
        borderColor: '#BCC1CA',
        borderRadius: 4,
        margin: 10
    },
    Button: {
        width: 347,
        height: 44,
        backgroundColor: '#EFB034',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    ButtonName: {
        color: '#FFFFFF',
        fontWeight: 400,
        fontSize: 16
    }
})

export default App;
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, FlatList } from 'react-native';



const Donut = [
    {
        id: 1,
        name: "Tasty Donut",
        content: "Spicy tasty donut family",
        price: 10.00,
        image: require('./Images/donut_yellow 1.png')
    },
    {
        id: 2,
        name: "Pink Donut",
        content: "Spicy tasty donut family",
        price: 20.00,
        image: require('./Images/tasty_donut 1.png')
    },
    {
        id: 3,
        name: "Floating Donut",
        content: "Spicy tasty donut family",
        price: 30.00,
        image: require('./Images/green_donut 1.png')
    },
    {
        id: 4,
        name: "Tasty Donut",
        content: "Spicy tasty donut family",
        price: 40.00,
        image: require('./Images/donut_red 1.png')
    },

]

const Item = ({ item, navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail_Portrait',{item})}>
        <View style={Styles.Item}>
            <Image source={item.image} style={{ width: 90, height: 90, borderRadius: 10, marginLeft: 10 }} />
            <View style={{ justifyContent: 'space-around', alignItems: 'flex-start', marginLeft: 15, height: '90%' }}>
                <Text style={Styles.Name}>{item.name}</Text>
                <Text style={Styles.Content}>{item.content}</Text>
                <Text style={Styles.Price}>${item.price}.00</Text>
            </View>
            <TouchableOpacity>
                <Image source={require('./Images/plus_button.png')} style={{ width: 44, height: 45, position: 'absolute', bottom: -58, right: -50 }} />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>

)

const App = ({navigation}) => {

    const [ButtonColor, setButtonColor] = useState('#C4C4C41F');
    const [dataInitial, setDataInitial] = useState(Donut);
    const [dataFilter, setDataFilter] = useState(Donut);
    const [search, setSearch] = useState('');

    const handlerSearch = (text) => {
        setSearch(text);
        setDataFilter(dataInitial.filter(item => item.name.includes(text)));
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.Part1}>
                <View>
                    <Text style={Styles.Welcom}>Welcome, Jala!</Text>
                    <Text style={Styles.Choice}>Choice you Best food</Text>
                </View>

                <TextInput style={Styles.Input} placeholder='Search food' value={search} onChangeText={handlerSearch}/>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity style={Styles.Button} >
                        <Text style={Styles.ButtonName}>Donut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.Button}>
                        <Text style={Styles.ButtonName}>Pink Donut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.Button}>
                        <Text style={Styles.ButtonName}>Floating</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={Styles.Part2}>
                <SafeAreaView style={{ height: '100%', width: 'auto' }}>
                    <FlatList
                        data={dataFilter}
                        renderItem={({ item }) => <Item item={item} navigation={navigation}/>}
                        keyExtractor={item => item.id} />
                </SafeAreaView>
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
    Part1: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        width: '94%',
    },
    Part2: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Welcom: {
        color: '#000000A6',
        fontWeight: 700,
        fontSize: 16
    },
    Choice: {
        color: '#000000',
        fontWeight: 700,
        fontSize: 20
    },
    Input: {
        backgroundColor: '#C4C4C41A',
        borderColor: '#C4C4C4',
        color: '#0000004D',
        width: 266,
        height: 46,
        borderWidth: 1,
        borderRadius: 3,
        fontWeight: 700,
        fontSize: 16,
        paddingLeft: 20
    },
    Button: {
        width: 101,
        height: 35,
        backgroundColor: '#C4C4C41F',
        borderColor: '#00000033',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonName: {
        color: '#0C0606',
        fontWeight: 700,
        fontSize: 14
    },
    Item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F4DDDD',
        width: 337,
        height: 115,
        borderRadius: 10,
        position: 'relative',
        marginVertical: 5
    },
    Name: {
        color: '#000000',
        fontWeight: 700,
        fontSize: 20
    },
    Content: {
        color: '#0000008A',
        fontWeight: 700,
        fontSize: 15
    },
    Price: {
        color: '#000000',
        fontWeight: 700,
        fontSize: 20
    },
})

export default App;
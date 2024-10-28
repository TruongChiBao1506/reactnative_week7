import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, FlatList } from 'react-native';
import { useState } from 'react';
const drinkData = [
    {
        id: '1',
        name: 'Milk',
        price: '20',
        image: require('./Images/Milk.jpg')
    },
    {
        id: '2',
        name: 'Origin',
        price: '68',
        image: require('./Images/Origin.png')
    },
    {
        id: '3',
        name: 'Salt',
        price: '5',
        image: require('./Images/Salt.jpg')
    },
    {
        id: '4',
        name: 'Espresso',
        price: '9',
        image: require('./Images/Espresso.jpg')
    },
    {
        id: '5',
        name: 'Capuchino',
        price: '23',
        image: require('./Images/Cappuchino.jpg')
    },
    {
        id: '6',
        name: 'Weasel',
        price: '20',
        image: require('./Images/cafeError.png')
    },
    {
        id: '7',
        name: 'Culi',
        price: '0',
        image: require('./Images/cafeError.png')
    },
    {
        id: '8',
        name: 'Catimor',
        price: '9',
        image: require('./Images/Catimor.png')
    }
];

const toggleItemSelection = (itemId, setSelectedItem, selectedItem, setItem) => {
    console.log('selectedItem', selectedItem);
    
    setSelectedItem(prev => {
        if (prev.includes(itemId)) {
            setItem(prev => prev.filter(item => item.id !== itemId));
            return prev.filter(id => id !== itemId);
            
        }
        else {
            const item = drinkData.find(item => item.id === itemId);
            setItem(prev => [...prev, item]);
            return [...prev, itemId];
        }
    });
};

const Item = ({ item, selectedItem, setSelectedItem, setItem }) => {
    const isSelected = selectedItem.includes(item.id);
    return (
        <TouchableOpacity onPress={()=> toggleItemSelection(item.id, setSelectedItem, selectedItem,setItem)} >
            <View style={[Styles.Item, isSelected && { borderColor: 'green', borderWidth:3 }]}>
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

const App = ({navigation}) => {
    const [selectedItem, setSelectedItem] = useState([]);
    const [item, setItem] = useState([]);

    return (
        <View style = {Styles.container}>
            <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                <View style={Styles.Header}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={()=>navigation.goBack()} >
                        <Image source={require('./Images/leftArrow.png')} style={{ width: 44, height: 44 }}  />
                    </TouchableOpacity>
                    <Text style={Styles.Title}>Drinks</Text>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 50, marginRight: 30 }}>
                        <Image source={require('./Images/searchIcon.png')} style={{ width: 24, height: 24 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <SafeAreaView style={{ height: '100%' }}>
                        <FlatList
                            data={drinkData}
                            renderItem={({ item }) => <Item item={item} selectedItem={selectedItem} setSelectedItem={setSelectedItem} setItem={setItem}/>}
                            keyExtractor={item => item.id} />
                    </SafeAreaView>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={Styles.Button} onPress={()=> navigation.navigate('ScreenOrder',{arrayItem:item, arrayItemLength: item.length})}>
                        <Text style={Styles.ButtonName}>GO TO CART</Text>
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
        marginRight: 60
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
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, FlatList } from 'react-native';

const data = [
    {
        id: '1',
        name: 'Kitanda Espresso & Acai-U District',
        address: '1121 NE 45 St',
        status: 'accepting',
        time: '5-10 minutes',
        image: require('./Images/Image (3).png')
    },
    {
        id: '2',
        name: 'Jewel Box Cafe',
        address: '1145 GE 54 St',
        status: 'unavailable',
        time: '10-15 minutes',
        image: require('./Images/JewelBox.png')
    },
    {
        id: '3',
        name: 'Javasti Cafe',
        address: '1167 GE 54 St',
        status: 'unavailable',
        time: '15-20 minutes',
        image: require('./Images/Javasti.png')
    },
    {
        id: '4',
        name: 'Trung Nguyen Legend Cafe',
        address: '1167 GE 54 St',
        status: 'accepting',
        time: '15-20 minutes',
        image: require('./Images/TNLegend.png')
    },
    {
        id: '5',
        name: 'Javasti Cafe',
        address: '1167 GE 54 St',
        status: 'unavailable',
        time: '15-20 minutes',
        image: require('./Images/Javasti.png')
    },
    {
        id: '6',
        name: 'Trung Nguyen Legend Cafe',
        address: '1167 GE 54 St',
        status: 'accepting',
        time: '15-20 minutes',
        image: require('./Images/TNLegend.png')
    }
]



const renderIcon = (status) => {
    if (status === 'accepting') {
        return require('./Images/checkIcon.png')
    }
    return require('./Images/redlock.png')
}

const renderStatus = (status) => {
    if (status === 'accepting') {
        return <Text style={{ color: '#1DD75B', fontWeight: 400, fontSize: 14 }}>Accepting Orders</Text>
    }
    return <Text style={{ color: '#DE3B40', fontWeight: 400, fontSize: 14 }}>Tempory Unavailable</Text>
}

const Item = ({ item, navigation }) => (
    <TouchableOpacity onPress={()=> navigation.navigate('ScreenDrink')}>
        <View style={Styles.Item}>
            <Image source={item.image} style={{ width: 330, height: 114, borderRadius: 6 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <View style={{ flexDirection: 'row', width: 161, height: 30, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#F3F4F6', marginVertical: 5 }}>
                    <Image source={renderIcon(item.status)} style={{ width: 19, height: 14 }} />
                    <Text>{renderStatus(item.status)}</Text>
                </View>
                <View style={{ flexDirection: 'row', width: 121, height: 30, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#F3F4F6', marginVertical: 5 }}>
                    <Image source={require('./Images/clock.png')} style={{ width: 18, height: 18 }} />
                    <Text>{item.time}</Text>
                </View>
                <Image source={require('./Images/location.png')} style={{ width: 14, height: 18 }} />
            </View>
            <Text style={{ color: '#171A1F', fontWeight: 700, fontSize: 16, marginLeft: 10 }}>{item.name}</Text>
            <Text style={{ color: '#171A1F', fontWeight: 400, fontSize: 14, opacity: 0.62, marginLeft: 10 }}>{item.address}</Text>
        </View>
    </TouchableOpacity>
)

const App = ({navigation}) => {
    return (
        <View style={Styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <View style={Styles.Header}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={()=>navigation.goBack()} >
                        <Image source={require('./Images/leftArrow.png')} style={{ width: 44, height: 44 }} />
                    </TouchableOpacity>
                    <Text style={Styles.Title}>Shops Near Me</Text>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 50, marginRight: 30 }}>
                        <Image source={require('./Images/searchIcon.png')} style={{ width: 24, height: 24 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <SafeAreaView style={{ height: '100%' }}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <Item item={item} navigation={navigation} />}
                            keyExtractor={item => item.id} />
                    </SafeAreaView>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F4F6'

    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
    Title: {
        color: '#171A1F',
        fontWeight: 700,
        fontSize: 24
    },
    Item: {
        width: 330,
        height: 200,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 15,
        marginVertical: 5
    }
})

export default App;
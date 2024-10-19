import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Dimensions, SafeAreaView, Alert } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { FlatList, Modal } from 'react-native-web';
import { useEffect, useState } from 'react';
const widthWindow = Dimensions.get('window').width;

const DATA = [
    {
        id: 1,
        name: 'To check email'
    },
    {
        id: 2,
        name: 'UI task web page'
    },
    {
        id: 3,
        name: 'Learn javascript basic'
    },
    {
        id: 4,
        name: 'Learn HTML Advance'
    },
    {
        id: 5,
        name: 'Medical App UI'
    },
    {
        id: 6,
        name: 'Learn Java'
    },
]

const App = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const handleEdit = (task) => {
        console.log('Edit task:', task);
        setEditingTask(task);
        setNewTitle(task.name);
    };
    const handleCancelEdit = () => {
        setEditingTask(null);
        setNewTitle('');
    };
    var url = 'https://670b36dcac6860a6c2cb6921.mockapi.io/Task';

    useEffect(() => {
        var fn = fetch(url);
        fn.then(res => res.json()).then(data => setData(data));
    }, [])

    var fnDelete = async (id) => {
        try {
            const response = await fetch(`https://670b36dcac6860a6c2cb6921.mockapi.io/Task/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // Thêm các headers khác nếu cần, ví dụ như Authorization
                },
            });

            if (!response.ok) {
                console.error('Failed to delete task');
                Alert.alert('Error', 'Failed to delete task. Please try again.');
            }

            const result = await response.json();
            console.log('Đã xóa thành công:', result);
            Alert.alert('Success', 'Task deleted successfully');
            setData(currentTasks => currentTasks.filter(task => task.id !== id));
            // Xử lý kết quả sau khi xóa thành công
        } catch (error) {
            console.error('Error deleting task:', error);
            Alert.alert('Error', 'An error occurred while deleting the task.');
            // Xử lý lỗi
        }
    };

    const fnUpdate = async (task) => {
        try {
            // API call to update the task
            const response = await fetch(`https://670b36dcac6860a6c2cb6921.mockapi.io/Task/${task.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newTitle }), // Dữ liệu cập nhật
            });

            if (response.ok) {
                // Cập nhật thành công
                const updatedTask = await response.json();
                console.log('Cập nhật thành công:', updatedTask);

                // Cập nhật danh sách
                setData((prevTasks) =>
                    prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
                );
                setEditingTask(null);
                setNewTitle('');
            } else {
                console.error('Cập nhật thất bại');
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật', error);
        }
    };

    const Item = ({ item, isEditing }) => (
        <View>
            <View style={Styles.Item}>
                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <Image source={require('./Images/Check.png')} style={{ width: 20, height: 20 }} />
                    <Text style={[Styles.ItemName, { marginLeft: 10 }]}>{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', width: 70, justifyContent: 'space-between', marginRight: 20 }}>
                    <TouchableOpacity onPress={() => fnDelete(item.id)}>
                        <Feather name="trash-2" size={20} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleEdit(item)}>
                        <Image source={require('./Images/Edit.png')} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
            {
                isEditing && (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput
                            style={Styles.InputName}
                            value={newTitle}
                            onChangeText={setNewTitle}
                            placeholder="Chỉnh sửa tên task"
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={Styles.ButtonCancel} onPress={handleCancelEdit}>
                                <Text style={Styles.ButtonSaveName}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.ButtonSave} onPress={() => fnUpdate(editingTask)}>
                                <Text style={Styles.ButtonSaveName}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </View>


    )

    return (
        <View style={Styles.container}>
            <View style={Styles.Part1}>
                <View style={Styles.InfoArea}>
                    <TouchableOpacity style={{ marginLeft: 18 }} onPress={() => navigation.goBack()} >
                        <Image source={require('./Images/ArrowLeft.png')} style={{ width: 22, height: 22 }} />
                    </TouchableOpacity>

                    <View style={Styles.InfoDetail}>
                        <Image source={require('./Images/Avatar.png')} style={{ width: 50, height: 50 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: '#171A1F', fontWeight: 700, fontSize: 20, paddingLeft: 12 }}>Hi Twinkle</Text>
                            <Text style={{ color: '#171A1F', fontWeight: 700, fontSize: 14, opacity: 0.75 }}>Have agrate day a head</Text>
                        </View>
                    </View>
                </View>

                <View style={{ position: 'relative' }}>
                    <Image source={require('./Images/Search.png')} style={{ width: 26, height: 26, position: 'absolute', top: 8, left: 8 }} />
                    <TextInput style={Styles.InputSearch} placeholder='Search' />
                </View>

            </View>
            <View style={Styles.Part2}>
                <SafeAreaView>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Item item={item} isEditing={item === editingTask}/>}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>

                <TouchableOpacity style={Styles.ButtonAdd} onPress={() => navigation.navigate('Screen03')}>
                    <Image source={require('./Images/Add.png')} style={{ width: 32, height: 32 }} />
                </TouchableOpacity>
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
        flex: 1,
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
        marginRight: 15
    },
    InputSearch: {
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
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    Item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: widthWindow - 40,
        height: 48,
        backgroundColor: '#DEE1E62B',
        borderwidth: 1,
        borderColor: '#9095A0',
        borderRadius: 24,
        marginVertical: 10,
        shadowColor: '#171A1F26',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,

    },
    ItemName: {
        fontWeight: 700,
        fontSize: 16,
        color: '#171A1F'
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
    ButtonSave: {
        width: 150,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#00BDD6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonCancel: {
        width: 150,
        height: 44,
        borderRadius: 12,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonSaveName: {
        color: '#FFFFFF',
        fontWeight: 400,
        fontSize: 16
    },
    InputName: {
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
    }
})

export default App;
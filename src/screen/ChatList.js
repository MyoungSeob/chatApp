import React from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth'
const ChatList = () => {
    const logout =()=> {
        auth().signOut()
    }
    return (
        <View>
            <Text>로그인 화면입니다.</Text>
            <Button title="로그아웃" onPress={logout}></Button>
        </View>
    )
}

export default ChatList;
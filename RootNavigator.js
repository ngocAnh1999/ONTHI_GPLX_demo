import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Component/Home';
import ListComponent from './Component/ListComponent';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={Home}
                options={{ title: 'Chọn bằng lái xe ôn thi'}}
                />
                <Stack.Screen name={"ListComponent"} component={ListComponent}
                options={{title: 'Ôn thi giấy phép lái xe '}}
                />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};

export default AuthNavigator;
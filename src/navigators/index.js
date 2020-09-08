import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, DefaultTheme, DarkTheme, useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DummyScreen from 'src/components/DummyScreen';

const Tab = createBottomTabNavigator();

const myDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor: "white",
    activeTabColor: "white"
  }
}

const myDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor: "black",
    activeTabColor: "red"
  }
}

export default function App() {
  const {colors} = useTheme();
  const currentTheme = useSelector((state) => {
    return state.themes;
  });

  return (
    <NavigationContainer theme={currentTheme ? myDarkTheme : myDefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({ 

          //accessing the icon colors from tabBarOptions
    
          tabBarIcon: ({ color = 'gray' }) => {
            let iconName;
    
            //determining which icon to be used for each tab
    
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Explore') {
              iconName = 'compass';
            }else if(route.name === 'Subscriptions'){
              iconName = 'youtube-subscription'
            }
            else if(route.name === 'Notifications'){
              iconName = 'bell-ring'
            }
            else if(route.name === 'Library'){
              iconName = 'filmstrip-box-multiple'
            }
            
            //returning icons for each tab with the specified color
    
            return <Icon name={iconName} size={20} 
              color={color} />;
          },
        })}
        tabBarOptions={{
    
          //specifying the active tab color from our colors object returned from useTheme hook
    
          activeTintColor: colors.activeTabColor,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={DummyScreen} />
        <Tab.Screen name="Explore" component={DummyScreen} />
        <Tab.Screen name="Subscriptions" component={DummyScreen} />
        <Tab.Screen name="Notifications" component={DummyScreen} />
        <Tab.Screen name="Library" component={DummyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

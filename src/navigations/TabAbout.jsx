//import libraries
import About from '../screens/About';
import UsedTech from '../screens/UsedTech';
import ShowBackend from '../screens/ShowBackend';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

// create a component
const TabAbout = () => {
    return (
        <Tab.Navigator
            screenOptions= {{ 
                headerStyle: { backgroundColor: 'purple', }, headerTintColor: 'white', 
                tabBarActiveTintColor: 'white', tabBarInactiveTintColor: 'grey', 
                tabBarStyle:{ backgroundColor: 'purple',}, tabBarLabelStyle:{ fontWeight: 'bold'},
                tabBarIndicatorStyle:{ backgroundColor: 'white', height: 2} }}
        >
            <Tab.Screen name="About" component={About} options={{ title: 'Developer'}} />
            <Tab.Screen name="Technology" component={UsedTech} />
            <Tab.Screen name="Backend" component={ShowBackend} />
        </Tab.Navigator>
    );
};

//make this component available to the app
export default TabAbout;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Animated from 'react-native-reanimated';

import { Block, Title, Image, Button } from './styles';

import Dashboard from '../screens/Dashboard';
import Messages from '../screens/Messages';
import Contact from '../screens/Contact';

const Navigation = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={30} />
            </Button>
          ),
        }}
      >
        <Stack.Screen name="Dashboard" color="#fff">
          {(props) => <Dashboard {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Messages">
          {(props) => <Messages {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Contact">
          {(props) => <Contact {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Block>
        <Image
          source={{
            height: 60,
            width: 60,
            uri:
              'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry.png',
          }}
        />
        <Title>React UI</Title>
      </Block>
      <DrawerItem
        label="Dashboard"
        labelStyle={{ marginLeft: -16, color: '#fff' }}
        icon={() => <Icon name="award" color="#fff" size={20} />}
        onPress={() => props.navigation.navigate('Dashboard')}
      />
      <DrawerItem
        label="Messages"
        labelStyle={{ marginLeft: -16, color: '#fff' }}
        icon={() => <Icon name="award" color="#fff" size={20} />}
        onPress={() => props.navigation.navigate('Messages')}
      />
      <DrawerItem
        label="Contact"
        labelStyle={{ marginLeft: -16, color: '#fff' }}
        icon={() => <Icon name="award" color="#fff" size={20} />}
        onPress={() => props.navigation.navigate('Contact')}
      />
    </DrawerContentScrollView>
  );
};

export default function Drawer() {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View style={{ backgroundColor: '#161A37', flex: 1 }}>
      <Navigation.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Navigation.Screen name="Screens">
          {(props) => <Screens {...props} style={animatedStyle} />}
        </Navigation.Screen>
      </Navigation.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { color: 'white', marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
});

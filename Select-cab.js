import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Header from './Components/Header';
import { TouchableOpacity } from 'react-native';
import Card from './Components/Card';

// Import other components/screens if needed
import BookPage from './BookPage';
import Trip from './Trip';
import Offers from './Offers';
import Profile from './Profile';

const SelectCabPage = ({ navigation }) => {

     const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    
    navigation.setOptions({
      headerShown: true,
      title: 'AimCabBooking',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#003580',
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

    useEffect(() => {
    fetch("https://aimcabbooking.com/admin/fetch_data.php?table=cabinfo")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

 
 

  return (
  <View style={styles.container}>
    <ScrollView>
      {data
        .filter((item) => item.model_type === 'HATCHBACK')
       

        .map((item) => (
          <Card key={item.id} data={item} />
        ))}
    </ScrollView>
  </View>
);
};


// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

const SelectCab = () => {
  return (
     <Tab.Navigator
      screenOptions={{
        activeTintColor: 'red',
        tabBarStyle: {
          backgroundColor: 'white',
          headerShown:false, // Set the background color of the tab bar to grey
          
        },
        tabBarLabelStyle: {
          fontSize: 14, // Adjust the font size of the tab labels
             
        },
        tabBarIconStyle: {
          marginBottom: -10, // Adjust the icon position
        },
      }}
    >
      <Tab.Screen
        name="Regular"
        component={SelectCabPage}
        options={{
          tabBarLabel: 'HatchBack',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={Offers}
        options={{
          tabBarLabel: 'Premium',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Luxury"
        component={Profile}
        options={{
          tabBarLabel: 'Luxury',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  searchBar: {
    height: 50,
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 5,
    backgroundColor: '#d7d7d9',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderColor: '#003580', // Add a black border color if needed
    borderWidth: 0,
  },
  iconText: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '80%',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default SelectCab;

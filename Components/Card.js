import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons

const Card = ({ data }) => {
  const handleBooking = () => {
    // Handle booking logic here
    console.log("Booking button clicked");
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.place}>{data.model_name}</Text>
        <Text style={styles.shortDescription}>
          Model Type: <Text style={styles.value}>{data.model_type}</Text>
        </Text>
        <Text style={styles.shortDescription}>
          Seats: <Text style={styles.value}>{data.seats}</Text>
        </Text>
        <Text style={styles.shortDescription}>
          Fuel: <Text style={styles.value}>{data.fuel_type}</Text>
        </Text>
        <Text style={styles.label}>
          Price: <Text style={styles.value}>{data.price}</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBooking}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 8,
  },
  cardContent: {
    padding: 15,
  },
  place: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  shortDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555",
    top: 45,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
    paddingLeft:160,
    bottom: 10,
    
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Card;
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { useEffect, useState } from "react";
import useRestaurants from "../hooks/useRestaurants";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Categories from "../components/Categories";

import Restaurants from "../components/Restaurants";

export default function HomeScreen() {
  const [term, setTerm] = useState("Burger");
  const [commonCategories] = useState([
    {
      name: "Burger",
      img: "https://raw.githubusercontent.com/harblaith7/React-Native-Crash-Course/main/src/assets/images/burger.png",
    },
    {
      name: "Pizza",
      img: "https://raw.githubusercontent.com/harblaith7/React-Native-Crash-Course/main/src/assets/images/pizza.png",
    },
    {
      name: "Dessert",
      img: "https://raw.githubusercontent.com/harblaith7/React-Native-Crash-Course/main/src/assets/images/cake.png",
    },
    {
      name: "Drinks",
      img: "https://raw.githubusercontent.com/harblaith7/React-Native-Crash-Course/main/src/assets/images/smoothies.png",
    },
    {
      name: "Steak",
      img: "https://raw.githubusercontent.com/harblaith7/React-Native-Crash-Course/main/src/assets/images/steak.png",
    },
    {
      name: "Pasta",
      img: "https://raw.githubusercontent.com/harblaith7/React-Native-Crash-Course/main/src/assets/images/pasta.png",
    },
  ]);

  const [{ data, loading, error }, searchResaurants] = useRestaurants(term);

  useEffect(() => {
    searchResaurants(term);
  }, [term]);

  return (
    <View style={styles.container}>
      <Header upperText="Grab your!!" lowerText="delicious meal!" />
      <SearchInput setTerm={setTerm} />
      <Categories
        commonCategories={commonCategories}
        setTerm={setTerm}
        term={term}
      />
      <Restaurants data={data} loading={loading} error={error} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(253,253,253)",
  },
  header1: {
    fontSize: 35,
    marginTop: 60,
    marginHorizontal: 25,
  },
  header2: {
    fontSize: 40,
    marginHorizontal: 25,
    fontWeight: "bold",
  },
});

import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  TextInput,
} from "react-native";

import ListItem from "@/components/list/ListItem";
import { sortSavingsData } from "@/utils/sortSavingsData";

import { getSavingsData } from "../../services/getSavingsData";
import { useFetchSavingsData } from "@/hooks/useFetchSavingsData";
import { sendAnalyticsEvent } from "@/utils/sendAnalyticsEvent";

export default function HomeScreen() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useFetchSavingsData((data) => {
    setItems(data);
  });

  const sortedItems = sortSavingsData(items, searchTerm);

  const onBankPress = () => {
    sendAnalyticsEvent('bank-press');
  }
  
  useEffect(() => {
    sendAnalyticsEvent('home');
  }, []);

  return (
    <>
      {items.length === 0 && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <ScrollView>
        <TextInput
          placeholder="Search accounts..."
          style={styles.search}
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        {sortedItems.map((item) => (
          <ListItem {...item} onBankPress={onBankPress} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    margin: 20,
    padding: 20,
    fontSize: 14,
    backgroundColor: "white",
    borderRadius: 14,
    boxShadow: '0px 2px 0px rgba(0,0,0,0.05)'
  },
});

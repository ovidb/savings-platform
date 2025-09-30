import {
  StyleSheet,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";
import { useRouter } from "expo-router";

const ListItem = ({ name, aer, aerGross, type, onBankPress }: any) => {
  const router = useRouter();

  function getAccountTypeStyles() {
    switch (type) {
      case "Instant Access": {
        return {
          borderLeftColor: "blue",
          borderLeftWidth: 8,
        };
      }
      case "Fixed Term": {
        return {
          borderLeftColor: "yellow",
          borderLeftWidth: 8,
        };
      }
      case "Notice": {
        return {
          borderLeftColor: "red",
          borderLeftWidth: 8,
      };
      }
    }
  }

  console.log("Rendering list item...");

  return (
    <View style={[listItemStyles.container, getAccountTypeStyles()]}>
      <ThemedText type="subtitle" maxFontSizeMultiplier={1}>{name}</ThemedText>
      <ThemedText>
        {aer}% | {aerGross}%
      </ThemedText>
      <ThemedText>AER | Gross</ThemedText>
      <TouchableOpacity
        onPress={() => Alert.alert(`This is an ${type} product`)}
      >
        <ThemedText type="link" style={listItemStyles.moreInfo}>
          More info
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onBankPress();
          router.push({
            pathname: '/bank',
            params: {
              bankName: name,
            }
          })
        }}
      >
        <ThemedText type="link" style={listItemStyles.moreInfo}>
          Go to bank
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

const listItemStyles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.05)",
    marginBottom: 5,
  },
  moreInfo: {
    fontSize: 10,
  },
});

export default ListItem;

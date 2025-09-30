import { SafeAreaView } from "react-native";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ui/ThemedText";
import { Stack, useLocalSearchParams } from "expo-router";

export const BankScreen = () => {
  const { bankName } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
            title: (bankName as string) ?? 'N/A',
        }}
      />
      <View style={styles.container}>
        <ThemedText type="title">Apply here</ThemedText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default BankScreen;

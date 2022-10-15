import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppCard from "./app/components/AppCard";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <AppCard
        title="Red Jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      ></AppCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight :0
  },
});

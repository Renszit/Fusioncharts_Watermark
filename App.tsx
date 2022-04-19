import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import ReactNativeFusionCharts from "react-native-fusioncharts";
import { data } from "./dummydata";
import * as secrets from "./secrets.json";

global.licenseConfig = {
  key: secrets.FUSIONCHARTSKEY,
  creditLabel: false, // true/false to show/hide watermark respectively
};

export default function App() {
  const width = Dimensions.get("window").width - 6;
  const height = 300;
  const chartConfig = {
    type: "msstackedcolumn2d",
    width: width,
    height: height,
    dataFormat: "json",
    screenOrientation: height > width ? "portrait" : "landscape",
    dataSource: data ? data : null,
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ReactNativeFusionCharts chartConfig={chartConfig} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

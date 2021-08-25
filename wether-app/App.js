import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";

import useFonts from "./src/hooks/fonts";

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <View styles={styles.container}>
      {/* Test Coding goes here */}
      {/* try rtghe addsudidbub au;lbcauic aui;.c i
      uibsiaudbicv a;bcasd
      a;bsocbauiobsc a
      asucbaubcuae
       */}
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

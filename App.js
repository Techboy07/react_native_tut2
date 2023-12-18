import {
  View,
  Button,
  StyleSheet,
  Modal,
  Text,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar
        backgroundColor={"lightgreen"}
        barStyle={"dark-content"}
        hidden
      />

      <ActivityIndicator />
      <ActivityIndicator
        size={"large"}
        color={"midnightblue"}
        animating={false}
      />
      {/* <Button
        title="Press"
        onPress={() => {
          setModalVisible(() => true);
        }}
        color="midnightblue"
      />
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => {
              setModalVisible(() => false);
            }}
          />
        </View>
      </Modal> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

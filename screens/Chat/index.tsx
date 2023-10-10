import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DATA } from "../../data/chatData";

const Chat = () => {
  const [chatData, setchatData] = useState(DATA);
  useEffect(() => {
    setchatData(DATA);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.chatContainer}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.chatContent}>
                <View style={styles.chatHeader}>
                  <Text style={styles.chatName}>{item.name} </Text>
                  <Text style={styles.chatTime}>{item.time} </Text>
                </View>
                <View style={styles.messages}>
                  <Text numberOfLines={1} style={styles.chatMessage}>
                    {item.lastMessage}{" "}
                  </Text>
                  {item.totalUnread > 0 && (
                    <View style={styles.unreadContainer}>
                      <Text style={styles.totalUnread}>{item.totalUnread}</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.chatButton} onPress={() => "#"}>
        <MaterialCommunityIcons
          name="android-messages"
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
  chatContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#128C7E",
  },
  chatContent: {
    flex: 5,
    borderBottomWidth: 0,
    marginLeft: 16,
    paddingBottom: 16,
    marginBottom: 13,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
    marginTop: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chatTime: {
    color: "#A0A09E",
  },
  messages: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatMessage: {
    fontSize: 14,
    color: "#A0A09E",
    width: "90%",
  },
  unreadContainer: {
    height: 20,
    width: 25,
    borderRadius: 20,
    backgroundColor: "#25D366",
    alignItems: "center",
    justifyContent: "center",
  },
  totalUnread: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "600",
  },
  chatButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#0e806a",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

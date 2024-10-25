import { View, StyleSheet, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { LightTheme } from "../../theme";
import { GapView, MyBanner, MyInput } from "../../components";
import { onValue, ref } from "firebase/database";
import { db } from "../../../firebaseconfig";

const AudioBooks = ({ navigation }) => {
  const [audiobooks, setAudiobooks] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    // Fetch audiobooks data
    const audiobooksRef = ref(db, "/audiobooks");
    onValue(audiobooksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setAudiobooks(Object.values(data));
      }
    });
  }, []);

  const filteredAudiobooks = audiobooks.filter((audioBook) =>
    audioBook.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderAudioBook = ({ item }: { item: any }) => (
    <MyBanner
      title2={item.title}
      genre={item.genre}
      source={{ uri: item.featureImage }}
      width={340}
      height={250}
      style={{ marginVertical: 10 }}
      onPress={() =>
        navigation.navigate("Music", {
          title: item.title,
          genre: item.genre,
          audioUrl: item.audioUrl,
          featureImage: item.featureImage,
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      <MyInput
        width={"90%"}
        style={{ borderWidth: 0 }}
        placeholder="Search Audiobooks..."
        value={searchQuery}
        placeholderColor="white"
        onChange={(text) => setSearchQuery(text)}
      />
      <GapView length={10} />
      <FlatList
        data={filteredAudiobooks}
        renderItem={renderAudioBook}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
      />
      <GapView length={20} />
    </View>
  );
};

export default AudioBooks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightTheme.colors.background,
    alignItems: "center",
  },
  searchBar: {
    width: "90%",
    height: 40,
    backgroundColor: LightTheme.colors.card,
    color: LightTheme.colors.text,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
  },
});

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LightTheme } from "../../theme";
import { GapView, MyBanner, MyInput } from "../../components";
import { CloseDropDown, OpenDropDown } from "../../assets";
import { onValue, ref } from "firebase/database";
import { db } from "../../../firebaseconfig";

// Define types for a story and episode
type Episode = {
  title: string;
  audioUrl: string;
};

type Story = {
  title: string;
  genre: string;
  featureImage: string;
  episodes: Episode[];
};

const Stories = ({ navigation }) => {
  const [expandedStory, setExpandedStory] = useState<string | null>(null);
  const [fictionalStories, setFictionalStories] = useState<Story[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const epiPressHandler = (storyTitle: string) => {
    setExpandedStory(expandedStory === storyTitle ? null : storyTitle);
  };

  useEffect(() => {
    const fictionalStoriesRef = ref(db, "/fictional-stories");
    onValue(fictionalStoriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFictionalStories(Object.values(data));
      }
    });
  }, []);

  const filteredStories = fictionalStories.filter((story) =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStory = ({ item }: { item: Story }) => (
    <>
      <View style={styles.storyContainer}>
        <MyBanner
          onPress={() => epiPressHandler(item.title)}
          title2={item.title}
          genre={item.genre}
          source={{ uri: item.featureImage }}
          width={300}
          height={250}
          style={{ marginVertical: 10 }}
        />
        <Pressable onPress={() => epiPressHandler(item.title)}>
          {expandedStory === item.title ? (
            <CloseDropDown width={25} height={25} />
          ) : (
            <OpenDropDown width={25} height={25} />
          )}
        </Pressable>
      </View>

      {/* Conditionally render episodes */}
      {expandedStory === item.title && (
        <View style={styles.episodeContainer}>
          {item.episodes.map((episode, index) => (
            <Pressable
              key={index}
              onPress={() =>
                navigation.navigate("Music", {
                  title: episode.title,
                  genre: item.genre,
                  audioUrl: episode.audioUrl,
                  featureImage: item.featureImage,
                })
              }
            >
              <View style={styles.episodeItem}>
                <Text style={styles.episodeText}>{episode.title}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      )}
    </>
  );

  return (
    <View style={styles.container}>
      <MyInput
        width={"90%"}
        style={{ borderWidth: 0 }}
        placeholder="Search Stories..."
        value={searchQuery}
        placeholderColor="white"
        onChange={(text) => setSearchQuery(text)}
      />
      <GapView length={10} />
      <FlatList
        data={filteredStories}
        renderItem={renderStory}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
      />
      <GapView length={20} />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightTheme.colors.background,
    padding: 10,
  },
  searchBar: {
    width: "90%",
    height: 40,
    backgroundColor: LightTheme.colors.card,
    color: LightTheme.colors.text,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 20,
    alignSelf: "center",
  },
  storyContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    justifyContent: "space-between",
  },
  episodeContainer: {
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
  },
  episodeItem: {
    padding: 10,
    borderBottomColor: LightTheme.colors.primary,
    backgroundColor: LightTheme.colors.background,
    borderBottomWidth: 1,
  },
  episodeText: {
    fontSize: 16,
    padding: 5,
    color: LightTheme.colors.text,
  },
});

import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { LightTheme } from "../../theme";
import { DummyData } from "../../constants/DummyData";
import { GapView, MyBanner } from "../../components";
import { CloseDropDown, OpenDropDown } from "../../assets";

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

const Stories = () => {
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  // Type the handler to ensure storyTitle is a string
  const epiPressHandler = (storyTitle: string) => {
    setExpandedStory(expandedStory === storyTitle ? null : storyTitle);
  };

  // Map DummyData to ensure typing
  const fictionalStories: Story[] = DummyData.fictionalStories.map(
    (fictionalStory: Story) => ({
      title: fictionalStory.title,
      genre: fictionalStory.genre,
      featureImage: fictionalStory.featureImage,
      episodes: fictionalStory.episodes,
    })
  );

  // Render function with proper typing
  const fictionalStoriesRender = ({ item }: { item: Story }) => {
    return (
      <>
        <View style={styles.storyContainer}>
          <MyBanner
            title2={item.title}
            genre={item.genre}
            source={{ uri: item.featureImage }} // Load the image from the URL
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
              <View key={index} style={styles.episodeItem}>
                <Text style={styles.episodeText}>{episode.title}</Text>
              </View>
            ))}
          </View>
        )}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <GapView length={10} />
      <FlatList
        data={fictionalStories}
        renderItem={fictionalStoriesRender}
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

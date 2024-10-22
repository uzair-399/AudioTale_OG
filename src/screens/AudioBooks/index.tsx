import { View, StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import { LightTheme } from "../../theme";
import { DummyData } from "../../constants/DummyData";
import { GapView, MyBanner } from "../../components";

const AudioBooks = () => {
  const audioBooks = DummyData.audiobooks.map((audioBook) => {
    return {
      title: audioBook.title,
      genre: audioBook.genre,
      featureImage: audioBook.featureImage,
    };
  });

  const audioBooksRender = ({ item }) => {
    return (
      <MyBanner
        title2={item.title}
        genre={item.genre}
        source={{ uri: item.featureImage }} // Load the image from the URL
        width={340}
        height={250}
        style={{ marginVertical: 10 }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <GapView length={10} />
      <FlatList
        data={audioBooks} // Pass the mapped data here
        renderItem={audioBooksRender} // Render each item
        keyExtractor={(item) => item.title} // Use a unique key for each item
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
});

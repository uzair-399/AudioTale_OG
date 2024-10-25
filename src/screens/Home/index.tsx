import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { GapView, MyBanner, MyText } from "../../components";
import { LightTheme } from "../../theme"; // Import the theme for colors
import { db } from "../../../firebaseconfig";
import { ref, onValue } from "firebase/database";

const Home = ({ navigation }) => {
  const [audiobooks, setAudiobooks] = useState([]);
  const [fictionalStories, setFictionalStories] = useState([]);

  useEffect(() => {
    // Fetch audiobooks data
    const audiobooksRef = ref(db, "/audiobooks");
    onValue(audiobooksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setAudiobooks(Object.values(data));
      }
    });

    // Fetch fictional stories data
    const fictionalStoriesRef = ref(db, "/fictional-stories");
    onValue(fictionalStoriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFictionalStories(Object.values(data));
      }
    });
  }, []);

  // Apply genre filter to fetched data
  const mysteryCat = audiobooks.filter((audio) => audio.genre === "Mystery");
  const horrorCat = fictionalStories.filter(
    (audio) => audio.genre === "Horror"
  );

  const renderMysteryBanner = ({ item }) => {
    // console.log("this is item :", item);
    return (
      <MyBanner
        title2={item.title} // Display the title of the audiobook
        source={{ uri: item.featureImage }} // Load the image from the URL
        height={220}
        width={160}
        style={{ marginHorizontal: 10 }}
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
  };
  const renderHorrorBanner = ({ item }) => {
    // console.log("this is horror item :", item);
    return (
      <MyBanner
        title2={item.title} // Display the title of the audiobook
        source={{ uri: item.featureImage }} // Load the image from the URL
        height={220}
        width={160}
        style={{ marginHorizontal: 10 }}
        onPress={() => navigation.navigate("Stories")}
      />
    );
  };

  // console.log("This is whole mystery: ", mysteryCat);
  // console.log("This is whole Horror category: ", horrorCat);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <MyText
          size={26}
          textColor={LightTheme.colors.text}
          weight="700"
          style={{ margin: 10, marginBottom: 20 }}
        >
          Community
        </MyText>
        <View style={styles.mainBannerContainer}>
          <MyBanner
            height={280}
            width={170}
            title="AudioBooks"
            source={require("./../../assets/Classic.jpg")}
            onPress={() => navigation.navigate("AudioBooks")}
          />

          <MyBanner
            height={280}
            width={170}
            title="Community Creation"
            source={require("./../../assets/CommunityCreations.jpg")}
            onPress={() => navigation.navigate("Stories")}
          />
        </View>
        <GapView length={20} />

        <MyText
          size={26}
          textColor={LightTheme.colors.text}
          weight="700"
          style={{ margin: 10, marginBottom: 20 }}
        >
          Classic Mysteries
        </MyText>
        <View style={styles.horizontalContainer}>
          <FlatList
            data={mysteryCat} // Data from the filtered Mystery category
            renderItem={renderMysteryBanner} // Function to render each item
            keyExtractor={(item) => item.title} // Unique key for each item
            horizontal // Enable horizontal scrolling
            showsHorizontalScrollIndicator={false} // Hide the horizontal scroll indicator
            contentContainerStyle={styles.horizontalScrollView}
          />
        </View>
        <GapView length={20} />
        <MyText
          size={26}
          textColor={LightTheme.colors.text}
          weight="700"
          style={{ margin: 10, marginBottom: 20 }}
        >
          Horror Tales
        </MyText>
        <View style={styles.horizontalContainer}>
          <FlatList
            data={horrorCat} // Data from the filtered Mystery category
            renderItem={renderHorrorBanner} // Function to render each item
            keyExtractor={(item) => item.title} // Unique key for each item
            horizontal // Enable horizontal scrolling
            showsHorizontalScrollIndicator={false} // Hide the horizontal scroll indicator
            contentContainerStyle={styles.horizontalScrollView}
          />
        </View>
        <GapView length={40} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure this View takes up the entire screen
    backgroundColor: LightTheme.colors.background, // Apply background color to the whole screen
  },
  scrollView: {
    flexGrow: 1, // Ensure ScrollView expands to cover the entire screen height
    alignItems: "center", // Optional: centers content horizontally
  },
  mainBannerContainer: {
    flexDirection: "row",
  },
  mainBannerPressableContainer: {
    margin: 10,
  },
  horizontalContainer: {
    flexDirection: "row",
    // height: 250, // Set a height for the horizontal container to prevent clipping
  },
  horizontalScrollView: {
    flexDirection: "row",
    // alignItems: "center", // Optional: centers the items vertically
  },
});

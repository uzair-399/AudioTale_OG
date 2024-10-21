import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { GapView, MyBanner, MyText } from "../../components";
import { LightTheme } from "../../theme"; // Import the theme for colors

const Home = () => {
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
          />
          <MyBanner
            height={280}
            width={170}
            title="Community Creation"
            source={require("./../../assets/CommunityCreations.jpg")}
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
          <ScrollView
            horizontal // Enable horizontal scrolling
            contentContainerStyle={styles.horizontalScrollView}
            showsHorizontalScrollIndicator={false} // Optional: hide the scroll bar
          >
            <MyBanner
              source={require("./../../assets/CommunityCreations.jpg")}
              title2="The Girl On The Train"
              height={220}
              width={150}
              style={{ marginHorizontal: 10 }}
            />
            <MyBanner
              source={require("./../../assets/CommunityCreations.jpg")}
              height={220}
              title2="Adventures of Sherlock Holmes"
              width={150}
              style={{ marginHorizontal: 10 }}
            />
            <MyBanner
              source={require("./../../assets/CommunityCreations.jpg")}
              height={220}
              width={150}
              title2="The Hounds of Baskervilles"
              style={{ marginHorizontal: 10 }}
            />
          </ScrollView>
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
          <ScrollView
            horizontal // Enable horizontal scrolling
            contentContainerStyle={styles.horizontalScrollView}
            showsHorizontalScrollIndicator={false} // Optional: hide the scroll bar
          >
            <MyBanner
              source={require("./../../assets/CommunityCreations.jpg")}
              title2="The Girl On The Train"
              height={220}
              width={150}
              style={{ marginHorizontal: 10 }}
            />
            <MyBanner
              source={require("./../../assets/CommunityCreations.jpg")}
              height={220}
              title2="Adventures of Sherlock Holmes"
              width={150}
              style={{ marginHorizontal: 10 }}
            />
            <MyBanner
              source={require("./../../assets/CommunityCreations.jpg")}
              height={220}
              width={150}
              title2="The Hounds of Baskervilles"
              style={{ marginHorizontal: 10 }}
            />
          </ScrollView>
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
  horizontalContainer: {
    flexDirection: "row",
    // height: 250, // Set a height for the horizontal container to prevent clipping
  },
  horizontalScrollView: {
    flexDirection: "row",
    alignItems: "center", // Optional: centers the items vertically
  },
});

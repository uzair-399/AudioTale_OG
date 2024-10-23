import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider"; // Updated import
import { LightTheme } from "../../theme";
import { Pause, Play } from "../../assets";

const Music = ({
  route,
}: {
  route: {
    params: {
      genre: string;
      title: string;
      featureImage: string;
      audioUrl: string;
    };
  };
}) => {
  const { genre, title, featureImage, audioUrl } = route.params;

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0); // Current position in seconds
  const [duration, setDuration] = useState<number>(0); // Total duration in seconds

  const loadAudio = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
    setSound(sound);

    // Listen to updates for position and duration
    sound.setOnPlaybackStatusUpdate((status) => {
      setPosition(status.positionMillis / 1000); // Convert to seconds
      setDuration(status.durationMillis / 1000); // Convert to seconds
    });
  };

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600); // Calculate total hours
    const minutes = Math.floor((totalSeconds % 3600) / 60); // Calculate remaining minutes
    const seconds = Math.floor(totalSeconds % 60); // Calculate remaining seconds

    // Pad minutes and seconds with leading zeros if needed
    const formattedHours = hours > 0 ? `${hours}:` : "";
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedHours}${formattedMinutes}:${formattedSeconds}`; // Return formatted string
  };

  useEffect(() => {
    loadAudio();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [audioUrl]);

  const handlePlayback = async () => {
    if (isPlaying) {
      await sound?.pauseAsync();
    } else {
      await sound?.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = async (value: number) => {
    // Seek to the position specified by the slider
    await sound?.setPositionAsync(value * 1000); // Convert to milliseconds
    setPosition(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: featureImage }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.genre}>{genre}</Text>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onValueChange={handleSeek}
        minimumTrackTintColor={LightTheme.colors.primary}
        maximumTrackTintColor={LightTheme.colors.text}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Text style={styles.positionText}>{formatTime(position)}</Text>
        <Text style={styles.positionText}>{formatTime(duration)}</Text>
      </View>
      <Pressable style={styles.button} onPress={handlePlayback}>
        {isPlaying ? (
          <Pause width={70} height={70} />
        ) : (
          <Play width={70} height={70} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightTheme.colors.background,
    alignItems: "center",
  },
  imgContainer: {
    margin: 20,
  },
  image: {
    width: 330,
    height: 370,
    resizeMode: "cover",
    borderRadius: 10,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    color: LightTheme.colors.text,
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10,
  },
  genre: {
    color: LightTheme.colors.text,
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
  },
  button: {
    marginTop: 10,
  },
  slider: {
    width: "100%",
    marginTop: 20,
  },
  positionText: {
    color: LightTheme.colors.text,
    marginTop: 10,
  },
});

export default Music;

import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} resizeMode="contain" />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Find Your Dream Home</Text>
        </View>

        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            Explore the best properties around the world
          </Text>
        </View>

        <View style={{ flex: 1 }} />

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => router.push("/join")}
          >
            <Text style={styles.buttonPrimaryText}>Join Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonGroupSubText}>
          <Text style={{ color: "#fff", fontSize: 14 }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/signin")}>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600" }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ImageBackground>
    </View>
  );
}

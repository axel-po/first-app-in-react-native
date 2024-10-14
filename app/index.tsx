import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center min-h-[85vh] px-4">
            <Image
              className="w-[130px] h-[84px]"
              resizeMode="contain"
              source={images.logo}
            />

            <Image
              source={images.cards}
              className="max-w-[380px] w-full h-[300px]"
              resizeMode="contain"
            />

            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilites with{" "}
                <Text className="text-secondary">Aora</Text>
              </Text>

              <Image
                source={images.path}
                resizeMode="contain"
                className="w-[136x] h-[15px] absolute -bottom-4 -right-20"
              />
            </View>

            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where creativity meets innovation: embark on a journey of
              limitless possibilities with Aora.
            </Text>

            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full mt-7"
            />
          </View>
        </ScrollView>

        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

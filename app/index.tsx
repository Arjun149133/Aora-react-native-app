import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Link, router } from "expo-router";
import { images } from "../constants";
import CustomButton from "@/components/CustomButton";

const index = () => {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className=" w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className=" relative mt-5">
            <Text className=" text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className=" text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 right-20"
              resizeMode="contain"
            />
          </View>

          <Text className=" text-gray-100 text-sm font-pregular mt-7 text-center">
            Where creativity meets innovation. Embrace a journey of limitless
            exploration with Aora.
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
  );
};

export default index;

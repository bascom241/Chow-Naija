import { Link } from 'expo-router';
import React from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';

const Icon = require("../../assets/images/g1qc_lm2p_210608-removebg-preview.png");

const Login = () => {
    return (
        <View className="flex-1 w-full items-center p-5 pb-8 justify-center bg-[#d8f3dc]">

            <View className="flex-1 w-full items-center justify-center">
                <Image source={Icon} className="w-4/5 h-full" resizeMode="contain" />
            </View>

            <View className="flex-1 w-full bg-white flex-col gap-6 shadow-lg p-8 rounded-3xl"
                style={{
                    shadowColor: "#16a34a", // Equivalent to green-600
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                    elevation: 8, // Needed for Android shadow
                }}

            >
                <View>
                    <Text className=" mb-2 text-2xl font-semibold mt-6"
                        style={{ fontFamily: 'PoppinsRegular' }}
                    >Email</Text>
                    <TextInput
                        className="w-full px-3 text-black py-6 mb-4 bg-white rounded-lg shadow-lg"
                        placeholder="Email Address"
                        keyboardType="email-address"
                        placeholderTextColor="#9ca3af"
                        style={{
                            fontFamily: 'PoppinsRegular',
                            shadowColor: "#16a34a",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.3,
                            shadowRadius: 6,
                            elevation: 8, // Android shadow
                        }}
                    />
                </View>
                <View>
                    <Text className="mb-2 text-2xl font-semibold"
                        style={{ fontFamily: 'PoppinsRegular' }}
                    >Password</Text>
                    <TextInput
                        className="w-full px-3 py-6 text-black bg-white rounded-lg shadow-lg"
                        placeholder="Password"
                        placeholderTextColor="#9ca3af"
                        secureTextEntry
                        style={{
                            fontFamily: 'PoppinsRegular',
                            shadowColor: "#16a34a",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.3,
                            shadowRadius: 6,
                            elevation: 8, // Android shadow
                        }}
                    />
                </View>

                <TouchableOpacity className="w-ful border-[0px] border-transparent p-4 bg-[#49b059] rounded-lg items-center">
                    <Text className="text-white text-lg font-semibold">Log in</Text>
                </TouchableOpacity>


                <Text>
                    Dont have an account?<Link href="/(auth)/register">
                    <Text> Sign up</Text>
                    </Link>

                </Text>
            </View>

        </View>
    );
};

export default Login;

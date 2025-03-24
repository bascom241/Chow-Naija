import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Register = () => {
    return (
        <View className="flex-1  w-full items-center p-5 pb-8 justify-center bg-[#d8f3dc]">
            <View className=" h-2/3 w-full bg-white flex-col gap-6 shadow-lg p-8 rounded-3xl"
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
                    >Username</Text>
                    <TextInput
                        className=" relative w-full px-3 text-black py-6 mb-4 bg-white rounded-lg shadow-lg"
                        placeholder="Username"
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
                    <MaterialCommunityIcons name='menu' color="#0d5a18" size={20} className='absolute top-24 left-15 px-2'/>
                </View>

                <View>
                    <Text className=" mb-2 text-2xl font-semibold mt-6"
                        style={{ fontFamily: 'PoppinsRegular' }}
                    >Email</Text>
                    <TextInput
                        className="relative w-full px-3 text-black py-6 mb-4 bg-white rounded-lg shadow-lg"
                        placeholder="Email Address"

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
                    <MaterialCommunityIcons name='inbox' color="#0d5a18" size={20} className='absolute top-24 left-15 px-2'/>
                </View>
                <View>
                    <Text className="mb-2 text-2xl font-semibold"
                        style={{ fontFamily: 'PoppinsRegular' }}
                    >Password</Text>
                    <TextInput
                        className="relative w-full px-3 py-6 text-black bg-white rounded-lg shadow-lg"
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
                    <MaterialCommunityIcons name='lock' color="#0d5a18" size={20} className='absolute top-24 left-15 px-2'/>
                </View>

                <TouchableOpacity className="w-ful border-[0px] border-transparent p-4 bg-[#49b059] rounded-lg items-center">
                    <Text className="text-white text-lg font-semibold">Register</Text>
                </TouchableOpacity>


                <Text>
                    Aready have an account?<Link href="/(auth)/login">
                        <Text> Sign up</Text>
                    </Link>

                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Register;

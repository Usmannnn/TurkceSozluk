import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AppNavigationContainer from './src/navigations/'
export default function App() {
	return (
			<SafeAreaView style={styles.container}>
				<StatusBar style="auto" />
				<AppNavigationContainer />
			</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 33
	},
});

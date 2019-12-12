import React from 'react';
import { Button, Image, View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromRight } from 'react-navigation-transitions';

const metaData = require('./metadata');
const styles = require('./styles');

// load the dictionary from a static json file created by ichō desktop software
let dictionary = require('./dictionary.json');

// dictionary file lacks keys. this needs to change. for now we generate and assign here.
function b(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)}
for (let i in dictionary) {dictionary[i].uid = b();}

// individual items in the word list on the home screen
function ListItem({ title }) {
	return (
		<View style={styles.ListRow}>
			<Text style={styles.ListItem}>{title}</Text>
		</View>
	);
}

class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};
		return {
			headerTitle: "Home",
			headerRight: (
				<Button
					title="about"
					onPress={() => {
						navigation.navigate('Details', {
							otherParam: 'anything you want here',
						});
					}}
				/>
			),
		};
	};

	UNSAFE_componentWillMount() {
		this.props.navigation.setParams({ increaseCount: this._increaseCount });
	}
	render() {
		return (
			<SafeAreaView style={styles.Container}>
				<FlatList
					data={dictionary}
					renderItem={({ item }) => <ListItem title={item.lexeme} />}
					keyExtractor={item => item.uid}
				/>
			</SafeAreaView>
		);
	}
}

class DetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Details'
	};
	render() {
		const { navigation } = this.props;
		const otherParam = navigation.getParam('otherParam', 'some default value');

		return (
			<View style={styles.AboutPage}>
				<View>
					<Text style={styles.AboutTextBold}>{metaData.name}</Text>
					<Text style={styles.AboutText}>version {metaData.version}</Text>
				</View>
				<View>
					<Text style={styles.AboutTextBold}>Data curation</Text>
					<Text style={styles.AboutText}>{metaData.curator}</Text>
				</View>
				<View>
					<Text style={styles.AboutTextBold}>Project supervision</Text>
					<Text style={styles.AboutText}>{metaData.supervisor}</Text>
				</View>
				<View>
					<Text style={styles.AboutTextBold}>Application development</Text>
					<Text style={styles.AboutText}>{metaData.developer}</Text>
					<Text style={styles.AboutText}>{metaData.thanks}</Text>
				</View>
				<View style={{flex:1}}>
					<Text> </Text>
				</View>
				<View>
					<Text style={styles.AboutTextBold}>Published by</Text>
					<Text style={styles.AboutText}>{metaData.publisher}</Text>
					<Text style={styles.AboutText}>{metaData.date}</Text>
				</View>
			</View>
		);
	}
}

const RootStack = createStackNavigator(
	{
		Home: HomeScreen,
		Details: DetailsScreen,
	},
	{
		initialRouteName: 'Home',
		transitionConfig: () => fromRight(),
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#6B3851',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
	}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}

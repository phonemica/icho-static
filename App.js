import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromRight } from 'react-navigation-transitions';

const metaData = require('./metadata');
const styles = require('./styles');

class HomeScreen extends React.Component {
	static navigationOptions = {
      title: 'Home'
    };
  render() {
    return (
      <View style={styles.Container}>
        <Text>{metaData.name}</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
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
    /* The header config from HomeScreen is now here */
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

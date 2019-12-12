import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {createAppContainer, StackNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fromRight} from 'react-navigation-transitions';

const metaData = require('./metadata');
const styles = require('./styles');

// load the dictionary from a static json file created by ichō desktop software
let dictionary = require('./dictionary.json');

// dictionary file lacks keys. this needs to change. for now we generate and assign here.
function b(a) {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
}
for (let i in dictionary) {
  dictionary[i].uid = b();
  // while we're here, let's make sure the English isn't undefined.
  if (typeof dictionary[i].definition == 'undefined') {
    dictionary[i].definition = {};
    dictionary[i].definition.english = '';
  }
}

// home screen is a list view of all entries
class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: 'Home',
      headerRight: (
        <TouchableOpacity
          style={{paddingRight: 12}}
          onPress={() => {
            navigation.navigate('About', {otherParam: '…'});
          }}>
          <Text style={styles.AboutTextBold}>About</Text>
        </TouchableOpacity>
      ),
    };
  };
  toEntry = item => {
    this.props.navigation.navigate('Entry', {
      item: item,
      itemtitle: item.lexeme,
    });
  };
  render() {
    return (
      <ImageBackground
        source={require('./bg.jpg')}
        style={{
          marginTop: -56, // set by Android
          flex: 1,
          paddingTop: 48,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SafeAreaView style={styles.HomeContainer}>
          <FlatList
            data={dictionary}
            keyExtractor={item => item.uid}
            renderItem={({item}) => (
              <View style={styles.ListRowContainer}>
                <TouchableOpacity
                  style={[styles.ListRow]}
                  onPress={() => this.toEntry(item)}>
                  <Text style={[styles.ListItemLexeme]}>{item.lexeme}</Text>
                  <Text numberOfLines={1} style={[styles.ListItem]}>
                    {item.definition.english}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

// the screen for individual entries. right now just showing the object as a string
class EntryScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '', //navigation.getParam('itemtitle'),
    };
  };
  render() {
    const {navigation} = this.props;
    const entry = navigation.getParam('item', 'NO-ID');
    return (
      <ImageBackground
        source={require('./bg.jpg')}
        style={{
          marginTop: -56, // set by Android
          flex: 1,
          paddingTop: 48,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.Container}>
          <Text style={styles.EntryHeader}>{entry.lexeme}</Text>
          <Text style={styles.EntryText}>{entry.phonemic}</Text>
          <Text style={styles.EntrySection}>{entry.pos}</Text>
          <Text style={styles.EntryText}>{entry.definition.english}</Text>
          <Text style={styles.EntrySection}>example</Text>
          <Text style={styles.EntryText}>{JSON.stringify(entry.example)}</Text>
        </View>
      </ImageBackground>
    );
  }
}

// the about screen. data is stored in metadata.js
class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    const {navigation} = this.props;
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <ImageBackground
        source={require('./bg.jpg')}
        style={{
          marginTop: -56,
          flex: 1,
          paddingTop: 48,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
          <View style={{flex: 1}}>
            <Text> </Text>
          </View>
          <View>
            <Text style={styles.AboutTextBold}>Published by</Text>
            <Text style={styles.AboutText}>{metaData.publisher}</Text>
            <Text style={styles.AboutText}>{metaData.date}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        headerStyle: {
          backgroundColor: 'transparent',
        },
      },
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        title: 'About',
        headerStyle: {
          backgroundColor: 'transparent',
        },
      },
    },
    Entry: {
      screen: EntryScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
    transitionConfig: () => fromRight(),
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0B1C32',
      },
      headerTintColor: '#FEFEFE',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

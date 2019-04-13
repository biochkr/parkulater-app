import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';


import { withAuthenticator, S3Album } from 'aws-amplify-react-native';

import Amplify, { Analytics, Storage } from 'aws-amplify';

import aws_exports from './aws-exports';


Amplify.configure(aws_exports);
Storage.configure({ level: 'private' });



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


class App extends React.Component {
  state = {
    isLoadingComplete: false
  };


  uploadFile = (evt) => {
      const file = evt.target.files[0];
      const name = file.name;
  
      Storage.put(name, file).then(() => {
        this.setState({ file: name });
      })
    }
  
  componentDidMount() {
    Analytics.record('Amplify_CLI');
  }
    
  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
            <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <S3Album level="private" path='' />
              <AppNavigator />
            </View>
      );
    }
  }
  
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}


export default withAuthenticator(App, { includeGreetings: true });
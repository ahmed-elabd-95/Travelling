import React from 'react';
import {ImageBackground} from 'react-native';

export class Splash extends React.Component {
  // const [fix, setFix] = useState('ahmed');
  // const [loading, setLoading] = useState(false);
  componentDidMount(){
    setTimeout(() => {this.props.navigation.navigate('PhoneVerfied');
   }, 2000);}
  render(){
    return (
      <ImageBackground
      source={require('../images/Splash.png')}
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}
      />
      /* {loading && <ActivityIndicator size="large" color="green" />}
        <Button title="press" onPress={() => setLoading(true)} /> */
    );
  }
  
};

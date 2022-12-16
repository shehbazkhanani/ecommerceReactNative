import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native';
import Navigation from './config/navigator';
import TabNavigation from './config/tabnivigation';

function App() {
  return (
    <>
    <NavigationContainer>
      <Navigation /> 
    </NavigationContainer>
      
    </>
  );
}

export default App;

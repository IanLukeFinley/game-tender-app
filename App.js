import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SetupScreen from './components/SetupScreen';
import StatusBarSpacer from './components/StatusBarSpacer';
// import RatingScreen from './RatingScreen';
// import Logo from './Logo';
// import SortFunction from '../utils/SortFunction';
// import reformatBGGData from '../utils/reformatBGGData';

// const AppContainer = styled.div`
// display: grid;
// grid-template-rows: auto 1fr;
// `

function App() {

  //States and Initial Variables

  let initialFormState = {
    playername: "",
    playercount: "2",
    playtime: "99",
    error: '',
    gamesReturned: "1500"
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const [presentList, setPresentList] = useState([]);


  //Handle functions

  const handleChange = ({ target }) => {
    // const value = target.value;
    // setFormData({
    //   ...formData,
    //   [target.name]: value.trim(),
    // });
  };

  //Returns:

  if (presentList.length >= 1) {
    return (
      <Text>Rating Screen will go here</Text>
      //<RatingScreen gamesList={presentList} formData={formData} />
    )
  } else {
    return (
      <View>
        <StatusBarSpacer />
        <SetupScreen formData={formData} />
      </View>
    )
  }
}

export default App;

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Logo from './Logo';
import { Picker } from '@react-native-picker/picker';
import XMLParser from 'react-xml-parser';
import SortFunction from '../utils/SortFunction';
import reformatBGGData from '../utils/reformatBGGData';
// import styled from 'styled-components';
// import './radio-options.css';
// import LoadingDots from './LoadingDots';

export default function SetupScreen({ formData }) {
    const [selectedPlayerName, setSelectedPlayerName] = useState();
    const [selectedPlayerCount, setSelectedPlayerCount] = useState(2);
    const [selectedPlaytime, setSelectedPlaytime] = useState(99);
    const [waitingForData, setWaitingForData] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const handleSubmit = () => {
        console.log('Submitting form data');
        console.log({ selectedPlayerName, selectedPlayerCount, selectedPlaytime });

        //remove any previous errors
        setErrorMessage();

        if (!selectedPlayerName) {
            setErrorMessage('Please enter your BoardGameGeek username.');
            return;
        }

        if (waitingForData) {
            return;
        }
        setWaitingForData(true);

        //Watch for response code and keep trying fetch while the backend prepares data - see https://boardgamegeek.com/wiki/page/BGG_XML_API
        var interval = setInterval(function () {
            fetch(`https://boardgamegeek.com/xmlapi2/collection?username=${selectedPlayerName}&own=1&excludesubtype=boardgameexpansion`)
                .then(response => {
                    if (response.ok) {
                        if (response.status === 202) {
                            return Promise.resolve();
                        }
                        clearInterval(interval);
                        return response.text();
                    }
                    throw new Error('Unable to contact BoardGameGeek');
                })
                .then(data => {
                    if (data) {
                        const collectionData = new XMLParser().parseFromString(data);
                        //console.log(collectionData);
                        const gameIds = collectionData?.children.map(game => game.attributes.objectid);
                        //console.log(gameIds);
                        fetch(`https://boardgamegeek.com/xmlapi2/thing?id=${gameIds.join(',')}`)
                            .then(response => response.text())
                            .then(data => {
                                console.log('game data!');
                                const bggData = new XMLParser().parseFromString(data);
                                console.log(bggData)
                                if (bggData.children.length === 0) {
                                    setErrorMessage('No games found in collection');
                                }
                                const formattedGames = SortFunction(formData, reformatBGGData(bggData));
                                if (!formattedGames.length) {
                                    setErrorMessage('No games in collection match specified filters');
                                    setWaitingForData(false);
                                    return;
                                }
                                console.log(formattedGames)
                                setPresentList(formattedGames);
                                setWaitingForData(false);
                            });
                    }
                })
                .catch(error => {
                    setErrorMessage('BoardGameGeek user not found (or unable to contact BoardGameGeek)');
                    setWaitingForData(false);
                    clearInterval(interval);
                })
        }, 2000);
    }

    return (
        <View style={styles.testContainer}>
            <Logo name="GameTender" />
            <View >
                <Text style={styles.helperText} onSubmit={handleSubmit}>
                    Can't pick a game? No worries - we couldn't either. Enter your BoardGameGeek username and answer some questions about what you're looking for. Then, swipe to vote on what games sound fun. Once everyone has voted, you can see which games your party is most excited about!
                </Text>
            </View>
            <View style={styles.setupCard}>
                <View style={styles.filter}>
                    <Text style={styles.label}>BGG Username</Text>
                    <TextInput
                        style={styles.input}
                        id="playername"
                        name="playername"
                        placeholder='Enter your BGG User Name'
                        onChangeText={setSelectedPlayerName}
                    //onBlur={handleBlur('title')}
                    />
                </View>
                <View style={styles.filter}>
                    <Text style={styles.label}>Players</Text>
                    <Picker
                        selectedValue={selectedPlayerCount}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedPlayerCount(itemValue)
                        }>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8+" value="8" />
                    </Picker>
                </View>
                <View style={styles.filter}>
                    <Text style={styles.label}>Game Length</Text>
                    <Picker
                        selectedValue={selectedPlaytime}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedPlaytime(itemValue)
                        }>
                        <Picker.Item label="Play time doesn't matter" value="99" />
                        <Picker.Item label="About 30 minutes" value="30" />
                        <Picker.Item label="About an hour" value="60" />
                        <Picker.Item label="About two hours" value="120" />
                        <Picker.Item label="Over two hours" value="240" />
                    </Picker>
                </View>
                <Text style={styles.error}>{errorMessage}</Text>
                <Button onPress={handleSubmit} title='START' />
                {/* {waitingForData ? <LoadingDots /> : 'START'} */}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    setupForm: {
        padding: 2,
        flex: 1 //Isolated display issue to this property.  Why would Flex make it bonkers?
    },
    testContainer: {
        padding: 20
    },
    helperText: {
        marginVertical: 8,
        lineHeight: 20
    },
    setupCard: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    filter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 40
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    error: {
        marginTop: 20,
        color: '#9e0000',
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    }
})

// const Input = styled.input`
//     font-size: 20px;
//     padding: 12px 16px;
//     width: 100%;
// `


// const DropDown = styled.select`
//     font-size: 26px;
//     padding: 12px 16px;
// `
// const Button = styled.button`
//     background-color: #08AEEA;
//     background-image: linear-gradient(342deg, #08AEEA 0%, #2AF598 100%);    
//     border: none;
//     color: white;
//     border-radius: 8px;
//     padding: 10px 0;
//     font-size: 20px;
//     font-weight: bold;
//     letter-spacing: 2px;
//     margin: 10px 0 10px 0;
//     box-shadow: 0 2px 0px 1px hsl(194deg 77% 37%);
//     width: 100%;
//     min-height: 63px;
//     &:active{
//       background-image: linear-gradient(342deg,#08AEEA 0%,#1f7d52 100%);
//       box-shadow: inset 0 2px 0px 1px hsl(194deg 77% 37%);
//     }
// `
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Logo from './Logo';
import { Picker } from '@react-native-picker/picker';
// import styled from 'styled-components';
// import './radio-options.css';
// import LoadingDots from './LoadingDots';

export default function SetupScreen({ formData, handleChange, handleSubmit, waitingForData }) {
    const [selectedPlayerCount, setSelectedPlayerCount] = useState();
    const [selectedPlaytime, setSelectedPlaytime] = useState();

    return (
        <View style={styles.setupForm}>
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
                        onChangeText={handleChange}
                        //onBlur={handleBlur('title')}
                        value={formData.playername}
                    />
                </View>
                <View style={styles.filter}>
                    <Text style={styles.label}>Players</Text>
                    {/* <DropDown  May need a library for this
                    id="playercount"
                    name="playercount"
                    onChange={handleChange}
                    value={formData.playercount}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8+</option>
                </DropDown> */}
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
                    {/* <DropDown Ditto
                    id="playtime"
                    name="playtime"
                    onChange={handleChange}
                    value={formData.playtime}>   
                    <option value="99">Play time doesn't matter</option>
                    <option value="30">About 30 mintutes</option>
                    <option value="60">About an hour</option>
                    <option value="120">About two hours</option>
                    <option value="240">Over two hours</option>
                </DropDown> */}
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
                <Text style={styles.error}>{formData.error}</Text>
                <Button onClick={() => handleSubmit} title='START' />
                {/* {waitingForData ? <LoadingDots /> : 'START'} */}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    setupForm: {
        padding: 20,
        flex: 1
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
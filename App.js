import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [guesses, setGuesses] = useState(0);
  const [guess, setGuess] = useState('');
  const [lastGuess, setLastGuess] = useState('');
  const [target, setTarget] = useState(Math.floor(Math.random() * 100)+1)

  const getGameStatusMessage = () => {
    if (guesses === 0){
      return "Guess a number bewteen 1-100";
    } else if (lastGuess < target){
      return "Your guess " + lastGuess + " is too low"
    } else if (lastGuess > target){
      return "Your guess " + lastGuess + " is too high"
    } else if (lastGuess == target){
      Alert.alert('You guessed the number in ' + guesses + ' guesses');
      return "Your guess " + lastGuess + " is correct!"
    }
  }

  const quessButtonPressed = () => {
    setLastGuess(guess);
    setGuesses(guesses + 1);
  }

  return (
    <View style={styles.container}>
      <Text>{getGameStatusMessage()}</Text>
      <TextInput 
        style={{width: 50, borderColor:'gray', borderWidth:1 }}
        onChangeText={text => setGuess(text)}
        value={guess}
        keyboardType={'number-pad'}
        margin={20}
      />
      <Button onPress={quessButtonPressed} title="Make Guess"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

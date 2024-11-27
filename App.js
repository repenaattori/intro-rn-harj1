import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [x, setX] = useState(0);
  return (
    <View style={styles.container}>
      {/* <Text style={{backgroundColor: 'yellow'}}>{x}</Text> */}
      <Button title='ok' onPress={()=>setX(prev=>prev+1)}/>
      <StatusBar style="auto" />
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

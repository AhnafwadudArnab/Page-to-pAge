import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ResultScreen() {
  const { name, email, age } = useLocalSearchParams();

  return (
    <View style={{ padding: 70,alignContent:'center' }}>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
}

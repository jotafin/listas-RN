import { SafeAreaView, StyleSheet, StatusBar, Text, View, FlatList } from 'react-native';
import { UserItem } from './components/user-item';

type User = {
  id: number;
  name: string;
  idade: number;
}
export default function App() {
  const list: User[] = [
    {id: 1, name: "joao", idade: 20},
    {id: 2, name: "Maria", idade: 39},
    {id: 3, name: "Lucia", idade: 40},
    {id: 4, name: "Ronaldo", idade: 90},
  ]

  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        data={list}
        renderItem={({item}) => (<UserItem id={item.id} name={item.name} idade={item.idade}/>)}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 502,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

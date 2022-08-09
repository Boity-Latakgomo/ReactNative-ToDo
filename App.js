import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { Entypo, MaterialIcons  } from '@expo/vector-icons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    todo: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    todo: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    todo: 'Third Item',
  },
];

export default function App() {

  const renderItem = ({ item }) => {
    
    return <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{item.todo}</Text>
          <View style={styles.editDeleteView}>
          <Entypo style={styles.actionButton} name="edit" size={24} color="blue" />
          <MaterialIcons style={styles.actionButton} name="delete" size={24} color="blue" />
          </View>
        </View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.addToDoView}>
        <TextInput style={styles.textInput}/>
        <View style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </View>
      </View>
      <View style={styles.listView}>


      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />

        

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 8,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
  }, textInput:{ 
      padding: 4, 
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      width: "80%",
      alignSelf: "flex-start", 
      marginTop: 16,
      backgroundColor: "lightblue"
        }, addToDoView:{
          width: "100%",
          flexDirection: "row"
        },
        addButton: 
         {
          marginTop: 16,
          marginHorizontal: 8,
          backgroundColor: "blue",
          height: 40,
          borderRadius: 10,
          width: 60,
          justifyContent: "center",
          alignItems: "center"
         }, buttonText:{
          color: "white"
         }, listView:{
          flex: 1,
          marginTop: 20,
         }, listItemView: {
          flexDirection: "row",
          height: 50,
          borderRadius: 10,
          backgroundColor: "pink",
          margin: 8,
          padding: 8,
          alignItems: "center",
          justifyContent: "space-between"
         }, listItemText:{
          fontWeight: "bold",
          fontSize: 16
         }, editDeleteView:
         {
          flexDirection: "row",
         }, actionButton:{
          marginHorizontal: 8
         }
});

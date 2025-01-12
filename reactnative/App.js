import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button,Alert,Modal,Pressable } from 'react-native';
import Display from './component/displayRest';
import CameraScreen from './component/cameraAccess';

const url = "http://3.17.216.66:4000/restaurant"
export default function App() {

  const [count,setCount] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);
  const [rest,setRest] = useState()

  const updateCount = () => {
    setCount(count+1)
  }

  useEffect(() => {
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
      setRest(data)
    })
  },[])


  return (
    <View style={styles.container}>
      <Text>React Native app</Text>
      <Button 
      onPress={()=>{setCount(count+1)}}
      style={styles.button}
      title="Counter"/>
      <Text>{count}</Text>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
        <CameraScreen/>
        {/* <Display restList={rest}/> */}
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
  button:{
    height:20,
    backgroundColor:'blue',
    color:'white',
    width:30,
    borderRadius:20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message'

export default function App() {

  const showToastSuccess = () => {
    Toast.show({
      type: "success", // tipo da mensagem
      text1: "Toast Message Success", // titulo
      text2: "This is the secondary text", //descrição
      autoHide: true, // ocultar automaticamente ou não
      visibilityTime: 2500, // tempo de exibição do toasty
      position: 'top', // de onde a mensagem vai aparecer
    })
  }

  const showToastError = () => {
    Toast.show({
      type: "error", // tipo da mensagem
      text1: "Toast Message Error", // titulo
      text2: "This is the secondary text", //descrição
      autoHide: true, // ocultar automaticamente ou não
      visibilityTime: 2500, // tempo de exibição do toasty
      position: 'top', // de onde a mensagem vai aparecer
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Toasty Message</Text>

      <View>
        <TouchableOpacity onPress={showToastSuccess} style={styles.button}>
          <Text style={styles.textButton}>Sucess Message</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={showToastError} style={styles.button}>
          <Text style={styles.textButton}>Error Message</Text>
        </TouchableOpacity>

      </View>
      
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },

  title: {
    fontWeight: "bold",
    fontSize: 40,

    textAlign: "center",

    marginTop: 100,
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 300,
    height: 50,

    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,

    marginBottom: 15
  },

  textButton:{
    fontWeight: "bold",
    fontSize: 16
  }
});

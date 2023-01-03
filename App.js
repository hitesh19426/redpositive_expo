import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import MyButton from "./components/btn";
import MyTextField from "./components/field";


export default function App() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [mailError, setMailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const checkEmptyValue = (value, setValue) => {
    if (value === "") {
      setValue("This value can't be empty.");
      return true;
    }

    setValue(null);
    return false;
  };

  const handleSubmit = async function () {
    // console.log("Fields: ");
    // console.log(name, mobile, mail, message);
    
    var check1 = checkEmptyValue(name, setNameError);
    var check2 = checkEmptyValue(mobile, setMobileError);
    var check3 = checkEmptyValue(message, setMessageError);
    var check4 = checkEmptyValue(mail, setMailError);
    
    // console.log("Errors: ");
    // console.log(nameError, mobileError, messageError, mailError);

    if (check1 || check2 || check3 || check4) {
      console.log("the form is not right. Please check it.");
      return;
    }

    console.log('sending mail');
    
    try {
      const res = await fetch('http://192.168.1.44:3000/test', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: name, mobile: mobile, message: message, mail: mail}),
      });
      
      console.log('Mailed sent successfully');
      // console.log("res = ", res);
    }catch(error){
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.text}> My Contact Form </Text>
      </View>
      <View style={styles.inputView}>
        <MyTextField
          placeholder="Enter Name"
          value={name}
          onChangeText={(value) => setName(value)}
          error={nameError}
        />
        <MyTextField
          placeholder="Enter Mobile Number"
          value={mobile}
          onChangeText={(value) => setMobile(value)}
          error={mobileError}
        />
        <MyTextField
          placeholder="Enter Email"
          value={mail}
          onChangeText={(value) => setMail(value)}
          error={mailError}
        />
        <MyTextField
          placeholder="Enter Message"
          value={message}
          onChangeText={(value) => setMessage(value)}
          error={messageError}
        />

        <View style={styles.btnView}>
          <MyButton style={styles.btn} onPress={handleSubmit} />
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  text: {
    color: "#186b1a",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  headingView: {
    flex: 1,
    marginVertical: 50,
    alignItems: "center",
  },
  inputView: {
    flex: 7,
    alignItems: "center",
    width: "80%",
  },
  btn: {
    marginTop: 80,
    backgroundColor: "#117d14",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnView: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

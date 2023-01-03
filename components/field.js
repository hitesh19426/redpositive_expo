import { TextInput, StyleSheet, Text, View} from "react-native";

export default function MyTextField(props) {
  return (
    <View style={styles.textfieldView}>
        <TextInput {...props} style={styles.inputfield} />
        {!!props.error && (
          <Text style={{ color: "red" }}>{props.error}</Text>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
    textfieldView:{
        width: "100%",
        alignItems: "center",
    },
    inputfield: {
        borderRadius: 10,
        color: '#fff',
        backgroundColor: 'rgb(220, 220,  220)',
        width: '80%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
    },
})

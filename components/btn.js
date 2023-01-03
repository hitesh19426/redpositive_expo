import { StyleSheet, Text, TouchableOpacity} from "react-native";

export default function MyButton(props) {
  return (
    <TouchableOpacity {...props} >
        <Text style={styles.txt}> Submit </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
})


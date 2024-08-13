import { Text, View,StyleSheet } from "react-native";

export default function Auth(){
    return (
        <View style={styles.container}>
            <Text>Login</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        flex : 1,
        display: "flex" ,
        justifyContent: "center",
        alignItems: "center",

    }
})
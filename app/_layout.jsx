import { Stack } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";


export default function _layout(){
    return(
        <Stack
        screenOptions={{
            headerShown: false
        }}
    />
    )
}
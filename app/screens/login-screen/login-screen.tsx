import { observer } from "mobx-react-lite";
import React, { FunctionComponent as Component, useEffect } from "react";
import { View } from "react-native";
import { Text, Screen, TextField } from "../../components";
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';




export const LoginScreen: Component = observer(function LoginScreen(props) {

    useEffect(() => {
        console.tron.log("calling", props)
        // Update the document title using the browser API

    });


    return (
        <Screen style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
            <TextField

            />
            <Text style={{ color: "black" }} >Google Sign in</Text>


        </Screen>
    )
})

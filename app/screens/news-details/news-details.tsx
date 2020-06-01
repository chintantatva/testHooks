import { observer } from "mobx-react-lite";
import React, { FunctionComponent as Component, useEffect } from "react";
import { View, Image } from "react-native";
import { Button, Screen, Text } from "../../components";
import { useStores } from "../../models";




export const NewsDetailsScreen: Component = observer(function NewsDetailsScreen(props) {
    const rootStore = useStores()
    const selectedNews = rootStore.newsStore.selectedNews

    console.tron.log("root", selectedNews)

    return (
        <Screen style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", }} >
            <View  >
                <Text style={{ color: "black", marginBottom: 10, fontWeight: "bold" }} >Title</Text>
                <Text style={{ color: "black" }}>{selectedNews.title}</Text>
            </View>
            <View style={{ marginVertical: 10 }} >
                <Text style={{ color: "black", marginBottom: 10, fontWeight: "bold" }}  >Description</Text>
                <Text style={{ color: "black" }}  >{selectedNews.description}</Text>
            </View>

            <View style={{ marginVertical: 10 }} >
                <Text style={{ color: "black", marginBottom: 10, fontWeight: "bold" }}  >URl</Text>
                <Text style={{ color: "black" }}>{selectedNews.url}</Text>
            </View>

            <View style={{ marginVertical: 10 }} >
                <Text style={{ color: "black", marginBottom: 10, fontWeight: "bold", textAlign: 'left' }}  >Image</Text>

                <Image source={{ uri: selectedNews.urlToImage }} style={{ height: 50, width: 50 }} />
            </View>

        </Screen>
    )
})

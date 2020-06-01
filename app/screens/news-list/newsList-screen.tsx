import { observer } from "mobx-react-lite";
import React, { FunctionComponent as Component, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Text, Screen, TextField, Button } from "../../components";
import { useStores } from "../../models";





export const NewsListScreen: Component = observer(function NewsListScreen(props) {
    const rootStore = useStores()
    useEffect(() => {
        rootStore.newsStore.fetchNews()
        // Update the document title using the browser API
    }, []);

    function NewsHeadLine({ item }) {

        return (
            <Button
                onPress={() => {
                    rootStore.newsStore.updateSelectedNews(item)
                    props.navigation.navigate('newsDetails')
                }}
                style={{ height: 'auto', width: "100%", marginVertical: 10, flexWrap: "nowrap", paddingHorizontal: 10, alignItems: "flex-start" }}>
                <Text style={{ color: "black", textAlign: "left" }}>{item.title}</Text>
            </Button>
        );
    }


    return (
        <Screen style={{ flex: 1, alignItems: "center", justifyContent: "center", }} >
            <FlatList
                data={rootStore.newsStore.newsList}
                renderItem={({ item }) => <NewsHeadLine item={item} />}
                keyExtractor={item => item.id}
            />

        </Screen>
    )
})

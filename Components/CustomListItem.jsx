import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = () => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri:
                        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    Youtube Chat
                </ListItem.Title>
                <ListItemSubtitle
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    This is a test Subtitle
                </ListItemSubtitle>
            </ListItem.Content>
        </ListItem>
    );
};

export default CustomListItem;

const styles = StyleSheet.create({});
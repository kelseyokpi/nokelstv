import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './style';
const Download = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => props.onnavtodashboard()}
                    style={styles.backbtnvw}>
                    <Image
                        style={styles.backbtn}
                        source={require("../../../assets/header-back-btn.png")}
                    />
                </TouchableOpacity>
                <Image
                    style={styles.logoimg}
                    source={require("../../../assets/header-logo.png")}
                />
            </View>
            <View style={styles.dwnldlogovw}>
                <ImageBackground
                    style={styles.dwnldlogo}
                    source={require("../../../assets/download-placeholder-icon.png")}
                />
            </View>
            <View style={{ marginTop: 40, marginBottom: 0 }}>
                <Text style={styles.txt}>
                    Movies and TV shows that you
                </Text>
                <Text style={styles.txt}>
                    download appear here
                </Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent: "flex-end",
            }}>
                <TouchableOpacity style={styles.btncon}>
                    <Text style={styles.btntxt}>
                        Find Something to Download
                </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Download;
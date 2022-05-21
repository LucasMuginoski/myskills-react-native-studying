import React, { Fragment } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity
} from 'react-native';

//SafeAreaView usado no IOS para "tirar o efeito do entalhe dos novos iPhones"
// não export default para exportar mais de 1 elemento
export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome, Lucas!
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your new skill"
                placeholderTextColor={"#555"}
            />
            <TouchableOpacity
                style={styles.button}
                activeOpacity={.7}>
                <Text style={styles.buttonText}>Add your skill</Text>
            </TouchableOpacity>
            <Text style={[styles.title, {marginTop: 20} ]}>
                My Skill
            </Text>

        </View>
    )
}
// No return deve retornar apenas 1 elemento, estamos retornando a view com 2 text dentro
// poderiamos usar o Fragment, para nao usar uma view
// <> é equivalemnt à tag <Fragment>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#FFF',
        fontSize: 18,
        //definindo padding específicos para cada plataforma (iOS 15 px e Android 10 px)
        padding: Platform.IO === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        //padrão flex-box
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})
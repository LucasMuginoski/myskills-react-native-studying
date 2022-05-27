import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    //ScrollView,
    FlatList, //mais performatico para listagens grandes
} from 'react-native';

import { Button } from '../components/button';
import { SkillCard } from '../components/skillCard';

//SafeAreaView usado no IOS para "tirar o efeito do entalhe dos novos iPhones"
// não export default para exportar mais de 1 elemento
export function Home() {
    //princípio da imutabilidade - estado inicial vazio
    // HOOKS - useNomeDoHook em camel case
    const [newSkill, setNewSkill] = useState(''); //estado inicial uma string vazia.  Primeira posição é o estado em si, segunda função que atualiza o estado
    const [mySkills, setMySkill] = useState([]);
    const [greetings, setGreetings] = useState('');


    //funções vem antes do return, handle quando a funcão é disp por uma iteração do usuário
    function handleAddNewSkill() {
        //usar o spread operator (...)  - recup estado anterior e adiciona novo elemento no vetor oldState
        setMySkill(oldState => [...oldState, newSkill]);
        //setMySkill([...mySkills, newSkill]); -> outra forma de fazer a função
    }

    //useEffect - proximo do return
    useEffect( ()=> {
        //função seguida por um array de dependencia
        //a dependencia vincula o useEffect com um estado por exemplo
        const currentHour = new Date().getHours();
        if(currentHour < 12){
            setGreetings('Good Morning!');
        }
        else if(currentHour >= 12 && currentHour < 18){
            setGreetings("Good Afternoon!");
        }
        else{
            setGreetings("Good Evening!");
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome, Lucas!
            </Text>

            <Text style={styles.greetings}>
                { greetings }
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your new skill"
                placeholderTextColor={"#555"}
                onChangeText={setNewSkill}
            />
            <Button onPress={handleAddNewSkill} />
            <Text style={[styles.title, { marginVertical: 20 }]}>
                My Skills:
            </Text>

            <FlatList
                data= {mySkills}
                keyExtractor= {item => item}
                renderItem= {({ item }) => (
                    <SkillCard skill={item} />
                )}    
            />

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
    greetings:{
        color: '#fff'
    }
})
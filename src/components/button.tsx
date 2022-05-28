import React from 'react';
import {
    TouchableOpacity, 
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

//type ButtonProps = TouchableOpacityProps;
// ...rest recebe todas as propriedades do ButtonProps, que por sua vez receb as do TouchbleOpacityProps
// ou podemos criar uma interface
interface ButtonProps extends TouchableOpacityProps {
    title: string
}


export function Button({title, ...rest} : ButtonProps ) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.2}
            {...rest}>
                <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
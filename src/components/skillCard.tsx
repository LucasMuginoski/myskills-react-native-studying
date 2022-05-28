import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface skillCardProps extends TouchableOpacityProps{
    skill: string;
}


export function SkillCard({ skill, ...rest }: skillCardProps) {
    return (
        <TouchableOpacity 
            style={styles.buttonSkill}
            {...rest}
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    textSkill: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'

    },
    buttonSkill: {
        marginVertical: 5,
        alignItems: 'center',
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50
    }
})
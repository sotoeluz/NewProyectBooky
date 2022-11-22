import React from 'react'
import { View, Text, TouchableOpacity, Stylesheet } from 'react-native'

export function ButtonNew(props) {
    const {onPress, text} = props 
    return (
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#0a0a0a',
            }}
            onPress = { onPress }
            >


            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                    
                }}
             >   
                
                { text }
            </Text>
        </TouchableOpacity>
        
        
    )
}

export function ButtonNew2(props) {
    const {onPress, text} = props 
    return (
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#f1f1f1',
            }}
            onPress = { onPress }
            >


            <Text
                style = {{
                    ...styles.buttonText,

                    
                }}
             >   
                
                { text }
            </Text>
        </TouchableOpacity>
        
        
    )
}

export function CancelButton(props) {
    const {onPress, text} = props 
    return (
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#f1000',
            }}
            onPress = { onPress }
            >


            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1',
                    fontWeight: 'bold'
                    
                }}
             >   
                
                { text }
            </Text>
        </TouchableOpacity>
        
        
    )
}

const styles = Stylesheet.create({

    button: {
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 15,
        width: '90%'
    },

    buttonText: {
        textAlign: 'center',

    }

}) 
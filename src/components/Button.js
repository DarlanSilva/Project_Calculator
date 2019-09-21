import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#000',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
        color: 'white'
    },
    operationButton:{
        color: '#fff',
        backgroundColor:'rgba(0,0,0,0.9)',
    },
    buttonDouble:{
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple:{
        width: (Dimensions.get('window').width / 4) * 3
    }
})

export default props => {
    const styleButton = [styles.button]

    if (props.double) styleButton.push(styles.buttonDouble)
    if (props.triple) styleButton.push(styles.buttonTriple)
    if (props.operation) styleButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}
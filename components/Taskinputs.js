import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Modal} from 'react-native';



const Taskinput = props => {
    const [enteredTask, setEnteredTask] = useState('');

    const taskInputHandler = enteredText => {
        setEnteredTask(enteredText);
    };
    
    const addTaskHandler = () => {
        props.onAddTask(enteredTask);
        setEnteredTask('')
    };

    return(
        
        <Modal visible={props.visible} animationType="fade">
                <View style={styles.inputContainer}>
                <TextInput
                    placeholder="My Tasks"
                    style={styles.input}
                    onChangeText={taskInputHandler}
                    value={enteredTask}
                />
                <View style={styles.ButtonContainer}>
                    <View style={styles.Button}>
                        <Button title="Back" color='grey' onPress={props.onCancel}/>
                    </View>
                    <View style={styles.Button}>
                        <Button title="Add" onPress={addTaskHandler} />
                    </View>
                </View>
                </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:20,
    },
    input: {
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: '80%',
        marginBottom:10
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        borderRadius: 10,
        shadowColor: 'blue',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.70,

    },
    Button: {
        width: '40%',
    },
    title: {
        fontSize:20,
        marginVertical:10,
    }

});

export default Taskinput;
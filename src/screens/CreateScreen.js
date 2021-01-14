import React, { useContext } from 'react';
import { Text, Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { Context } from '../context/TodoContext';

const CreateScreen = ({ navigation }) => {
    
    const { addToDo } = useContext(Context);
    return (
        <>
            <Text h1>Create Screen</Text>
            <Input
                placeholder="Task Name"
            />
            <Input
                placeholder="Task Description"
            />
            <Button
                buttonStyle={styles.button}
                title="Create"
                type="outline"
            />
            
        </>
    )
    
   
}

const styles = StyleSheet.create({
    button: {
        margin: 20,
        backgroundColor: 'black',
        color: 'white'
    }
    
})

export default CreateScreen;
import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { View, Text, Button, Linking, Touchable, TouchableOpacity } from 'react-native'
import taskStyles from './styles/task'

const task = ({ text, index, taskItems, setTaskItems }) => {

    const completeTask = async (index) => {
        let temp = [...taskItems]
        temp.splice(index, 1)

        try {
            const ls = await AsyncStorage.getItem('tasks')
            if (ls) {
                let temp = ls.split(',')
                temp.splice(index, 1)
                await AsyncStorage.setItem('tasks', temp.toString())
            }
        } catch (e) {
            console.log(e);
        }

        setTaskItems(temp)
    }

    const redirectAmzn = async (query) => {
        await Linking.openURL(`https://www.amazon.in/s?k=${query}`)
    }

    const redirectFlpkrt = async (query) => {
        await Linking.openURL(`https://www.flipkart.com/grocery/pr?q=${query}&marketplace=GROCERY&sid=search.flipkart.com`)
    }

    const redirectGrfr = async (query) => {
        await Linking.openURL(`https://www.grofers.com/s/?q=${query}`)
    }


    return (
        <View style={taskStyles.item}>
            <View style={taskStyles.itemLeft}>
                <Text style={taskStyles.itemText}>{text}</Text>
            </View>
            <View style={taskStyles.itemRight}>
                <TouchableOpacity style={taskStyles.amazon} onPress={() => redirectAmzn(text)}>
                    <Text>A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={taskStyles.flipkart} onPress={() => redirectFlpkrt(text)}>
                    <Text>F</Text>
                </TouchableOpacity>
                <TouchableOpacity style={taskStyles.grofers} onPress={() => redirectGrfr(text)}>
                    <Text>G</Text>
                </TouchableOpacity>
                <TouchableOpacity style={taskStyles.remove} onPress={() => completeTask(index)}></TouchableOpacity>
            </View>
        </View>
    )
}

export default task

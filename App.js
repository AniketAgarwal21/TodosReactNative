import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Linking, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import appStyles from './components/styles/app';
import Task from './components/task';

export default function App() {

  let [task, setTask] = useState("")
  let [taskItems, setTaskItems] = useState([])

  useEffect(() => {
    const fn = async () => {
      try {
        const ls = await AsyncStorage.getItem('tasks')
        if (ls) {
          let temp = ls.split(',')
          setTaskItems(temp)
        }
      } catch (e) {
        console.log(e);
      }
    }
    fn()
  }, [])

  const handleAddTask = async () => {
    if (task === "") return
    Keyboard.dismiss()
    try {
      AsyncStorage.setItem('tasks', [...taskItems, task].toString())
    } catch (e) {
      console.log(e);
    }
    setTaskItems([...taskItems, task])
    setTask("")
  }

  return (
    <View style={appStyles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

        <View style={appStyles.tasksWrapper}>
          <Text style={appStyles.sectionTitle}>Your Tasks</Text>
          <View style={appStyles.items}>

            {taskItems.length > 0 ?
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index}>
                    <Task text={item} index={index} taskItems={taskItems} setTaskItems={setTaskItems} />
                  </TouchableOpacity>
                )
              }) : (
                <View style={appStyles.center}>
                  <Text style={appStyles.sectionTitle}>No Tasks Yet 😱</Text>
                </View>
              )
            }
          </View>
        </View>

      </ScrollView>

      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={appStyles.writeTaskWrapper}
      >
        <TextInput style={appStyles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={appStyles.addWrapper}>
            <Text style={appStyles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}


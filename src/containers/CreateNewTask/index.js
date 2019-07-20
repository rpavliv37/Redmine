import React from 'react';
import { ScrollView } from 'react-native';
import CreateNewTaskForm from './CreateNewTaskForm';
import '@expo/vector-icons';

export default class CreateNewTask extends React.Component {
  static navigationOptions = {
    title: 'Create new task',
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
          <CreateNewTaskForm />
      </ScrollView>
    );
  }
}
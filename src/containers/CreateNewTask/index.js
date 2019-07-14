import React from 'react';
import {Picker, TouchableOpacity, ScrollView } from 'react-native';
import Expand from 'react-native-simple-expand';
import { Input, Button, Card, Block, Text, Icon, Navbar } from 'galio-framework';
import '@expo/vector-icons';

export default class CreateNewTask extends React.Component {
	static navigationOptions = {
    title: 'Create new task',
  };
  constructor(props) {
    super(props);
		this.state = {
    }
  }
  
  render(){
    return (
      <ScrollView>
        <Block
          style={{
						backgroundColor: '#fff',
						flex: 1,
						paddingLeft: 20,
						paddingRight: 20
					}}
        >
          <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 'auto'}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})}
          >
            <Picker.Item label="Tracker" value="java" />
            <Picker.Item label="Project" value="js" />
          </Picker>
          <Input
            placeholder='Subject'
            rounded
            icon='subject'
            family='MaterialIcons'
          />
          <Input
            placeholder='Description'
            rounded
            icon='description'
            family='MaterialIcons'
            multiline = {true}
            numberOfLines = {4}
          />
          <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 'auto'}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})}
          >
            <Picker.Item label="Status" value="java" />
            <Picker.Item label="Project" value="js" />
          </Picker>
          <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 'auto'}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})}
          >
            <Picker.Item label="Priority" value="java" />
            <Picker.Item label="Project" value="js" />
          </Picker>
          <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 'auto'}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})}
          >
            <Picker.Item label="Assignee" value="java" />
            <Picker.Item label="Project" value="js" />
          </Picker>
          <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 'auto'}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})}
          >
            <Picker.Item label="Severity" value="java" />
            <Picker.Item label="Project" value="js" />
          </Picker>
          <Input
            placeholder='Pre-conditions'
            rounded
            icon='subject'
            family='MaterialIcons'
          />
          <Input
            placeholder='Steps to reproduce'
            rounded
            icon='foot'
            family='Foundation'
            multiline = {true}
            numberOfLines = {4}
          />
          <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 'auto'}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})}
          >
            <Picker.Item label="Files" value="java" />
            <Picker.Item label="Project" value="js" />
          </Picker>
          <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 'auto'}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})}
          >
            <Picker.Item label="Watchers" value="java" />
            <Picker.Item label="Project" value="js" />
          </Picker>
          <Input
            placeholder='Parent task'
            rounded
            icon='list-number'
            family='Foundation'
          />
        </Block>
      </ScrollView>
    );
  }
}
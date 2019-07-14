import React from 'react';
import { Picker, TouchableOpacity, ScrollView } from 'react-native';
import Expand from 'react-native-simple-expand';
import { Input, Button, Card, Block, Text, Icon, Navbar } from 'galio-framework';
import { Container, Header, Content, DatePicker, Text as NativeBaseText } from 'native-base';
import '@expo/vector-icons';

export default class CreateNewTask extends React.Component {
  static navigationOptions = {
    title: 'Create new task',
  };
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <ScrollView>
        <Block
          style={{
            backgroundColor: '#fff',
            flex: 1,
            paddingLeft: 20,
            paddingRight: 20,
            marginBottom: 10
          }}
        >
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })}
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
            multiline={true}
            numberOfLines={4}
          />
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })}
          >
            <Picker.Item label="Status" value="java" />
            <Picker.Item label="Project" value="js" />
          </Picker>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })}
          >
            <Picker.Item label="Priority" value="java" />
            <Picker.Item label="Project" value="js" />
          </Picker>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })}
          >
            <Picker.Item label="Assignee" value="java" />
            <Picker.Item label="Project" value="js" />
          </Picker>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })}
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
            multiline={true}
            numberOfLines={4}
          />
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })}
          >
            <Picker.Item label="Files" value="java" />
            <Picker.Item label="Project" value="js" />
          </Picker>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })}
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
          <Block
            row
            style={{
              alignItems: 'center',
              paddingLeft: 8
            }}
          >
            <NativeBaseText>
              Start Date:
            </NativeBaseText>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2020, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"calendar"}
              placeHolderText={<Icon name="calendar" family="AntDesign" color='blue' size={14} />}
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "black" }}
              onDateChange={this.setDate}
              disabled={false}
            />
          </Block>
          <Block
            row
            style={{
              alignItems: 'center',
              paddingLeft: 8
            }}
          >
            <NativeBaseText>
              Due date:
            </NativeBaseText>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2020, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"calendar"}
              placeHolderText={<Icon name="calendar" family="AntDesign" color='blue' size={14} />}
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "black" }}
              onDateChange={this.setDate}
              disabled={false}
            />
          </Block>
          <Input
            placeholder='Estimated time (hours)'
            rounded
            type='decimal-pad'
            icon='clock'
            family='Foundation'
          />
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })}
          >
            <Picker.Item label="% Done" value="java" />
            <Picker.Item label="Project" value="js" />
          </Picker>
          <Input
            placeholder='Expected result'
            rounded
            icon='results'
            family='Foundation'
          />
          <Input
            placeholder='Environment'
            rounded
            icon='results'
            family='Foundation'
          />
          <Input
            placeholder='Actual result'
            rounded
            icon='results'
            family='Foundation'
          />
          <Block 
            row
            space='between'
          >
          <Button
            radius={27}
            shadowColor
            color='info'
            icon='pluscircle'
            iconFamily='AntDesign'
            iconColor='white'
            style={{
              width: 150
            }}
          >
            Create Task
					</Button>
          <Button
            radius={27}
            shadowColor
            color='danger'
            icon='pluscircle'
            iconFamily='AntDesign'
            iconColor='white'
            style={{
              width: 150
            }}
          >
            Cancel
					</Button>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}
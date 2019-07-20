import React from 'react';
import { Picker, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Button, Card, Block, Text, Icon, Navbar } from 'galio-framework';
import { DatePicker, Text as NativeBaseText } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { renderDropdown } from '../../components/Dropdown';
import { renderField } from '../../components/FormField';
import { renderDatePicker } from '../../components/Datepicker';
import shortid from 'shortid';
import '@expo/vector-icons';
import { from } from 'rxjs/observable/from';

const trackerList = [
  {
    name: 'Feature',
    id: 2
  },
  {
    name: 'Bug',
    id: 1
  },
  {
    name: 'Support',
    id: 3
  },
  {
    name: 'Task',
    id: 4
  },
  {
    name: 'User story',
    id: 16
  },
  {
    name: 'Build',
    id: 14
  },
  {
    name: 'Release',
    id: 12
  }
];

const statussesList = [
 {
   name: 'New',
   id: 1
 },
 {
  name: 'In Progress',
  id: 2
},
{
  name: 'Resolved',
  id: 3
},
{
  name: 'Feedback',
  id: 4
},
{
  name: 'Rejected',
  id: 6
},
{
  name: 'Cancelled',
  id: 8
}
];

const priorityList = [
  {
    name: 'Low',
    id: 1
  },
  {
   name: 'Normal',
   id: 2
 },
 {
   name: 'High',
   id: 3
 },
 {
   name: 'Urgent',
   id: 4
 }
 ];

const severityList = ['Moderate', 'Minor', 'Major', 'Critical'];

class CreateNewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  handleOnChange = (itemValue) => {

  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <Block
          style={{
            backgroundColor: '#fff',
            flex: 1,
            paddingLeft: 20,
            paddingRight: 20,
            marginBottom: 10
          }}
        >
          <Field
            name='tracker'
            component={renderDropdown}
          >
            <Picker.Item label='Tracker *' value='' />
            {trackerList.map((item) => (
              <Picker.Item label={item.name} value={item.id} key={shortid.generate()} />
            ))}
          </Field>
          <Field
            props={{
              placeholder: 'Subject *',
              rounded: true,
              icon: 'subject',
              family: 'MaterialIcons'
            }}
            name="subject"
            component={renderField}
				  />
          <Field
            props={{
              placeholder: 'Description',
              rounded: true,
              icon: 'description',
              family: 'MaterialIcons',
              style: {
                height: 100
              },
              multiline: true,
              numberOfLines: 4
            }}
            name="description"
            component={renderField}
				  />
          <Field
            name='status'
            component={renderDropdown}
          >
            <Picker.Item label='Status *' value='' />
            {statussesList.map((item) => (
              <Picker.Item label={item.name} value={item.id} key={shortid.generate()} />
            ))}
          </Field>
          <Field
            name='priority'
            component={renderDropdown}
          >
            <Picker.Item label='Priority *' value='' />
            {priorityList.map((item) => (
              <Picker.Item label={item.name} value={item.id} key={shortid.generate()} />
            ))}
          </Field>
          {/* !!! */}
          <Field
            name='project'
            component={renderDropdown}
          >
            <Picker.Item label='Project *' value='' />
            {priorityList.map((item) => (
              <Picker.Item label={item.name} value={item.id} key={shortid.generate()} />
            ))}
          </Field>
          {/* !!! */}
          <Field
            name='assignee'
            component={renderDropdown}
          >
            <Picker.Item label='Assignee' value='' />
            {priorityList.map((item) => (
              <Picker.Item label={item.name} value={item.id} key={shortid.generate()} />
            ))}
          </Field>
          {/* !!! */}
          <Field
            name='severity'
            component={renderDropdown}
          >
            <Picker.Item label='Severity *' value='' />
            {severityList.map((item) => (
              <Picker.Item label={item} value={item} key={shortid.generate()} />
            ))}
          </Field>
          <Field
            props={{
              placeholder: 'Pre-conditions',
              rounded: true,
              icon: 'subject',
              family: 'MaterialIcons',
              style: {
                height: 100
              },
              multiline: true,
              numberOfLines: 4
            }}
            name="Pre-conditions"
            component={renderField}
				  />
          <Field
            props={{
              placeholder: 'Steps to reproduce',
              rounded: true,
              icon: 'foot',
              family: 'Foundation',
              style: {
                height: 100
              },
              multiline: true,
              numberOfLines: 4
            }}
            name="steps"
            component={renderField}
				  />
          <Field
            props={{
              placeholder: 'Parent task',
              rounded: true,
              icon: 'list-number',
              family: 'Foundation'
            }}
            name="ParentTask"
            component={renderField}
				  />
          <Field
            label='Start date'
            component={renderDatePicker}
            name="start_date"
          />
          <Field
            label='Due date'
            component={renderDatePicker}
            name="due_date"
          />
          <Field
            props={{
              placeholder: 'Estimated time (hours)',
              rounded: true,
              icon: 'clock',
              family: 'Foundation',
              type: 'decimal-pad'
            }}
            name="steps"
            component={renderField}
				  />
          {/* !!! */}
          <Field
            name='watchers'
            component={renderDropdown}
          >
            <Picker.Item label='Watchers' value='' />
            {priorityList.map((item) => (
              <Picker.Item label={item.name} value={item.id} key={shortid.generate()} />
            ))}
          </Field>
          {/* !!! */}
          {/*
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
          /> */}
          <Block
            row
            space='between'
          >
            <Button
              onPress={handleSubmit}
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
    );
  }
}


export default reduxForm({
  form: 'createTaskForm'
})(CreateNewTaskForm);
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Checkbox, Block, Text } from 'galio-framework';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../components/FormField'
import { renderCheckbox } from '../../components/Checkbox';
import '@expo/vector-icons';

export class ForgotPassForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
    const { handleSubmit } = this.props;
    return (
    <Block
      flex={1}
      style={{
        paddingLeft: 15,
        paddingRight: 15
      }}
    >
      <Field
        props={{
          placeholder: 'E-mail',
          rounded: true,
          icon: 'mail',
          family: 'Entypo',
          type: 'email-address'
        }}
        component={renderField}
        name="email"
      />
      <TouchableOpacity
				onPress={handleSubmit}
			>
        <Button
          radius={27}
          shadowColor
          color='success'
          style={{
            marginTop: 12
          }}
        >
          Send
        </Button>
      </TouchableOpacity>
    </Block>
    );
  }
}

export default reduxForm({
  form: 'forgotPassForm'
})(ForgotPassForm);
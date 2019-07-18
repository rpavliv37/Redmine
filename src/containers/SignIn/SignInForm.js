import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Checkbox, Block, Text } from 'galio-framework';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../components/FormField'
import { renderCheckbox } from '../../components/Checkbox';
import '@expo/vector-icons';

export class SignInForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
    const { handleSubmit, goTo } = this.props;
		return (
			<Block
				flex={2}
				style={{
					paddingLeft: 20,
					paddingRight: 20
				}}
			>
				<Field
					props={{
						placeholder: 'Login',
						rounded: true,
						icon: 'user',
						family: 'Entypo'
					}}
					component={renderField}
					name="username"
				/>
				<Field
					props={{
						placeholder: 'Password',
						rounded: true,
						icon: 'lock',
						family: 'Entypo',
						password: true
					}}
					name="password"
					component={renderField}
				/>
				<Block
					space='between'
					row
					middle
					style={{
						marginTop: 8
					}}
				>
					<Field
						name="rememberMe"
						component={renderCheckbox}
					/>
					<Text
						h6
						onPress={() => goTo('ForgotPass')}
					>
						Lost password?
					</Text>
				</Block>
				<Button
          radius={27}
          shadowColor
          color='success'
          style={{
            marginTop: 12
					}}
					onPress={handleSubmit}
        >
          Login
        </Button>
			</Block>
		);
	}
}

export default reduxForm({
  form: 'signInForm'
})(SignInForm);
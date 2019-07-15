import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Checkbox, Block, Text } from 'galio-framework';
import { Field, reduxForm } from 'redux-form';
import Logo from '../../components/Logo';
import { renderField } from '../../components/FormField'
import '@expo/vector-icons';

export class SignIn extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
    const { navigate } = this.props.navigation;
    const { handleSubmit } = this.props;
		return (
			<React.Fragment>
				<Block
					flex={1}
          safe
					middle
				>
					<Logo />
				</Block>
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
            name="user"
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
							marginTop: 8,
							width: 320
						}}
					>
						<Checkbox
							label='Remember me'
							color='success'
						/>
						<Text
							h6
							onPress={() => navigate('ForgotPass')}
						>
							Lost password?
							</Text>
					</Block>
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
              Login
            </Button>
          </TouchableOpacity>
				</Block>
			</React.Fragment>
		);
	}
}

export default reduxForm({
  form: 'signInForm'
})(SignIn);
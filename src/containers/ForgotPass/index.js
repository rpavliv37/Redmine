import React from 'react';
import { View, TextInput } from 'react-native';
import styled from 'styled-components';
import { Input, CheckBox, Button, Text } from 'react-native-elements';

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const SubmitButton = styled.Button`
	width: 120px;
`;

export default class ForgotPass extends React.Component {
	static navigationOptions = {
    title: 'Forgot Password',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
    render() {
				const {navigate} = this.props.navigation;
        return (
					<Container>
						<Input
							placeholder='Email'
							leftIcon={{ type: 'font-awesome', name: 'envelope', iconStyle: {marginRight: 10} }}
						/>
						<View 
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
						</View>
						<SubmitButton
							title="Send"
						/>
					</Container>
        );
    }
}
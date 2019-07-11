import React from 'react';
import { View, TextInput } from 'react-native';
import styled from 'styled-components';
import { Input, CheckBox, Button, Text, Header } from 'react-native-elements';

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const Link = styled.Text`
`;

export default class SignIn extends React.Component {
	static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
    render() {
				const {navigate} = this.props.navigation;
        return (
					<Container>
						{/* <Header
							centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
						/> */}
						<Input
							placeholder='Login'
							leftIcon={{ type: 'font-awesome', name: 'user', iconStyle: {marginRight: 10}}}
							containerStyle={{
								marginBottom: 15
							}}
						/>
						<Input
							placeholder='Password'
							leftIcon={{ type: 'font-awesome', name: 'lock', iconStyle: {marginRight: 10} }}
						/>
						<View 
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<CheckBox
								left
								title='Remember me'
								checked={this.state.checked}
								containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
							/>
							<Link
								h6
								onPress={() => navigate('ForgotPass')}
							>
								Lost password?
							</Link>
						</View>
						<Button
							title="Login"
							buttonStyle={{
								paddingLeft: 15,
								paddingRight: 15
							}}
						/>
					</Container>
        );
    }
}
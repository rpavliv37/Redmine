import React from 'react';
import { Input, Button, Checkbox, Block, Text } from 'galio-framework';
import Logo from '../../components/Logo';
import '@expo/vector-icons';

export default class SignIn extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { navigate } = this.props.navigation;
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
					<Input
						placeholder='Login'
						rounded
						icon='user'
						family='Entypo'
					/>
					<Input
						placeholder='Password'
						rounded
						icon='lock'
						family='Entypo'
						password
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
				</Block>
			</React.Fragment>
		);
	}
}
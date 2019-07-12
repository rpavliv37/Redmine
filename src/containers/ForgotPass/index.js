import React from 'react';
import { Input, Button, Checkbox, Block, Text } from 'galio-framework';
import Logo from '../../components/Logo';
import '@expo/vector-icons';

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
					<Block
						flex={1}
						safe
						middle
						center
						width={320}
					>
						<Logo />
						<Input
							placeholder='E-mail'
							type='email-address'
							rounded
							icon='mail'
							family='Entypo'
						/>
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
					</Block>
        );
    }
}
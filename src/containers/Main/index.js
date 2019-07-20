import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import shortid from 'shortid';
import {Picker, TouchableOpacity, ScrollView } from 'react-native';
import Expand from 'react-native-simple-expand';
import { calcSpentTime, getStatusesFromList, getProjectsFromList, filterTasks } from './utils';
import { Input, Button, Card, Block, Text, Icon, Navbar } from 'galio-framework';
import { getTodaySpentTime, getAllListOfTasks } from './actions';
import '@expo/vector-icons';

class Main extends React.Component {
	static navigationOptions = {
    title: 'Main',
	};

  constructor(props) {
    super(props);
		this.state = {
			project: undefined,
			status: undefined
    }
	}

	componentDidMount() {
		this.props.getAllListOfTasks();
		this.props.getTodaySpentTime();
	}

	handleOnChangeProjectPicker = (itemValue) => {
		this.setState({project: itemValue})
	}
	handleOnChangeStatusPicker = (itemValue) => {
		this.setState({status: itemValue})
	}

	render() {
		const { all_tasks, navigation, spent_time } = this.props;
		const statuses = (all_tasks && getStatusesFromList(all_tasks)) || [];
		const projects = (all_tasks && getProjectsFromList(all_tasks)) || [];
    return (
			<React.Fragment>
					<Block
						right
						style={{
							paddingTop: 12,
							paddingBottom: 12,
							paddingLeft: 20,
							paddingRight: 20,
							backgroundColor: '#677178',
							borderBottomWidth: 1,
							borderBottomColor: 'rgba(0, 0, 0, 0.125)'
						}}
					>
						<Text
							h4
							color='white'
						>
							Today spent time: { spent_time && calcSpentTime(spent_time)}h
						</Text>
					</Block>
					<ScrollView>
				<Block
					style={{
						backgroundColor: '#fff',
						flex: 1,
						paddingLeft: 20,
						paddingRight: 20
					}}
				>
					<Block
						style={{
							paddingTop: 10
						}}
					>
					<TouchableOpacity
						onPress={() => {
							this.setState({ open: !this.state.open })
						}}
					>
						<Block
							row
							style={{
								justifyContent: 'flex-start',
								alignItems: 'center'
							}}
						>
							<Icon name={this.state.open ? "caretdown" : "caretright"} family="AntDesign" color='blue' size={14} />
							<Text
								h5
								bold
							>
								Filters
							</Text>
						</Block>
					</TouchableOpacity>
						<Expand value={this.state.open}>
							<Picker
								selectedValue={this.state.project}
								style={{height: 50, width: 'auto'}}
								onValueChange={this.handleOnChangeProjectPicker}
							>
								<Picker.Item label="All" value={undefined} />
								{projects && projects.map((project) => 
									<Picker.Item label={project.name} value={project.name} key={shortid.generate()}/>
								)}
						</Picker>
						<Picker
								selectedValue={this.state.status}
								style={{height: 50, width: 'auto'}}
								onValueChange={this.handleOnChangeStatusPicker}
							>
								<Picker.Item label="All" value={undefined} />
								{statuses && statuses.map((status) => 
									<Picker.Item label={status.name} value={status.name} key={shortid.generate()}/>
								)}
							</Picker>
						</Expand>
					</Block>
					<Block
						right
						style={{
							marginBottom: 10,
							marginTop: 10
						}}
					>
						<Button
							radius={27}
							shadowColor
							color='info'
							icon='pluscircle'
							iconFamily='AntDesign'
							iconColor='white'
							size='small'
							onPress={() => navigation.navigate('CreateNewTask')}
						>
							Add new Issue
						</Button>
					</Block>
					{all_tasks ? filterTasks(all_tasks, this.state.project, this.state.status).map((task) => (
					<Block
						borderWidth={1}
						style={{
							backgroundColor: '#6c757c',
							borderColor: 'rgba(0, 0, 0, 0.125)',
							borderRadius: 20,
							marginBottom: 15
						}}
						key={shortid.generate()}
					>
							<Block
								style={{
									paddingTop: 12,
									paddingBottom: 12,
									paddingLeft: 20,
									paddingRight: 20,
									backgroundColor: '#677178',
									borderBottomWidth: 1,
									borderTopLeftRadius: 20,
									borderTopRightRadius: 20,
									borderBottomColor: 'rgba(0, 0, 0, 0.125)'
								}}
							>
								<Text
									h5
									style={{
										paddingBottom: 5,
										color: 'white'
									}}
								>
									{`${task.tracker.name} #${task.id}`} 
								</Text>
							</Block>
							<Block
								row
								space='between'
								style={{
									paddingTop: 12,
									paddingBottom: 12,
									paddingLeft: 20,
									paddingRight: 20
								}}
							>
								<Text
									color='white'
								>
									Status: {task.status.name}
								</Text>
								<Text
									color='white'
								>
									Priority: {task.priority.name}
								</Text>
							</Block>
							<Block
								style={{
									paddingTop: 12,
									paddingBottom: 12,
									paddingLeft: 20,
									paddingRight: 20
								}}
							>
								<Text
									color='white'
								>
									{task.subject}
								</Text>
							</Block>
							<Block
								row
								space='between'
								style={{
									paddingTop: 12,
									paddingBottom: 12,
									paddingLeft: 20,
									paddingRight: 20
								}}
							>
								<Text
									color='white'
								>
									Updated: {new Date(task.updated_on).toDateString()}
								</Text>
								<Text
									color='blue'
								>
									More details >>
								</Text>
							</Block>
					</Block>
					)) : (
						null
					)}
			</Block>
			</ScrollView>
			</React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
		all_tasks: _.get(state, ['main', 'all_tasks_list', 'issues']),
		spent_time: _.get(state, ['main', 'spent_time'])
  };
}

export default connect(
  mapStateToProps,
  {
		getAllListOfTasks,
		getTodaySpentTime
  }
)(Main);
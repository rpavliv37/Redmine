import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Picker, TouchableOpacity, ScrollView } from 'react-native';
import Expand from 'react-native-simple-expand';
import { Input, Button, Card, Block, Text, Icon, Navbar } from 'galio-framework';
import '@expo/vector-icons';

class TaskDetails extends React.Component {
  static navigationOptions = {
    title: 'TaskDetails',
  };
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { task } = this.props;
    return (
      <React.Fragment>
        <Block>
          <Block
            row
            space='between'
            middle
            style={{
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: '#677178',
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(0, 0, 0, 0.125)'
            }}
          >
            <Text
              h4
              color='white'
            >
              {`${task.tracker.name} #${task.id}`} 
						</Text>
            <Text
              h4
              color='white'
            >
              {task.project.name} 
						</Text>
          </Block>
        </Block>
        <ScrollView>
          {task &&
          (<Block
            style={{
              backgroundColor: '#fff',
              flex: 1,
              paddingLeft: 20,
              paddingRight: 20,
              marginBottom: 10
            }}
          >
            <Block
              row
              space='between'
              style={{
                paddingTop: 10
              }}
            >
              <Button
                radius={27}
                shadowColor
                color='info'
                icon='pluscircle'
                iconFamily='AntDesign'
                iconColor='white'
                style={{
                  width: 100
                }}
                iconSize={15}
                iconColor='white'
              >
                Edit
					    </Button>
              <Button
                radius={27}
                shadowColor
                color='danger'
                icon='pluscircle'
                iconFamily='AntDesign'
                iconColor='white'
                style={{
                  width: 100
                }}
              >
                Log Time
					    </Button>
              <Button
                radius={27}
                shadowColor
                color='warning'
                icon='pluscircle'
                iconFamily='AntDesign'
                iconColor='white'
                style={{
                  width: 100
                }}
              >
                Watch
					    </Button>
            </Block>
            <Block
              borderWidth={1}
              style={{
                backgroundColor: '#6c757c',
                borderColor: 'rgba(0, 0, 0, 0.125)',
                borderRadius: 20,
                marginBottom: 15,
                marginTop: 15
              }}
					  >
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
              {(task.description !== '') &&
              (<Block
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
									Description: {task.description}
								</Text>
							</Block>)}
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
									Start Date: {new Date(task.start_date).toDateString()}
								</Text>
							</Block>
				  	</Block>
          </Block>)}
        </ScrollView>
      </React.Fragment>
    );
  }
}


function mapStateToProps(state) {
  return {
		task: _.get(state, ['main', 'selected_task'])
  };
}

export default connect(
  mapStateToProps,
  {
  }
)(TaskDetails);
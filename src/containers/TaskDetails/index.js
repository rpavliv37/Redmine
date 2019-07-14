import React from 'react';
import { Picker, TouchableOpacity, ScrollView } from 'react-native';
import Expand from 'react-native-simple-expand';
import { Input, Button, Card, Block, Text, Icon, Navbar } from 'galio-framework';
import '@expo/vector-icons';

export default class TaskDetails extends React.Component {
  static navigationOptions = {
    title: 'TaskDetails',
  };
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
        <Block>
          <Block
            middle
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
              Bug #123456
						</Text>
          </Block>
        </Block>
        <ScrollView>
          <Block
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
          </Block>
        </ScrollView>
      </React.Fragment>
    );
  }
}
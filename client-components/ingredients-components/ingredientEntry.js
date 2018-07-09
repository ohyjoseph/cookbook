import React from 'react';
import { View, Text, Modal, ImageBackground } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
//====================================================
class IngredientEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false
    };
  }
  //====================================================
  deleteIngredient() {
    this.props.item.quantity = 0;
    this.props.editIngredients();
    this.setState({
      showOptions: false
    })
  }
  //====================================================
  render() {
    // console.log(`Render IngredientEntry `, this.props);
    return (
      <View >
        <ListItem
          key={this.props.item.index}
          title={this.props.item.ingredient}
          subtitle={(this.props.item.quantity ? this.props.item.quantity.toString() : '0') + (this.props.item.unit || '')}
          leftAvatar={{ source: { uri: this.props.item.imageurl || 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Food-Dome-512.png' } }}
          roundAvatar={true}
          rightIcon={{
            name: 'ios-more',
            type: 'ionicon',
            onPress: () => {
              this.setState({
                showOptions: true
              })
            }
          }}
          onPress={() => {
            this.props.editMode()
          }}
          onLongPress={() => {
            this.setState({
              showOptions: true
            })
          }}
          topDivider={true}
          containerStyle={{ backgroundColor: 'transparent' }}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showOptions}
          onRequestClose={() => {
            this.setState({
              showOptions: false
            })
          }}
        >
          <ImageBackground
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            source={require('../../media/4.jpg')}
            blurRadius={0}
            onLayout={() => {
              this.forceUpdate();
            }}
          >
            <Text
              style={{ fontSize: 18 }}
            >Delete {this.props.item.quantity}{this.props.item.unit} {this.props.item.ingredient} from pantry?
            </Text>
            <Button
              title='Delete'
              buttonStyle={{
                backgroundColor: 'red',
                marginTop: 10
              }}
              rounded={true}
              onPress={() => {
                console.log('Firing');
                this.deleteIngredient();
              }}
            />
            {/* </View> */}
          </ImageBackground>
        </Modal>
      </View>
    )
  }
}
export default IngredientEntry;
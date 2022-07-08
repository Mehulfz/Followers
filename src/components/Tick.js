import React, { Component } from 'react';
import { 
  Alert, 
  Image, 
  Platform, 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  View 
} from 'react-native';
import PropTypes from 'prop-types';


class Selected_Items_Array {
    constructor() {
      selectedItemsArray = [];
    }
  
    pushItem(option) {
      selectedItemsArray.push(option);
    }
  
    getArray() {
      return selectedItemsArray;
    }
  }
  

  class Checkbox extends Component {
  
    constructor() {
      super();
      this.state = { 
        checked: null 
      }
    }

    componentDidMount() {

        if (this.props.checked) {
          this.setState({ checked: true }, () => {
            this.props.selectedArrayObject.pushItem({
              'key': this.props.keyValue,
              'label': this.props.label,
              'value': this.props.value
            });
          });
        }
        else {
          this.setState({ checked: false });
        }
      }
      toggleState(key, label, value) {
        this.setState({ checked: !this.state.checked }, () => {
          if (this.state.checked) {
            this.props.selectedArrayObject.pushItem({ 'key': key, 'label': label, 'value': value });
          }
          else {
            this.props.selectedArrayObject.getArray().splice(this.props.selectedArrayObject.getArray().findIndex(x => x.key == key), 1);
          }
        });
      }
     
      render() {
        return (
    
          <TouchableHighlight
            onPress={this.toggleState.bind(this, this.props.keyValue, this.props.label, this.props.value)}
            underlayColor="transparent"
            style={{ marginVertical: 10 }}>
    
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    
              <View style={{ width: this.props.size, height: this.props.size, backgroundColor: this.props.color, padding: 3 }}>
                {
                  (this.state.checked)
                    ?
                    (<View style={styles.checkedView}>
                      <Image source={require('../components/chk.png')} style={styles.checkBoxImage} />
                    </View>)
                    :
                    (<View style={styles.uncheckedView} />)
                }
    
              </View>
    
              <Text style={[styles.checkBoxLabelText, { color: this.props.labelColor }]}>{this.props.label}</Text>
    
            </View>
    
          </TouchableHighlight>
        );
      }
  }

  export default class Tick extends Component {
 
    constructor() {

        super();
    
        selectedArrayOBJ = new Selected_Items_Array();
        this.state = { selectedItems: '' }
    
      }
      getSelectedItems = () => {

        if (selectedArrayOBJ.getArray().length == 0) {
    
          Alert.alert('No Items Selected!');
        }
        else {
          // console.log(selectedArrayOBJ.getArray().map(item => item.label).join());
          this.setState(() => {
            return {
              selectedItems: selectedArrayOBJ.getArray().map(item => item.value).join()
            }
          });
        }
      }
      render() {
        return (
          <View style={styles.MainContainer}>
            
            <View style={styles.chk}>
            <Checkbox size={30}
              keyValue={1}
              selectedArrayObject={selectedArrayOBJ}
              checked={true}
              color="#000000"
              labelColor="#ffffff"
              label="Followers "
              value="Followers" />
            </View>
     
            <View style={styles.chk}>
            <Checkbox size={30}
              keyValue={2}
              selectedArrayObject={selectedArrayOBJ}
              checked={true}
              color="#000000"
              labelColor="#ffffff"
              label="Followers 2"
              value="Followers 2" />
            </View>
     
            <View style={styles.chk}>
            <Checkbox size={30}
              keyValue={3}
              selectedArrayObject={selectedArrayOBJ}
              checked={true}
              color="#000000"
              labelColor="#ffffff"
              label="Followers 3"
              value="Followers 3" />

            </View>
              <View style={styles.chk}>
              <Checkbox size={30}
              keyValue={4}
              selectedArrayObject={selectedArrayOBJ}
              checked={true}
              color="#000000"
              labelColor="#ffffff"
              label="Followers 4"
              value="Followers 4" />
              </View>

              <View style={styles.chk}>
              <Checkbox size={30}
              keyValue={5}
              selectedArrayObject={selectedArrayOBJ}
              checked={true}
              color="#000000"
              labelColor="#ffffff"
              label="Followers 5"
              value="Followers 5" />
              </View>

              <View style={styles.chk}>
              <Checkbox size={30}
              keyValue={6}
              selectedArrayObject={selectedArrayOBJ}
              checked={true}
              color="#000000"
              labelColor="#ffffff"
              label="Followers 6"
              value="Followers 6" />
              </View>
            
    
          </View>
        );
      }
    
    
    
  }
   
  const styles = StyleSheet.create(
    {
      MainContainer:
      {
        // paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        flex: 1,
        paddingHorizontal: 20,
        // justifyContent: 'center',
        // alignItems: 'center'
      },
  
      selectedItemsButton:
      {
        marginTop: 25,
        padding: 8,
        backgroundColor: '#2962FF',
        alignSelf: 'stretch'
      },
  
      selectedItemsButton_Text:
      {
        color: 'white',
        textAlign: 'center',
        alignSelf: 'stretch',
        fontSize: 18
      },
  
      checkedView:
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      checkBoxImage:
    {
      height: '80%',
      width: '80%',
      tintColor: 'white',
      resizeMode: 'contain'
    },

    uncheckedView:
    {
      flex: 1,
      backgroundColor: 'white'
    },

    checkBoxLabelText:
    {
      fontSize: 20,
      paddingLeft: 10,
      fontWeight:'700'
    },
    chk:{
        height:50,
        width:'100%',
        backgroundColor:'#808080',
        alignItems:'center',
        marginTop:10,
        borderRadius:5
    }
  });

  Checkbox.propTypes =
  {
    size: PropTypes.number,
    keyValue: PropTypes.number.isRequired,
    selectedArrayObject: PropTypes.object.isRequired,
    color: PropTypes.string,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool
  }

Checkbox.defaultProps =
  {
    size: 30,
    color: '#636c72',
    labelColor: '636c72',
    label: 'Default',
    checked: false,
    value: 'Default'
  }
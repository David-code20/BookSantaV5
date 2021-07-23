import React,{Component} from 'react';
import { View,Text,TextInput,TouchableOpacity, Linking} from 'react-native';

export default class SettingsScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            FirstName:'',
            LastName:'',
            Address:'',
            PhoneNumber:'',
        }
    }
    render(){
        return(
            <View>
                <Text>
                    Settings Screen
                </Text>
                <TextInput
                placeholder='FirstName'
                onChangeText={(text)=>{
                    this.setState({
                        FirstName:text
                    })
                }}
                value={this.state.FirstName}
                />
                <TextInput
                placeholder='LastName'
                onchangeText={(text)=>{
                this.setState({
                    LastName:text
                })  
                }}
                value={this.state.LastName}
                />
                <TextInput
                placeholder='Address'
                onChangeText={(text)=>{
                    this.setState({
                        Address:text
                    })
                }}
                value={this.state.Address}
                />
                <TextInput
                placeholder='PhoneNumber'
                onChangeText={(text)=>{
                    this.setState({
                        PhoneNumber=text
                    })
                }}
                value={this.state.PhoneNumber}
                />
                <TouchableOpacity onPress={this.updateUserDetails}>
                    <Text>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        )

    }
} 

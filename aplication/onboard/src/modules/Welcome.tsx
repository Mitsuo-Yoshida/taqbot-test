import React from 'react';
import { Component } from 'react';
import { FlatList, AsyncStorage } from 'react-native';
import { Button, ItemList, Card, CardSection } from '../components'


interface user{
    id: string
    name: string;
    role: string;
}

const ITEMS_PER_PAGE = 5; // what is the batch size you want to load.

class Welcome extends Component{
    state = { name: '', data: [
        {
            id: '370',
            name:'Garcinha0',
            role:'Naruto\'s RAVING fan0'
        }
    ], dataSource: [], page: 0 };
    
    
    usersList:Array<user> = 
    [{
        id: '7',
        name:'Garcinha',
        role:'Naruto\'s RAVING fan'
    },{
        id: '1',
        name:'EverDeus',
        role:'Absolute BEAST friend'
    },{
        id: '2',
        name:'Alfinho',
        role:'S2 sweetHEART S2'
    },{
        id: '76',
        name:'Super Shock',
        role:'Static TRIGGER happy hero'
    },{
        id: '64',
        name:'MitsuBixo',
        role:'Clinically INSANE tea fan'
    },{
        id: '42',
        name:'Pastelitos',
        role:'Mad CHILL dude'
    },{
        id: '56',
        name:'Knuckles',
        role:'Oh no CHUCKLES brudah'
    },{
        id: '333',
        name:'Penn',
        role:'Loud TRICKS expert'
    },{
        id: '222',
        name:'Teller',
        role:'Quiet MAGIC expert'
    },{
        id: '70',
        name:'Garcinha',
        role:'Naruto\'s RAVING fan'
    },{
        id: '10',
        name:'EverDeus',
        role:'Absolute BEAST friend'
    },{
        id: '20',
        name:'Alfinho',
        role:'S2 sweetHEART S2'
    },{
        id: '760',
        name:'Super Shock',
        role:'Static TRIGGER happy hero'
    },{
        id: '640',
        name:'MitsuBixo',
        role:'Clinically INSANE tea fan'
    },{
        id: '420',
        name:'Pastelitos',
        role:'Mad CHILL dude'
    },{
        id: '560',
        name:'Knuckles',
        role:'Oh no CHUCKLES brudah'
    },{
        id: '3330',
        name:'Penn',
        role:'Loud TRICKS expert'
    },{
        id: '2220',
        name:'Teller',
        role:'Quiet MAGIC expert'
    },{
        id: '71',
        name:'Garcinha',
        role:'Naruto\'s RAVING fan'
    },{
        id: '11',
        name:'EverDeus',
        role:'Absolute BEAST friend'
    },{
        id: '21',
        name:'Alfinho',
        role:'S2 sweetHEART S2'
    },{
        id: '761',
        name:'Super Shock',
        role:'Static TRIGGER happy hero'
    },{
        id: '641',
        name:'MitsuBixo',
        role:'Clinically INSANE tea fan'
    },{
        id: '421',
        name:'Pastelitos',
        role:'Mad CHILL dude'
    },{
        id: '561',
        name:'Knuckles',
        role:'Oh no CHUCKLES brudah'
    },{
        id: '3331',
        name:'Penn',
        role:'Loud TRICKS expert'
    },{
        id: '2221',
        name:'Teller',
        role:'Quiet MAGIC expert'
    },{
        id: '701',
        name:'Garcinha',
        role:'Naruto\'s RAVING fan'
    },{
        id: '101',
        name:'EverDeus',
        role:'Absolute BEAST friend'
    },{
        id: '201',
        name:'Alfinho',
        role:'S2 sweetHEART S2'
    },{
        id: '7601',
        name:'Super Shock',
        role:'Static TRIGGER happy hero'
    },{
        id: '6401',
        name:'MitsuBixo',
        role:'Clinically INSANE tea fan'
    },{
        id: '4201',
        name:'Pastelitos',
        role:'Mad CHILL dude'
    },{
        id: '5601',
        name:'Knuckles',
        role:'Oh no CHUCKLES brudah'
    },{
        id: '33301',
        name:'Penn',
        role:'Loud TRICKS expert'
    },{
        id: '22201',
        name:'Teller',
        role:'Quiet MAGIC expert'
    }]

    // user = {
    //     name:'',
    //     token:''
    // }

    // getUser(){
    //     AsyncStorage.getItem('USER', (err, result) => {
    //         if (result) {
    //             this.user = JSON.parse(result);
    //             this.setState({name: this.user.name })
    //         }
    //         else {
    //             this.setState({name: 'Failed fetching user' })
    //         }
    //     });
    // }

    loadMore() {
        const data = this.state.data;
        const nextPage = this.state.page + 1;
        const start = this.state.page*ITEMS_PER_PAGE;
        const end = (nextPage)*ITEMS_PER_PAGE-1;
    
        const newData = this.usersList.slice(start, end);
        this.setState({data: [...data, ...newData], page: nextPage});
    }

    renderItem( user:user ){
        return (
        < ItemList user = {user} />
        )
    }
    
    renderFooter( ){
        return (
            <CardSection>    
                <Button onPress={()=>this.loadMore()} buttonTitle='Load More' />
            </CardSection>
        )
    }
    render(){
        
        return ( 
            <Card>
                <CardSection>
                    <FlatList 
                        data = {this.state.data}
                        renderItem={({item})=> this.renderItem(item)}
                        keyExtractor={ user => user.id}
                        ListFooterComponent={ () => this.renderFooter() }
                        // onEndReached={() => this.loadMore()}
                        // onEndReachedThreshold={0}
                    />
                </CardSection>    
            </Card>
        );
    }
};




  

const styles:any = {
    nameStyle:{
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#0000ff',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export { Welcome };
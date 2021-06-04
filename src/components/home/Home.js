import React, { Component } from 'react';
import Slider from './carousel/Slider';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import SignIn from '../auth/SiginIn'


class Home extends Component {


   
    render() {

        const images = [
            'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
            'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
            'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
            'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
        ]
        const { auth } = this.props;
        console.log(auth)
       if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div>
                <Slider slides={ images}/>
                
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Home);



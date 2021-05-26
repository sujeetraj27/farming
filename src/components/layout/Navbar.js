import React from 'react';
import { Link } from 'react-router-dom'
import SignedLinks from './SignedLinks';
import SignedoutLinks from './SignedoutLinks';
import { connect } from 'react-redux'


const Navbar = (props) => {
    const { auth , profile } = props;
    //console.log(auth)

    const links = auth.uid ? <SignedLinks profile={profile}/> : <SignedoutLinks />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Farming</Link>
                {links}
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);

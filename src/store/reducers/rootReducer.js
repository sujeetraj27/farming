import { combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import ProjectReducer from './ProjectReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers ({
    auth: authReducer,
    project: ProjectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
})

export default rootReducer;
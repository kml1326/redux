// import projectReducer from "../reducers/projectReducer";
import { getFirestore } from 'redux-firestore';

export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirebasestore }) => {	
		// make asynk call to database
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState.firebase.auth.uid;
		firestore.collection('projects').add({
			...project,
			authorFirstName: profile.firstName,
			authoeLastName: profile.lastName,
			authorId: authorId,
			createdAt: new Date()
		}).then(() => {
			dispatch({ type: 'CREATE_PROJECT', project })
		}).catch((err) => {
			dispatch({ type: 'CREATE_PROJECT_ERR', err })
		})
	}
};

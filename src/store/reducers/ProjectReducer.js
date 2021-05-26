const initState = {
    projects: [
        { id: 1, title: 'help me out', content: 'hey i am out' },
        { id: 2, title: 'help me ', content: 'hey i am out please help me' },
        { id: 3, title: 'help me out somebody', content: 'hey i am out somebody help me' }
    ]
}

const ProjectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CRETAE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CRETAE_PROJECT_ERROR':
            console.log('created projec error', action.err);
            return state;
        default:
            return state;
    }

}

export default ProjectReducer;
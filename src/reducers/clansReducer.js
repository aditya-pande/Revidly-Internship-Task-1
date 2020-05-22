// const defaultClansReducerState = []


const defaultClansReducerState = [{name: 'Internship'}, {name: 'Finance'}, {name: 'Travel'}, {name: 'Sports'}]



const clansReducer = (state = defaultClansReducerState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default clansReducer
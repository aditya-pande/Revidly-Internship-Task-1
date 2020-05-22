import { createStore, combineReducers } from  'redux'
import clansReducer from '../reducers/clansReducer'
import postsReducer from '../reducers/postsReducer'

export default () => {
    const store = createStore(
        combineReducers({
            clans: clansReducer,
            posts: postsReducer
        })
    )
    return store
}
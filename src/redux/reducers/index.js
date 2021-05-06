import { combineReducers } from 'redux'

import user from './user'
import repositories from './repositories'

const rootReducer = combineReducers({
	user,
	repositories
})

export default rootReducer

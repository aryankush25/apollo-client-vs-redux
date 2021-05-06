const initialState = {
	loading: false,
	error: null,
	data: null
}

const repositories = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_REPOSITORIES_REQUEST': {
			return {
				...state,
				loading: true
			}
		}

		case 'FETCH_REPOSITORIES_SUCCESS': {
			return {
				...state,
				loading: false,
				data: action.payload.repositories
			}
		}

		case 'FETCH_REPOSITORIES_FAILURE': {
			return {
				...state,
				loading: false,
				error: action.payload.error
			}
		}

		default:
			return state
	}
}

export default repositories

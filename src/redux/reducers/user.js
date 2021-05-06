const initialState = {
	loading: true,
	error: null,
	data: null
}

const user = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_USER_INFO_REQUEST': {
			return {
				...state,
				loading: true
			}
		}

		case 'FETCH_USER_INFO_SUCCESS': {
			return {
				...state,
				loading: false,
				data: action.payload.user
			}
		}

		case 'FETCH_USER_INFO_FAILURE': {
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

export default user

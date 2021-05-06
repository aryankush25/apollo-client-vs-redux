export const fetchUserInfoRequest = () => {
	return async (dispatch) => {
		dispatch({ type: 'FETCH_USER_INFO_REQUEST' })

		try {
			const requestOptions = {
				method: 'GET',
				redirect: 'follow'
			}

			const response = await fetch('https://api.github.com/users/aryankush25', requestOptions).then((response) =>
				response.json()
			)

			dispatch({
				type: 'FETCH_USER_INFO_SUCCESS',
				payload: {
					user: response
				}
			})
		} catch (error) {
			dispatch({ type: 'FETCH_USER_INFO_FAILURE', payload: { error } })
		}
	}
}

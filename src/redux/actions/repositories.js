export const fetchRepositoriesRequest = () => {
	return async (dispatch) => {
		dispatch({ type: 'FETCH_REPOSITORIES_REQUEST' })

		try {
			const requestOptions = {
				method: 'GET',
				redirect: 'follow'
			}

			const response = await fetch(
				'https://api.github.com/users/aryankush25/repos?sort=created&direction=desc&per_page=10&page=1',
				requestOptions
			).then((response) => response.json())

			dispatch({
				type: 'FETCH_REPOSITORIES_SUCCESS',
				payload: {
					repositories: response
				}
			})
		} catch (error) {
			dispatch({ type: 'FETCH_REPOSITORIES_FAILURE', payload: { error } })
		}
	}
}

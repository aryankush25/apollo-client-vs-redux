import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRepositoriesRequest } from '../actions/repositories'

export const useGetRepositories = () => {
	const dispatch = useDispatch()
	const { loading, error, data } = useSelector((state) => state.repositories)

	useEffect(() => {
		dispatch(fetchRepositoriesRequest())
	}, [dispatch])

	return { loading, error, data }
}

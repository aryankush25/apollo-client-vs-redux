import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserInfoRequest } from '../actions/user'

export const useGetUser = () => {
	const dispatch = useDispatch()
	const { loading, error, data } = useSelector((state) => state.user)

	useEffect(() => {
		dispatch(fetchUserInfoRequest())
	}, [dispatch])

	return { loading, error, data }
}

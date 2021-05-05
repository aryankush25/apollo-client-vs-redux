import { useQuery } from '@apollo/client'

import './App.css'
import { GET_USER, GET_REPOSITORIES } from './apollo/queries'

function App() {
	const { loading: loadingUser, error: errorUser, data: dataUser } = useQuery(GET_USER, {
		variables: { login: 'aryankush25' }
	})
	const { loading: loadingRepositories, error: errorRepositories, data: dataRepositories } = useQuery(
		GET_REPOSITORIES,
		{
			variables: { login: 'aryankush25' }
		}
	)

	console.log('####', {
		loadingRepositories,
		errorRepositories,
		dataRepositories
	})

	const bio = dataUser?.user?.bio
	const company = dataUser?.user?.company
	const followersCount = dataUser?.user?.followers?.totalCount
	const followingCount = dataUser?.user?.following?.totalCount
	const location = dataUser?.user?.location
	const login = dataUser?.user?.login
	const name = dataUser?.user?.name

	return (
		<div className='App'>
			{loadingUser ? (
				<div>Loading...</div>
			) : errorUser ? (
				<div>Error: {errorUser}</div>
			) : (
				<div>
					<div>Name: {name}</div>
					<div>Login: {login}</div>
					<div>Bio: {bio}</div>
					<div>Company: {company}</div>
					<div>Location: {location}</div>
					<div>Followers {followersCount}</div>
					<div>Following {followingCount}</div>
				</div>
			)}
		</div>
	)
}

export default App

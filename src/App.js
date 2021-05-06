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
	console.log('####', {
		loadingUser,
		errorUser,
		dataUser
	})

	const bio = dataUser?.user?.bio
	const company = dataUser?.user?.company
	const followersCount = dataUser?.user?.followers?.totalCount
	const followingCount = dataUser?.user?.following?.totalCount
	const location = dataUser?.user?.location
	const login = dataUser?.user?.login
	const name = dataUser?.user?.name

	const repositories = dataRepositories?.repositoryOwner?.repositories?.nodes
	const repositoriesCount = dataRepositories?.repositoryOwner?.repositories?.totalCount

	return (
		<div className='App'>
			<div>
				{loadingUser ? (
					<div className='loading'>Loading User...</div>
				) : errorUser ? (
					<div className='error'>Error in fetching Users: {errorUser.message}</div>
				) : (
					<div>
						<div className='repos-label'>My info :-</div>

						<div className='user-data-row'>
							<div className='user-label'>Name:</div> {name}
						</div>
						<div className='user-data-row'>
							<div className='user-label'>Login:</div> {login}
						</div>
						<div className='user-data-row'>
							<div className='user-label'>Bio:</div> {bio}
						</div>
						<div className='user-data-row'>
							<div className='user-label'>Company:</div> {company}
						</div>
						<div className='user-data-row'>
							<div className='user-label'>Location:</div> {location}
						</div>
						<div className='user-data-row'>
							<div className='user-label'>Followers </div>
							{followersCount}
						</div>
						<div className='user-data-row'>
							<div className='user-label'>Following </div>
							{followingCount}
						</div>
					</div>
				)}
			</div>

			<div>
				{loadingRepositories ? (
					<div className='loading'>Loading Repositories...</div>
				) : errorRepositories ? (
					<div className='error'>Error in fetching Repositories: {errorRepositories.message}</div>
				) : (
					<div>
						<div className='repos-label'>My latest 10 repos :-</div>
						<div className='repos-total'>Total Repositories count: {repositoriesCount}</div>

						<div>
							{repositories.map((repo) => {
								return (
									<div key={repo.id} className='repo'>
										<div className='user-data-row'>
											<div className='user-label'>Repo name:</div> {repo.name}
										</div>
										<div className='user-data-row'>
											<div className='user-label'>Repo description:</div> {repo.description}
										</div>
										<div className='user-data-row'>
											<div className='user-label'>Repo id:</div> {repo.id}
										</div>
										<div className='user-data-row'>
											<div className='user-label'>Repo owner name:</div> {repo.owner.login}
										</div>
									</div>
								)
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default App

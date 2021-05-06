import { useGetUser } from './redux/hooks/user'
import { useGetRepositories } from './redux/hooks/repositories'
import './App.css'

function App() {
	const { loading: loadingUser, error: errorUser, data: dataUser } = useGetUser()
	const { loading: loadingRepositories, error: errorRepositories, data: dataRepositories } = useGetRepositories()

	const bio = dataUser?.bio
	const company = dataUser?.company
	const followersCount = dataUser?.followers
	const followingCount = dataUser?.following
	const location = dataUser?.location
	const login = dataUser?.login
	const name = dataUser?.name

	const repositories = dataRepositories
	const repositoriesCount = dataRepositories?.length

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
							{repositories &&
								repositories.map((repo) => {
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

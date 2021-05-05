import { gql } from '@apollo/client'

export const GET_USER = gql`
	query Me($login: String!) {
		user(login: $login) {
			id
			login
			name
			company
			bio
			location
			followers {
				totalCount
			}
			following {
				totalCount
			}
		}
	}
`

export const GET_REPOSITORIES = gql`
	query Repository($login: String!) {
		repositoryOwner(login: $login) {
			id
			login
			avatarUrl
			repositories(privacy: PUBLIC, last: 10) {
				nodes {
					id
					name
					description
					owner {
						id
						login
					}
				}
				totalCount
			}
		}
	}
`

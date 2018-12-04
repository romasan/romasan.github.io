import axios from 'axios';

const API_REPOS_URL = 'https://api.github.com/users/{owner}/repos';

export const getRepos = owner => {
    return axios.get(
        API_REPOS_URL.replace('{owner}', owner),
        {
            'params': {
                'per_page': 1000
            }
        }
    )
        .then(resp => (resp && Array.isArray(resp.data) && resp.data || [])
            .filter(e => e && !e.name.includes('github'))
            .map(({name, description, html_url, homepage}) => ({
                name, description, html_url, homepage
            }))
        );
}

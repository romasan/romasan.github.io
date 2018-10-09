const API_REPOS_URL = 'https://api.github.com/users/{owner}/repos?per_page=1000';

export const getRepos = owner => {
    return fetch(API_REPOS_URL.replace('{owner}', owner))
        .then(resp => resp.json())
        .then(data => data.filter(e => e && !e.name.includes('github'))
            .map(({name, description, html_url, homepage}) => ({
                name, description, html_url, homepage
            }))
        );
}
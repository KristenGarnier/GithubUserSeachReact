import axios from 'axios';

function getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}`);
}

var helpers = {
    getGithubInfos(username) {
        return axios.all([getRepos(username), getUserInfo(username)])
            .then(axios.spread((repos, userInfo) => {
                return {
                    repos: repos.data,
                    bio: userInfo.data
                }
            }))
    }
};
export default helpers;
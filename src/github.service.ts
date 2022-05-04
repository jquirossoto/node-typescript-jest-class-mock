import GitHubClient from './github-client.js';

const client = new GitHubClient();

export const getProfile = async (username: string) => {
    return await client.getProfile(username);
};

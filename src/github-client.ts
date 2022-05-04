import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import GitHubProfile from './github-profile.interface';

export default class GitHubClient {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: 'https://api.github.com'
        });
    }

    getProfile(username: string): Promise<GitHubProfile> {
        return new Promise<GitHubProfile>((resolve, reject) => {
            this.instance
                .get<GitHubProfile>(`/users/${username}`)
                .then((response: AxiosResponse<GitHubProfile>) => {
                    resolve(response.data);
                })
                .catch((err: AxiosError) => {
                    reject(err);
                });
        });
    }
}

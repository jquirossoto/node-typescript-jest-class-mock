import GitHubProfile from './github-profile.interface';
import GitHubClient from './github-client';
import { getProfile } from './github.service';

jest.mock('./github-client');

describe('GitHub Service', () => {
    describe('getProfile', () => {
        it('Should get a GitHub profile', async () => {
            const profile: GitHubProfile = {
                login: 'login',
                id: 4935587,
                name: 'Jesús Quirós',
                company: '@ciandt',
                location: 'Costa Rica',
                followers: 100,
                following: 100,
                created_at: '2013-07-04T03:55:31Z',
                updated_at: '2022-01-15T23:50:20Z'
            };
            (GitHubClient.prototype.getProfile as jest.Mock).mockReturnValue(profile);

            const result: GitHubProfile = await getProfile('jquirossoto');

            expect(result).toEqual(profile);
        });
    });
});

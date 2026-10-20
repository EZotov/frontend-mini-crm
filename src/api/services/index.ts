import {CoreApiClient} from '../base-api';

export class MainApiService extends CoreApiClient {
    // Users
    protected getUsers() {
        return this.get<void>(`/v1/users`);
    }
}

export default new MainApiService();

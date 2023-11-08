import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserDetails } from './interface';

export class fakeData implements InMemoryDbService {
  createDb(): { data: UserDetails[] } {
    let data: UserDetails[] = [
      {
        id: 1,
        firstName: 'Emma',
        lastName: 'Lukemon',
        phoneNumber: 10,
      },
      {
        id: 2,
        firstName: 'Cyndy',
        lastName: 'Eli',
        phoneNumber: 14,
      },
    ];

    return { data };
  }
}

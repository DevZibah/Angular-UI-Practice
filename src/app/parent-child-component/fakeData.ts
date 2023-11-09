import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserDetails } from './interface';

export class fakeData implements InMemoryDbService {
  createDb(): { data: UserDetails[] } {
    let data: UserDetails[] = [
      {
        id: 1,
        firstName: 'Ella',
        lastName: 'Omebel',
        phoneNumber: 10876544,
      },
      {
        id: 2,
        firstName: 'Chy',
        lastName: 'Eliza',
        phoneNumber: 14422264,
      },
    ];

    return { data };
  }
}

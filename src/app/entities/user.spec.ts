import { User } from './user';

describe('User', () => {
  it('should be able to create user', () => {
    const user = new User({
      avatar: 'http://example.com/miguel.png',
      companyId: '123',
      name: 'Miguel Leite',
      email: 'miguel@example.com',
      password: 'password',
    });
    expect(user).toBeTruthy();
  });
});

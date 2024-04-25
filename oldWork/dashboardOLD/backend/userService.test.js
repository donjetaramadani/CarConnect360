const UserService = require('./user.js');

describe('UserService', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });

  // Test case for user registration
  it('should create a new user with the specified userRole', async () => {
    const result = await userService.create(
      'Donjeta Ramadani', // Corrected name
      'donjeta@gmail.com',
      'donjeta123',
      'admin', // Specify the userRole
      'female',
      '+1234567890',
      'Prishtine',
      'Kosovo'
    );

    expect(result.success).toBe(true);
    expect(result.userId).toBeDefined();
  });

  // Test case for invalid email format during registration
  it('should return an error if the email format is incorrect', async () => {
    const result = await userService.create(
      'Jane Doe',
      'invalid-email', // Invalid email format
      'password123',
      'regular',
      'female',
      '987654321',
      'Los Angeles',
      'USA'
    );

    expect(result.success).toBe(false);
    expect(result.msg).toBe('wrong email format');
  });

  // Test case for user login
  it('should successfully log in an existing user', async () => {
    const result = await userService.login('donjeta1@gmail.com', 'Donjeta123');

    expect(result.success).toBe(true);
    expect(result.token).toBeDefined();
    // Add more assertions as needed
  });

  // Test case for incorrect password during login
  it('should return an error if the password is incorrect during login', async () => {
    const result = await userService.login('donjeta1@gmail.com', 'IncorrectPassword');

    expect(result.success).toBe(false);
    expect(result.msg).toBe('Wrong credentials');
    // Add more assertions as needed
  });

  // Add more test cases here to cover other methods of UserService

});

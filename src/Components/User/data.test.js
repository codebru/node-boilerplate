const data = require('./data');

data.remove('test@test.com');

it('creates a user', async () => {
  const response = await data.create('1234', 'test@test.com', 'This is my bio', '');
  expect(response).toEqual(true);
});

it('reads a user', async () => {
  const response = await data.read('test@test.com');
  expect(response.bio).toEqual('This is my bio');
});

it('updates a user', async () => {
  await data.create('bio', 'This is my new bio');
  const response = await data.read('test@test.com');
  expect(response.bio).toEqual('This is my new bio');
});

it('deletes a user', async () => {
  let errors = 0;
  await data.create('1234', 'test@test.com', 'This is my bio', '');
  try {
    await data.read('test@test.com');
  } catch (err) {
    errors += 1;
  }
  expect(errors).toEqual(1);
});

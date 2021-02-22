const data = require('./data');

beforeEach(async () => {
  await data.remove('test@test.com');
});

it('creates and reads a user', async () => {
  let createResponse = null;
  let readResponse = null;

  createResponse = await data.create('1234', 'test@test.com', 'This is my bio', '');
  readResponse = await data.read('test@test.com');

  expect(createResponse).toEqual(true);
  expect(readResponse.bio).toEqual('This is my bio');
});

it('updates a user', async () => {
  let createResponse = null;
  let readResponse = null;

  createResponse = await data.create('1234', 'test@test.com', 'This is my bio', '');
  await data.update('1234', 'test@test.com', 'This is my bio edited', '');
  readResponse = await data.read('test@test.com');

  expect(createResponse).toEqual(true);
  expect(readResponse.bio).toEqual('This is my bio edited');
});


it('deletes a user', async () => {
  let errors = 0;
  await data.create('1234', 'test@test.com', 'This is my bio', '');
  await data.remove('test@test.com');
  try {
    await data.read('test@test.com');
  } catch (err) {
    errors += 1;
  }
  expect(errors).toEqual(1);
});

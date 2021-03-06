import { ADD_POST, addPost, DELETE_POST, deletePost } from '../actions/postActions';

describe('add post', () => {
  it('creates an ADD_POST action', () => {
    const action = addPost({
      title: 'Read It Here First',
      author: 'Boss Of You',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    });

    expect(action).toEqual({
      type: ADD_POST,
      payload: {
        title: 'Read It Here First',
        author: 'Boss Of You',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    });
  });

  it('creates a DELETE_POST action', () => {
    const action = deletePost(3);

    expect(action).toEqual({
      type: DELETE_POST,
      payload: 3
    });
  });
});
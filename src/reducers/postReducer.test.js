import reducer from './postReducer';
import { addPost, DELETE_POST, deletePost } from '../actions/postActions';

describe('postReducer', () => {
  it('handles the ADD_POST ACTION', () => {
    const state = [];
    const action = addPost({
        title: 'Read It Here First',
        author: 'Boss Of You',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        title: 'Read It Here First',
        author: 'Boss Of You',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]);
  });

  it('handles the DELETE_POST action', () => {
    const state = [];

    const action = deletePost(0);

    const newState = reducer(state, action);

    expect(newState).toEqual([
    ])

  })
});

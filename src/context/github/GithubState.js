import React, { useReducer } from 'react';
import { GithubContext } from './githubContext';
import { githubReduser } from './githubReduser';
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../types';

export const GithubState = ({ children }) => {

  const initialState = {
    user: {},
    users: {},
    loading: {},
    repos: [],
  }

  const [state, dispatch] = useReducer(githubReduser, initialState);

  const search = async value => {
    setLoading();
    //some request

    dispatch({
      type: SEARCH_USERS,
      payload: [],
    })
  }

  const getUser = async name => {
    setLoading();
    //...

    dispatch({
      type: GET_USER,
      payload: [],
    })
  }

  const getRepos = async name => {

    setLoading();
    //...

    dispatch({
      type: GET_REPOS,
      payload: [],
    })
  }

  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  const setLoading = () => dispatch({ type: SET_LOADING })

  const { user, users, repos, loading } = { state };

  return (
    <GithubContext.Provider
      value={{
        search, setLoading, getUser, getRepos, clearUsers,
        user, users, repos, loading
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
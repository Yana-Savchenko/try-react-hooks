import React, { useReducer } from 'react';
import axios from 'axios';

import { GithubContext } from './githubContext';
import { githubReduser } from './githubReduser';
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../types';


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

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

    const res = await axios.get(
      `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    })
  }

  const getUser = async name => {
    setLoading();
    
    const res = await axios.get(
      `https://api.github.com/users/${name}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )

    dispatch({
      type: GET_USER,
      payload: res.data,
    })
  }

  const getRepos = async name => {

    setLoading();
    
    const res = await axios.get(
      `https://api.github.com/users/${name}/repos?per_page=5&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )

    dispatch({
      type: GET_REPOS,
      payload: res.data,
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
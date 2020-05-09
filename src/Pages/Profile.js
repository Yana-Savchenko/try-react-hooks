import React, { useContext, useEffect } from 'react';
import { GithubContext } from '../context/github/githubContext';
import { Link } from 'react-router-dom';
import { Repos } from '../components/Repos';

export const Profile = ({ match }) => {

  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Loading...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos,
    public_gists
  } = user;
  return (
    <>
      <Link to="/">Back to Home</Link>

      <div className="card mb-4 mt-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt="name"
                style={{ width: '150px' }}
              />
              <h3>{name}</h3>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              }
              <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open on Github</a>
              <ul className="list-group list-group-flush">
                {login &&
                  <li className="list-group-item">
                    <strong>Username: </strong> {login}
                  </li>}
                {company &&
                  <li className="list-group-item">
                    <strong>Company: </strong> {company}
                  </li>}
                {blog &&
                  <li className="list-group-item">
                    <strong>Website: </strong> {blog}
                  </li>}
              </ul>
              <div className="badge badge-primary mr-1">Followers: {followers}</div>
              <div className="badge badge-success mr-1">Following: {following}</div>
              <div className="badge badge-info mr-1">Repos: {public_repos}</div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h5 className="col">
          Repositories:
      </h5>
      </div>
      <Repos repos={repos} />
    </>
  )
}
import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';

import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/posts/" exact>Home</NavLink></li>
              <li>
                <NavLink
                  to={{
                    // Pathname below will always create absolute path irrestpective of the presence of the / 
                    // before the path name if you want a relative path use this.props.match.url + '/new-post'
                    pathname: "/new-post",
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                  activeClassName="active">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path='/new-post' component={AsyncNewPost} />
          <Route path='/posts' component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path='/' component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
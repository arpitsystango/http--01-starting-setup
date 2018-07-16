import React, { Component } from 'react';
import axiosInstance from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import { Route } from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    // console.log(this.props);

    // axiosInstance;
    // debugger
    // console.log(axiosInstance.defaults);
    axiosInstance.get('/posts').then(res => {
      const posts = res.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Arpit'
        }
      });
      this.setState({ posts: updatedPosts });
    }).catch(error => {
      this.setState({ error: true });
    });
  }

  postSelectedHandler = (id) => {
    // this.props.history.push('/posts/' + id);
    this.props.history.push({ pathname: '/posts/' + id });
  }

  render() {
    let posts = "Something went wrongs!!!";
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={this.postSelectedHandler.bind(this, post.id)}
          />
        );
      });
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
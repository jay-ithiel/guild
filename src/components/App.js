import React from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter, Route } from 'react-router';

import '../stylesheets/sass/all.scss';

import Navbar from './navbar/navbar';
import Home from './home/home';
import SignInPage from './session/signin_page';
import BlogForm from './blogs/blog_form/blog_form_container';
import Blog from './blogs/blog';
import Blogs from './blogs/blogs';

import { requestBlogs } from '../actions/blog_actions';

class App extends React.Component {
  componentDidMount() {
    this.props.requestBlogs();
  }

  render() {
    return (
      <div id='app'>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/signin' component={SignInPage}></Route>
          <Route exact path='/blogs/new'  component={BlogForm}></Route>
          <Route exact path='/blogs/edit/:id' component={BlogForm}></Route>
          <Route exact path='/blogs/user' component={Blogs}></Route>
          <Route exact path='/blogs/:id' component={Blog}></Route>
          {/* <Route exact path='/users/:username' component={Profile}></Route> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  blogs: state.blogs.index,
  blogIndex: state.blogs.blogIndex
});

const mapDispatchToProps = dispatch => ({
  requestBlogs: () => dispatch(requestBlogs())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));


// import React, { Component } from 'react';
// import { Provider, connect } from 'react-redux';
// import { Switch, withRouter, Router, Route } from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';
//
// // Components
// import Navbar from './navbar/navbar';
// import Home from './home/home';
// import SignInPage from './session/signin_page';
// import BlogForm from './blogs/blog_form/blog_form_container';
// import Blog from './blogs/blog';
// import Blogs from './blogs/blogs';
// import { requestBlogs } from '../actions/blog_actions';
//
// // Loads dependencies to compile SASS to CSS
// // require("!style-loader!css-loader!sass-loader!../stylesheets/sass/all.scss");
// import '../stylesheets/sass/all.scss';
//
// class App extends Component {
//     componentDidMount() {
//         this.props.requestBlogs();
//     }
//
//     render() {
//         return (
//             <Provider store={ this.props.store }>
//                 <Router history={ createBrowserHistory() }>
//                     <div id='app'>
//                         <Navbar />
//
//                         <Switch>
//                             <Route exact path='/' component={Home}></Route>
//                             <Route path='/signin' component={SignInPage}></Route>
//                             <Route exact path='/blogs/new'  component={BlogForm}></Route>
//                             <Route exact path='/blogs/edit/:id' component={BlogForm}></Route>
//                             <Route exact path='/blogs/user' component={Blogs}></Route>
//                             <Route exact path='/blogs/:id' component={Blog}></Route>
//                         </Switch>
//                     </div>
//                 </Router>
//             </Provider>
//         );
//     }
// }
//
// const mapStateToProps = state => ({
//     currentUser: state.session.currentUser,
//     blogs: state.blogs.index,
//     blogIndex: state.blogs.blogIndex
// });
//
// const mapDispatchToProps = dispatch => ({
//     requestBlogs: () => dispatch(requestBlogs())
// });
//
// export default withRouter(
//     connect(mapStateToProps, mapDispatchToProps)(App)
// );

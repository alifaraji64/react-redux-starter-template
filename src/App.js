import React from 'react'
import './App.css'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
      postId: 2
    }
  }

   handleChange=(event)=> {
    this.setState({ value: event.target.value })
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.dispatch({
      type:'ADD_POST',
      payload:{id:this.state.postId, title:this.state.value}
    })
    this.setState({ postId: this.state.postId + 1 })
  }

  deletePost = (index)=>{
    console.log(index);
    this.props.dispatch({
      type:'DELETE_POST',
      payload:{index}
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <div>
              <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </form>
          <ul>
            {this.props.posts && this.props.posts.map((post,index) => (
              <li key={post.id} onClick={()=>this.deletePost(index)}>{post.title}</li>
            ))}
          </ul>
        </header>
      </div>
    )
  }
}

//this function determines which state from out store we want to pull-in
const mapStateToProps = state => {
  return { posts: state.posts, signUpModal:state.signUpModal }
}
//this function gives us access to dispatch method
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
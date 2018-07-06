import React, {Component, Fragment} from 'react';
import Post from './post';

class PostsList extends Component{

    // constructor(props) {
    //     super(props);
    //     debugger;
    // }
    //
    // // static defaultProps = {
    // //     default;
    // // }
    //
    // // сработает, когда нам нужно будет убрать какой-то component из DOM
    // componentWillMount(){
    //     debugger;
    // }
    //
    // componentDidMount(){
    //     debugger;
    // }
    //
    // //обязательно должен вернуть true или false
    // shouldComponentUpdate(nextProps, nextState){
    //     debugger;
    //     return true;
    // }
    //
    // componentWillUpdate(){
    //     debugger;
    // }
    //
    // componentDidUpdate(){
    //     debugger;
    // }

    state = {
        posts: [{
            title: 'FC Barcelona',
            content: 'Barca - mes que un club',
            likes: 0
        }, {
            title: 'AC Milan',
            content: 'Associazione Calcio Milan',
            likes: 0
        }, {
            title: 'FC Liverpool',
            content: 'Youll never walk alone',
            likes: 0
        }],
        title: '',
        content: ''
    };

    addPost = () => {
        this.setState((prevState) => {
            return {
                posts: [{
                    title: prevState.title,
                    content: prevState.content,
                    likes: 0
                }, ...prevState.posts]}
        })
    };

    changeTitle = (event) => {
        this.setState({
          title: event.target.value
        })
    };

    changeContent = (event) => {
        this.setState({
            content: event.target.value
        })
    };

    changeLikes(index, liked) {
        const changer = liked ? 1 : -1;
        this.setState((prevState) => {
            const copyPosts = [...prevState.posts];
            copyPosts[index].likes = prevState.posts[index].likes + changer;
            return {
                posts: copyPosts
            }
        })
    }

    render() {
        debugger;
        return (
            <Fragment>
                <h2>All posts</h2>
                <input type="text"
                       placeholder='new title post'
                       value={this.state.title}
                       onChange={this.changeTitle}
                />
                <p>
                    <textarea placeholder='new content post'
                              onChange={this.changeContent}
                    >
                        {this.state.content}
                    </textarea>
                </p>
                <button onClick={this.addPost}>Add Post</button>
                {this.state.posts.map((post, index) => {
                    return (
                        <Post title={post.title}
                              likes={post.likes}
                              onLike={this.changeLikes.bind(this, index)}

                        >
                            {post.content}
                        </Post>
                    )
                })}
            </Fragment>
        )
    }
}

export default PostsList;
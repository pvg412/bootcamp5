import React,{Component}  from 'react';
import PropTypes from 'prop-types';

class Post extends Component{
    static propTypes = {
        onLike: PropTypes.func,
        likes: PropTypes.number,
        title: PropTypes.string.isRequired,
        children: PropTypes.any.isRequired
    };

    static defaultProps = {
        onLike: () => {
        },
        likes: 0,
    }

    state = {
        liked: false,
        likes: 0
    };

    // передаем callback-(prevState) функцию
    toggleLike() {
        this.setState((prevState) => {
            const liked = !prevState.liked;
            this.props.onLike(liked);
            return {
                liked: liked
            }
        })
    }

    render(){
        let opacity = this.state.liked ? 1 : 0.5;
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.children}</p>
                {this.props.likes}
                <img src='/like.png'
                     alt='#'
                     width='25'
                     style={{opacity}}
                     /*в этом onClick мы жестко(bind) привязались к картинке*/
                     onClick={this.toggleLike.bind(this)}/>
                {this.state.likes}
            </div>
            )
    }
}

export default Post;

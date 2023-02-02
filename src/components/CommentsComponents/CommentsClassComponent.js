import {Component} from "react";
import {Comment} from "./Comment";


class Comments extends Component{
    constructor(props) {
        super(props);
        this.state={
            comments:[]
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments').then(resp => resp.json())
            .then(comment => this.setState({comments:comment}))
    }

    render() {
        const {comments} = this.state
        return (
            <div>

                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

            </div>
        )
    }
}
export {Comments}
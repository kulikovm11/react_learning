import {Component} from "react";
import {User} from "./User";

class Users extends Component{
    constructor(props) {
        super(props);
        this.state = {

            users:[]
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(resp=>resp.json())
            .then(user => this.setState({

                users:user
            }))

    }



    render() {
        const {users} = this.state

        return(
            <div>

                {users.map(user=><User key={user.id} user={user}/>)}



            </div>
        )
    }

}

export {Users}
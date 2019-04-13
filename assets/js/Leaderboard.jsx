import React from 'react';
import _ from 'lodash';
import api from './api';
import WallPosts from './WallPosts';
// TODO: Delete this completely unused file
class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [], 
    }; 
  
    this.fetchUser();  
  }

  fetchUser() {
    console.log("fetch leaders");
      let token = this.props.session ? this.props.session.token : null;
      api.fetch_users(token, this.props.match.params.id, this.updateState.bind(this));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params != this.props.match.params) {
      this.fetchUser();
    }
  }


  updateState(state) {
    this.setState(state);
  }

  render() {
      let rows = _.map(this.state.users, (uu) => <UserOnBoard key={uu.id} user={uu} />);
      console.log(this.state.users)
      return <div className="row">
            <div className="col-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                      <th>Names</th>
                      <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </table>
            </div>
          </div>;

  }
    
}


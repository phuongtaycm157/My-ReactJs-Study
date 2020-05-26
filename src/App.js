import React from 'react';

import './App.css';
import FollowUserListItem from './components/FollowUserListItem';

const userList = [
  {name: 'Phong0908', avatarUrl: 'https://cdn.glitch.com/d408507d-49c6-4771-ad43-408bf2b66c1a%2Favatar.jpg?v=1590485011175'},
  {name: 'Phong0908', avatarUrl: 'https://cdn.glitch.com/d408507d-49c6-4771-ad43-408bf2b66c1a%2Favatar.jpg?v=1590485011175'},
  {name: 'Phong0908', avatarUrl: 'https://cdn.glitch.com/d408507d-49c6-4771-ad43-408bf2b66c1a%2Favatar.jpg?v=1590485011175'}
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userList
    }
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <div className="group-title">
          <div className="title">Gợi ý cho bạn</div>
          <a href="/">Xem tất cả</a>
        </div>
        {users.length > 0 && users.map((user, index) =>
         <FollowUserListItem key={index} user={user} /> 
        )}
      </div>
    )
  }
}

export default App;

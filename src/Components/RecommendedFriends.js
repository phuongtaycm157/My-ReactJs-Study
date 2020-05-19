import React from 'react';
import '../Styles/RecommendedFriends.css';

function FollowFriendListItem (props) {
  return (
    <div className="follow-friend">
      <div 
        className="avatar"
        style={{backgroundImage:"url("+props.user.avatar+")"}}
      >
      </div>
      <div className="info">
        <div>{props.user.username}</div>
        <div>Gợi ý cho bạn</div>
      </div>
      <a href="#">Theo dõi</a>
    </div>
  );
}

class RecommendedFriends extends React.Component {
  render() {
    return (
      <div className="recommended-friends">
        <div className="title">
          <div>Gợi ý cho bạn</div>
          <a href="#">Xem tất cả</a>
        </div>
        {this.props.friends.map((item, i) => {
          return <FollowFriendListItem key={i} user={item} />
        })}
      </div>
    )
  }
}

export default RecommendedFriends
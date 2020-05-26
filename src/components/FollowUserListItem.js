import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './FollowUserListItem.css';

class FollowUserListItem extends Component {
  render() {
    const { name, avatarUrl } = this.props.user;
    return (
      <div className="FollowUserListItem">
        <div className="avatar" style={{backgroundImage: 'url('+avatarUrl+')'}}></div>
        <div className="group-name">
          <div className="name">{name}</div>
          <small>Gợi ý cho bạn</small>
        </div>
        <a href='/'>Theo dõi</a>
      </div>
    );
  }
}

FollowUserListItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  })
}

export default FollowUserListItem;
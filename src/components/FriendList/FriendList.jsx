import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem"
import { List } from "./FriendList.styled"

export const FriendList = ({ friends }) => {

  return <List class="friend-list">
    {friends.map(friend => {
      return <FriendListItem item={friend} />
    })}

  </List>


}

FriendList.propTypes = {
  friends: PropTypes.array

}
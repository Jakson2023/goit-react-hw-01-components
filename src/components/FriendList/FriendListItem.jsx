import PropTypes from 'prop-types';
import { LiItems, Status } from "./FriendListItem.styled"
export const FriendListItem = ({ item }) => {
    return (<LiItems key={item.id}>
        <Status class="status" online={item.isOnline} >{item.isOnline}</Status>
        <img class="avatar" src={item.avatar} alt="User avatar" width="48" />
        <p class="name">{item.name}</p>
    </LiItems>)
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string

}
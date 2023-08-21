import PropTypes from 'prop-types';
import { List, ListItem, Description } from './Profile.styled';
export const Profile = ({ items }) => {
  return <div class="profile">
    <Description class="description">
      <img
        src={items.avatar}
        alt="User avatar"
        class="avatar"
      />
      <p class="name">{items.username}</p>
      <p class="tag">{items.tag}</p>
      <p class="location">{items.location}</p>
    </Description>

    <List class="stats">
      <ListItem>
        <span class="label">Followers</span>
        <span class="quantity">{items.stats.followers}</span>
      </ListItem>
      <ListItem>
        <span class="label">Views</span>
        <span class="quantity">{items.stats.views}</span>
      </ListItem>
      <ListItem>
        <span class="label">Likes</span>
        <span class="quantity">{items.stats.likes}</span>
      </ListItem>
    </List>
  </div>
}


Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
}

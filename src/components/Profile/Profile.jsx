import PropTypes from 'prop-types';
import { List, ListItem, Description, Images, ProfileCard, Name, Quantity } from './Profile.styled';
export const Profile = ({ items }) => {
  return <ProfileCard class="profile">
    <Description class="description">
      <Images
        src={items.avatar}
        alt="User avatar"
        class="avatar"
      />
      <Name class="name">{items.username}</Name>
      <p class="tag">{items.tag}</p>
      <p class="location">{items.location}</p>
    </Description>

    <List class="stats">
      <ListItem>
        <span class="label">Followers</span>
        <Quantity class="quantity">{items.stats.followers}</Quantity>
      </ListItem>
      <ListItem>
        <span class="label">Views</span>
        <Quantity class="quantity">{items.stats.views}</Quantity>
      </ListItem>
      <ListItem>
        <span class="label">Likes</span>
        <Quantity class="quantity">{items.stats.likes}</Quantity>
      </ListItem>
    </List>
  </ProfileCard>
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

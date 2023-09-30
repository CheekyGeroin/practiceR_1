import PropTypes from 'prop-types';
import {
  ProfileCard,
  DescriptionCard,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileCard>
      <DescriptionCard>
        <Avatar src={avatar} alt={username}  />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionCard>

      <StatsList>
        <StatsItem>
          <Label class="label">Followers</Label>
          <Quantity class="quantity">{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label class="label">Views</Label>
          <Quantity class="quantity">{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label class="label">Likes</Label>
          <Quantity class="quantity">{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

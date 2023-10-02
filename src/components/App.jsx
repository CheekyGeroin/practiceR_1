import profile from 'data/user.json'
import data from 'data/data.json'
import friends from 'data/friends.json'
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics"; 
import {FriendList} from './FriendList/FriendList'

export const App = () => {
  return (
    <>
      <Profile username={profile.username} tag={profile.tag} location={profile.location} avatar={profile.avatar} followers={profile.stats.followers} views={profile.stats.views} likes={profile.stats.likes} />

      <Statistics title={"Upload stats"} data={data} />

      <FriendList friends={friends} />
    </>
  );
};

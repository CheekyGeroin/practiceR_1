import { Profile } from "./Profile/Profile";
import profile from 'data/user.json'

export const App = () => {
  return (
    <>
      <Profile username={profile.username} tag={profile.tag} location={profile.location} avatar={profile.avatar} followers={profile.stats.followers} views={profile.stats.views} likes={profile.stats.likes} />
    </>
  );
};

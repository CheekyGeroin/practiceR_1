import { Profile } from "./Profile/Profile";
import profile from 'data/user.json'
import data from 'data/data.json'
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <>
      <Profile username={profile.username} tag={profile.tag} location={profile.location} avatar={profile.avatar} followers={profile.stats.followers} views={profile.stats.views} likes={profile.stats.likes} />

      <Statistics title={"Upload stats"} data={data} />
    </>
  );
};

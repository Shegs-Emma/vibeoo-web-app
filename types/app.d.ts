import { Schema, model, Document, Model } from 'mongoose';

interface IUser extends Document {
  username: String;
  googleId?: String;
  twitterId?: String;
  facebookId?: String;
  email: String;
  signupMethod: String;
  profilePicture: String;
  showsFollowing: Array<String>;
  playlist: Array<String>;
}

interface IEpisode extends Document {
  showId: string;
  episodeTitle: string;
  episodeDescription: string;
  episodeAudioUrl: string;
  episodeLogo: string;
  episodePlayCount: string;
  episodeSlug: string;
  episodeCategory: string;
  showSlug: string;
}

inteface EpisodeProps{
  _id: string;
  episodeTitle: string;
  episodeDescription: string;
  episodeAudioUrl: string;
  episodeLogo: string;
  episodeSlug: string;
  showSlug: string;
}


export { IUser, IEpisode, EpisodeProps };
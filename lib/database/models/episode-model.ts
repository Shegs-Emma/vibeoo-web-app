import { Schema, model, Document, Model } from 'mongoose';
import { IUser, IEpisode } from '../../../types/app.d';


const episodeSchema: Schema<IEpisode> = new Schema({
  showId: { type: Schema.Types.ObjectId, ref: 'Show', required: true },
  episodeTitle: { type: String, required: true },
  episodeDescription: { type: String, required: true },
  episodeAudioUrl: { type: String, required: true },
  episodeLogo: { type: String, required: true },
  episodePlayCount: { type: Number, required: true },
  episodeSlug: { type: String, required: true },
  episodeCategory: { type: String, required: true },
  showSlug: { type: String, required: true },
}, { timestamps: true } );

// eslint-disable-next-line import/no-mutable-exports
let Episode: Model<IEpisode>;

try {
  Episode = model<IEpisode>('episode');
} catch (error) {
  Episode = model<IEpisode>('episode', episodeSchema, 'episodes');
}

export default Episode;

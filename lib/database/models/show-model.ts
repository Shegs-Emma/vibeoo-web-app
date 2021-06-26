import { Schema, model, Document, Model } from 'mongoose';

interface IShow extends Document {
  hostName: string;
  showName: string;
  showCategory: string;
  showLogo: string;
  showDescription: string;
  showEpisodeCount: number;
  showFollowersCount: number;
  showSlug: string;
}


const showSchema: Schema<IShow> = new Schema({
  hostName: { type: String, required: true },
  showName: { type: String, required: true },
  showCategory: { type: String, required: true },
  showLogo: { type: String, required: true },
  showDescription: { type: String, required: true },
  showEpisodeCount: { type: Number, required: true },
  showFollowersCount: { type: Number, required: true },
  showSlug: { type: String, required: true }
}, { timestamps: true } );

// eslint-disable-next-line import/no-mutable-exports
let Show: Model<IShow>;

try {
  Show = model<IShow>('show');
} catch (error) {
  Show = model<IShow>('show', showSchema, 'shows');
}

export default Show;

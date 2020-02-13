const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

SpotSchema.virtual('thumbnail_url').get(function() {
  const thumb_file = path.resolve(
    __dirname,
    '..',
    '..',
    `uploads/${this.thumbnail}`,
  );
  let resolve_url = '';

  if (fs.existsSync(thumb_file)) {
    resolve_url = `${process.env.SERVER_URL}:${process.env.PORT}/files/${this.thumbnail}`;
  } else {
    resolve_url = `${process.env.SERVER_URL}:${process.env.PORT}/files/spot-placeholder.png`;
  }
  return resolve_url;
});

module.exports = mongoose.model('Spot', SpotSchema);

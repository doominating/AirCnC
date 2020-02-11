const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

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
  const thumb_file = path.resolve(__dirname, '..', `uploads/${this.thumbnail}`);
  let resolve_url = '';

  if (fs.existsSync(thumb_file)) {
    resolve_url = `http://localhost:3333/files/${this.thumbnail}`;
  } else {
    resolve_url = 'http://localhost:3333/files/spot-placeholder.png';
  }
  return resolve_url;
});

module.exports = mongoose.model('Spot', SpotSchema);

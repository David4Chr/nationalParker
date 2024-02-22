var mongoose = require('mongoose');

var NationalParkSchema = new mongoose.Schema({
namn: String,
kategori: String,
plats: String,
area: String, 
beskrivning: String
},
{
collection: 'nationalparker'
});

module.exports = mongoose.model('NationalParkModel', NationalParkSchema);
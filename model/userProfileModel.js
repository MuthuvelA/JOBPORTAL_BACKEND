const mongo = require('mongoose');
const db = require('../config/db');

const { Schema } = mongo;

const profileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    currentWork: {
        type: String,
        required: true
    },
    selectedSkill: {
        type: String
    }
});

const ProfileModel = db.model("Profile", profileSchema);

module.exports = ProfileModel;

"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    pseudo: { type: String, unique: true },
    mail: { type: String, unique: true },
    password: String,
    date: Date,
    admin: Boolean
});
exports.User = mongoose_1.model('User', exports.userSchema, 'users');
//export {User, IUser};

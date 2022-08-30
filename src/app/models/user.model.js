const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
const { USER } = require('../../config/constants')

const UserSchema = new Schema({
    firstName: { type: String, trim: true, required: true, minLength: 3, maxLength: 30 },
    lastName: { type: String, trim: true, required: true, minLength: 3, maxLength: 50 },
    email: { type: String, maxlength: 255, required: true, unique: true, trim: true },
    password: { type: String, maxlength: 255, required: true, trim: true },
    // isAdmin: { type: Boolean, default: false },
    isAdmin: {
      type: String,
      enum: Object.values(USER.ROLE),
      default: USER.ROLE.CUSTOMER,
      required: true
    },
    phone: { type: String, unique: true, trim: true},
    googleId: { type: String, trim: true, required: false },
    facebookId: { type: String, trim: true, required: false },
    status: { type: String }
  }, {
    timestamps: true
  });

// reference https://mongoosejs.com/docs/tutorials/virtuals.html#virtuals-with-lean
UserSchema.virtual('fullName').
  get(function () { return `${this.firstName} ${this.lastName}`; }).
  set(function (v) {
    // Set fullname = firstName + lastName
    // indexOf(searchElement, fromIndex)
    const firstName = v.substring(0, v.indexOf(' ')); 
    const lastName = v.substring(v.indexOf(' ') + 1); 
    this.set({ firstName, lastName });
  });

UserSchema.plugin(mongooseLeanVirtuals);

module.exports = mongoose.model('User', UserSchema);
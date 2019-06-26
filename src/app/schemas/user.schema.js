const mongoose = require("mongoose")

const AddressSchema = mongoose.Schema({
  line_1: String,
  line_2: String,
  zip_code: String,
  city: String,
  state: String,
  country: String,
})

const PhoneSchema = mongoose.Schema({
  country_code: String,
  area_code: String,
  number: String
})

const UserSchema = mongoose.Schema(
  {
    status: {
      type: String,
      enum: ['active', 'deactive', 'without_signature'],
      default: 'active'
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    birthdate: Date,
    phones: {
      home_phone: PhoneSchema,
      mobile_phone: PhoneSchema
    },
    roles: {
      type: String,
      enum: ["admin", "client"],
      default: "client",
      required: true
    },
    gateway_data: {

    },
    adress: AddressSchema
  },
  {
    timestamp: true
  }
)

module.exports = mongoose.model('User', UserSchema)

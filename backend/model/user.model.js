const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
    },
    email: {
      type: String,
      unquie: true,
      required: [true, 'email is required'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
    number: {
      type: String,
      unique: true,
      required: [true, 'number is required'],
    },
    wishlist: {
      type: [Object],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.createuser = async (data) => {
  const { username } = data;
  const user = await usermodel.findOne({ username });
  if (user) {
    const err = new Error();
    err.message = 'user already exists';
    throw err;
  } else {
    const updatedData = await usermodel.create(data);
    console.log('the updateddata is ', updatedData);
    return updatedData;
  }
};

userSchema.statics.findUser = async (number) => {
  const data = (await usermodel.findOne({ number }))?.toObject();

  if (!data) {
    const err = new Error();
    err.message = 'user doesnot exist';
    throw err;
  }
  return data;
};

userSchema.statics.addtowishlist = async (number, hotel) => {
  console.log({ hotel, number });
  const updatedData = await usermodel.updateOne(
    { number },
    {
      $addToSet: { wishlist: { ...hotel } },
    }
  );

  if (updatedData.modifiedCount) {
    const data = await usermodel.findUser(number);
    return data;
  }
};

userSchema.statics.removefromwishlist = async (number, hotel) => {
  const data = await usermodel.updateOne(
    { number, 'wishlist._id': hotel._id },
    {
      $pull: { wishlist: { _id: hotel._id } },
    }
  );
  if (data.modifiedCount) {
    const user = await usermodel.findUser(number);
    return user;
  }
};
const usermodel = model('User', userSchema);

module.exports = usermodel;

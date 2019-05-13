if (process.env.NODE_ENV === "production") {
  // we are in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  // we are in development - return dev keys
  module.exports = require("./dev");
}

// mongodb+srv://admin:<password>@cluster0-vudq5.mongodb.net/test?retryWrites=true

// prod clientID 960954589366-0q97giliq1t7oao0tlr3skqmcmrmvobj.apps.googleusercontent.com

// prode secret client 3XzVVP6iC-rHztk5dVbxu2NU

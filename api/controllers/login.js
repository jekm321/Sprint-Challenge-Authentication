const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');
const User = require('../models/userModels');

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Invalid Username/Password' });
      return;
    }
    if (user === null) {

      res.status(422).json({ error: 'No user with that username in our DB' }); //bad practice, can give away what is a right username or not
      return;
    }
    user.checkPassword(password, (nonMatch, hashMatch) => {
      // This is an example of using our User.method from our model.
      if (!hashMatch) {
        res.status(422).json({ error: 'passwords dont match' });  //bad practice, confirms the username is correct but the password is wrong
        return;
      } else {
        const payload = {
          username: user.username
        }; // what will determine our payload.
        const token = jwt.sign(payload, mysecret); // creates our JWT with a secret and a payload and a hash.
        res.json({ token }); // sends the token back to the client
      }
    });
  });
};

module.exports = {
  login
};

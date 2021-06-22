const { checkUsernameFree, checkFields, verifyReturningUser, makeToken } = require('./auth-middleware');
const Auth = require('./auth-model')
const bcrypt = require('bcryptjs')
const router = require('express').Router();

router.post('/register', checkUsernameFree, checkFields, (req, res, next) => {
    res.end('implement register, please!');
    const {username, password} = req.body
    const trimUser = username.trim()
    const hash = bcrypt.hashSync(password, 8)
    console.log(hash)
  
    Auth.add({username: trimUser, password: hash})
    .then(user => {
      res.status(201).json(user)
    })
    .catch(next)
    
  });

  router.post('/login', checkFields, verifyReturningUser, (req, res, next) => {
    const {username} = req.body
    
    Auth.findBy({username})
      .then(([user]) => {
        const token = makeToken(user)
        res.json({
          message: `welcome, ${user.username}`,
          token
        })
      })
      .catch(next)
});

module.exports = router;
  
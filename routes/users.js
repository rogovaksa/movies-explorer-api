const router = require('express').Router();
const { updateUserProfileValidation } = require('../utils/validation');
const {
  updateUserProfile,
  getCurrentUser,
} = require('../controllers/users');

router.get('/me', getCurrentUser);

router.patch(
  '/me',
  updateUserProfileValidation,
  updateUserProfile,
);

module.exports = router;

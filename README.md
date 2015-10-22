Facebook Accounts Hook
======================

When a user login through Facebook, this package grabs
user's Facebook profile data and save them at `user.profile`.

User document after:
```js
{
  profile: {
    avatar: '...',
    name: '...',
    facebookId: '...'
  },

  emails: [
    {
      user.facebook@email.com,
      verified: true 
    }
  ]
}
```
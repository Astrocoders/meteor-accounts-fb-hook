Accounts = {};

Accounts.onCreateUser = function(options, user){

}

Accounts.createUser = function(user, options){
  return Accounts.onCreateUser(options, user);
}
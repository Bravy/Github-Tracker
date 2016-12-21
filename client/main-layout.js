Template.mainLayout.events({
  'click .login-btn':function(){
    Meteor.loginWithGithub({
      requestPermissions : ['user', 'public_repo', 'repo'],
    }, function(err){
      if(err){
        console.log(err);
      } else{
        console.log("You are logged in");
      }
    });
  },

  'click .logout-btn':function(){
    Meteor.logout();
  }
});

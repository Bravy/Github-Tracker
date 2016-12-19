import { Meteor } from 'meteor/meteor';
import github from 'github'

Meteor.methods({
  'getIssues':function(userName , repo){
      myGithub = new github();
      issues = myGithub.issues.getForRepo({
        owner:userName,
        repo:repo
      });
     return issues;
  },

  'getRepo':function(){
    myGithub = new github();
    repos = myGithub.repos.getForUser({
      username:'gauravjeetsingh'
    });
  return repos;
  }
});

import { Meteor } from 'meteor/meteor';
import github from 'github'

Meteor.methods({
  'getIssues':function(repo){
      myGithub = new github();
      username = Meteor.user().services.github.username ;
      issues = myGithub.issues.getForRepo({
        owner:username,
        repo:repo
      });
     return issues;
  },

  'getRepo':function(username){
      myGithub = new github();
      repos = myGithub.repos.getForUser({
         username:username
      });
      return repos;
   },

   'addIssue':function(repo,title){
      myGithub = new github();
      username = Meteor.user().services.github.username ;
      myGithub.issues.create({
         owner: username,
         repo:repo,
         title:title
      });
   }
});

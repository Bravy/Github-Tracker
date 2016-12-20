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

  'getRepo':function(name){
      myGithub = new github();
      repos = myGithub.repos.getForUser({
         username:name
      });
      return repos;
   },

   'addIssue':function(repo,title){
      myGithub = new github();
      username = Meteor.user().services.github.username;
      console.log(username + " " + repo + " " + title);
      myGithub.issues.create({
         owner: username,
         repo:repo,
         title:title
      });
   },
   'getComment':function(repo,number){
    myGithub = new github({debug: true});
     username = Meteor.user().services.github.username;
     comments =myGithub.issues.getComments({
       owner: username,
       repo:repo,
       number:number
     });
     return comments;
     console.log(comments);
   }

});

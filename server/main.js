import { Meteor } from 'meteor/meteor';
import github from 'github'

var myGithub = new github({debug:true, headers: {
        "user-agent": "Gittrack"
    }});

Meteor.methods({
  'getIssues':function(repo){
      username = Meteor.user().services.github.username;
      acessToken = Meteor.user().services.github.accessToken;
      myGithub.authenticate({
	type: 'oauth',
	token: acessToken
      });
      issues = myGithub.issues.getForRepo({
        owner:username,
        repo:repo
      });
      return issues;
  },

  'getRepo':function(name){
      acessToken = Meteor.user().services.github.accessToken;
      myGithub.authenticate({
	type: 'oauth',
	token: acessToken
      });
      repos = myGithub.repos.getForUser({
         username:name
      });
      return repos;
   },

   'addIssue':function(repo,title){
      username = Meteor.user().services.github.username;
      acessToken = Meteor.user().services.github.accessToken;
      myGithub.authenticate({
	type: 'oauth',
	token: acessToken
      });
      myGithub.issues.create({
         owner: username,
         repo:repo,
         title:title
      });
   },

   'getComment':function(repo,number){
      username = Meteor.user().services.github.username;
      acessToken = Meteor.user().services.github.accessToken;
      myGithub.authenticate({
	type: 'oauth',
	token: acessToken
      });
      comments =myGithub.issues.getComments({
        owner: username,
        repo:repo,
        number:number
      });
      console.log(comments);
      return comments;
   },

   'addComment':function(repo,number,body){
      username = Meteor.user().services.github.username;
      acessToken = Meteor.user().services.github.accessToken;
      myGithub.authenticate({
	type: 'oauth',
	token: acessToken
      });
      addComments =myGithub.issues.createComment({
	owner: username,
	repo:repo,
	body:body,
	number:number
      });
      console.log(addComments);
    },

    'commentTime':function(repo,number,body){
	username = Meteor.user().services.github.username;
	myGithub.issues.createComment({
	   owner: username,
	   repo:repo,
	   body:body,
	   number:number
	});
     }

});

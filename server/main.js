import { Meteor } from 'meteor/meteor';
import github from 'github'

var myGithub = new github({debug:true});

myGithub.authenticate({
	type:'oauth',
	key: "74843f3cef89ff4952de",
        secret: "cdb9118dbde711d59c5f8b7f7e1d05cd349c0e0b"
});

Meteor.methods({
  'getIssues':function(repo){
      username = Meteor.user().services.github.username ;
      issues = myGithub.issues.getForRepo({
        owner:username,
        repo:repo
      });
     return issues;
  },

  'getRepo':function(name){
      repos = myGithub.repos.getForUser({
         username:name
      });
      return repos;
   },

   'addIssue':function(repo,title){
      username = Meteor.user().services.github.username;
      console.log(username + " " + repo + " " + title);
      myGithub.issues.create({
         owner: username,
         repo:repo,
         title:title
      });
   },
   'getComment':function(repo,number){
     username = Meteor.user().services.github.username;
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
		 addComments =myGithub.issues.createComment({
			 owner: username,
			 repo:repo,
			 body:body,
			 number:number
		 });
		 console.log(addComments);
	 }

});

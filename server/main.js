import { Meteor } from 'meteor/meteor';
import github from 'github'

Meteor.methods({
  'githubIssues':function(userName , repo){
    abc = new github();
    issues = abc.issues.getForRepo({
      owner:userName,
      repo:repo
    });
    Tasks.insert({
      text:issues,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,
      complete: false,
      hours: "00",
      minutes: "00",
      seconds: "00"
    });
  },
  'gitRepo':function(){
    abc = new github();
    repos = abc.repos.getForUser({
      username:'bravysandhu@gmail.com'
    });
  return repos;
  console.log(repos);
  }
});

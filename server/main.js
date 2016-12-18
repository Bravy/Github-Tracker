import { Meteor } from 'meteor/meteor';
import github from 'github'

Meteor.methods({
  'githubIssues':function(userName , repo){
    abc = new github();
    issues = abc.issues.getForRepo({
      owner:userName,
      repo:repo
    });
    console.log(issues);
    return issues;
  }
});

import github from 'github'

Meteor.methods({
  'githubIssues':function(){
    abc = new github();
    issues = abc.issues.getForRepo({
      owner:'inderpreetsingh',
      repo:'lord-byron'
    });
    console.log(issues);
    return issues;
  }
});

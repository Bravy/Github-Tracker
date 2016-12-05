Template.gitIssue.helpers({
  issue : function(){
    var github = new GitHub({
      version: "3.0.0" // required
    });
    var result = github.issues.getAll({ state : "open"});
    return result;
    console.log(JSON.stringify(result));
  },
});

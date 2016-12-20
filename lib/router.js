FlowRouter.route('/',{
   action: function(){
      BlazeLayout.render("mainLayout", {content: "repoList"});
   }
});

FlowRouter.route('/issues/:repo',{
   action: function(params){
      BlazeLayout.render("mainLayout", {content: "issueList"}, params.repo);
   }
});

FlowRouter.route('/issues/:repo/:number',{
   action: function(params){
      BlazeLayout.render("mainLayout", {content: "issueComment"}, params.repo , params.number);
   }
});

FlowRouter.route('/timer/:repo/:number',{
   action: function(params){
      BlazeLayout.render("mainLayout", {content: "timer"}, params.repo,params.number);
   }
});

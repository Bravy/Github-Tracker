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

FlowRouter.route('/timer',{
   action: function(){
      BlazeLayout.render("mainLayout", {content: "timer"});
   }
});

Template.repoList.created = function(){
   this.repoList = new ReactiveVar("");
}

Template.repoList.helpers({
   'repositories': function(){
        var self = Template.instance();
        username = Meteor.user().services.github.username;
        console.log(username);
        if(Template.instance().repoList.get() == ""){
	   Meteor.call("getRepo", username, function(err, repos){
		if(err){ console.log(err) }
		else{
		   console.log(repos);
		   self.repoList.set(repos); 
		}
	   });
        }
	console.log( Template.instance().repoList.get());
	return Template.instance().repoList.get();
    },

    'loggingIn':function() {
	return Meteor.loggingIn();
     }
});

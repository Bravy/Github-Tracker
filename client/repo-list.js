Template.repoList.created = function(){
   this.repoList = new ReactiveVar("");
}

Template.repoList.helpers({
   'repositories': function(){
        var self = Template.instance()
        if(Template.instance().repoList.get() == ""){
	   Meteor.call("getRepo", function(err, repos){
		if(err){ console.log(err) }
		else{
		   console.log(repos);
		   self.repoList.set(repos); 
		}
	   });
        }
	console.log( Template.instance().repoList.get());
	return Template.instance().repoList.get();
    }
});

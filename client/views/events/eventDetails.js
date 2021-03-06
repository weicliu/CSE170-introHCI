Template.eventDetails.helpers({
    event: function () {
        var eventId = FlowRouter.getParam("id");
        return Events.findOne({_id: eventId});
    }
});

Template.eventDetails.events({
    "click #cancel-event": function () {
        var eventId = FlowRouter.getParam("id");

        var notificationId = Notifications.success('EVENT CANCELLED!');
        Meteor.setTimeout(function () {
            FlowRouter.go("/events");
            Meteor.call('Events.methods.cancel', {id: eventId});
            Notifications.remove({_id: notificationId});
        }, 500);
    },
    'click #drop-meal-button': function () {
        var eventId = FlowRouter.getParam("id");

        var notificationId = Notifications.success('MEAL DROPPED!');
        Meteor.setTimeout(function () {
            Events.update({_id: eventId}, {$set: {status: 2}});
            FlowRouter.reload();
            Notifications.remove({_id: notificationId});
        }, 500);

        console.log(eventId);
    }
});

//TODO: find the event
//Template.eventDetails.events({
//    'click .drop-meal-button': function(){
//        var id= FlowRouter.getParam("id");
//        console.log(Template.currentData())
//
//        var thisEvent  = Events.findOne({id: id})
//        console.log(thisEvent)
//    }
//});
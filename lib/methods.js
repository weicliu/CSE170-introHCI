Meteor.methods({
    "Meals.methods.create": function (data) {
        Meals.insert({
            image: data.imageURL,
            name: data.name,
            time: data.time,
            createdAt: data.createdAt,
            location: data.location,
            createdBy: data.createdBy
        });
    },
    "Events.methods.cancel": function (data) {
        console.log("Event cancelled");
        Events.remove({_id: data.id});
        FlowRouter.go("/events");
    },
    "SetRanImgUrl": function (data) {
        var randomImgIndex = Math.floor(Math.random() * 5 + 1);
        var imgUrl = '/images/food' + randomImgIndex + '.jpg';
        Session.set("ranImgUrl", imgUrl);
    }
});
Images = new Mongo.Collection("images");


// set up security on Images collecion
Images.allow({
    insert:function(userId, doc) {
        console.log("testing security on image insert");
        if (Meteor.user()) { // they are logged in
            if (userId != doc.createdBy) { // the user is messing about
                return false;
            } else { // the user is logged in, the image has the correct user id
                return true;
            }
        } else { // user not logged in
            return true;
        }
    },
    remove:function(userId, doc) {
        return true;
    },
});
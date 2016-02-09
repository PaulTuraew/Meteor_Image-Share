  if (Meteor.isClient) {

   var img_data = [
   {
    img_src: "Titan_Cassini.jpg",
    img_alt: "Titan from space"
   },
   {
    img_src: "Sacre_Coeur.jpg",
    img_alt: "Paris"
   },

   ];
   Template.images.helpers({images:img_data});
  }

  // Template.images.events({
  //  'click js-image':function(event){
  //  add whatever event you want here for user interation
  //  },
  // });

  if (Meteor.isServer) {

  }

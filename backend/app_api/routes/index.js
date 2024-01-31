var express=require("express");
var router=express.Router();
var ctrlVenues=require("../controllers/VenueController");
var ctrlComments=require("../controllers/CommentController");


router
.route("/admin")
.get(ctrlVenues.listAllVenues)

router
.route("/venues")
.get(ctrlVenues.listNearbyVenues)
.post(ctrlVenues.addVenue);

router
.route("/venues/:venueid")
.get(ctrlVenues.getVenue)
.put(ctrlVenues.updateVenue)
.delete(ctrlVenues.deleteVenue);


router
.route("/venues/:venueid/comments")
.post(ctrlComments.addComment);

router
.route("/venues/:venueid/comments/:commentid")
.get(ctrlComments.getComment)
.put(ctrlComments.updateComment)
.delete(ctrlComments.deleteComment);

module.exports=router;
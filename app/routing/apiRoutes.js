var express =require("express");
var path = require("path");
var router = express.Router();
var friends = require("../data/friends");


router.get("/api/friends", function(req, res) {
    // res.send
    res.json(friends);
  });

router.post("/api/friends",function(req, res){

    var newFriendScores = req.body.scores;
    var someNumber = 100;
    var chosenFriendIndex;
    var diff = 0;
    for (let i = 0; i < friends.length; i++) {
        for (let j = 0; j < friends[i].scores.length; j++) {
           diff += Math.abs(friends[i].scores[j], newFriendScores[j])
        }  
        console.log('diff',diff);
        if (diff < someNumber){
            someNumber = diff
            chosenFriendIndex = i
        }
        console.log('someNumbers', someNumber);
        console.log('chosenFriendIndex', chosenFriendIndex);
        
        
        
    }
    res.send(friends[chosenFriendIndex])

    
})

  module.exports = router;



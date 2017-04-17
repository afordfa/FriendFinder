
//sends friends obj arr
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});


//Take in survey - takes in JSON input
app.post("/api/new", function(req, res) {
    
        var newFriend = req.body;
        friends.push(newFriend);
});
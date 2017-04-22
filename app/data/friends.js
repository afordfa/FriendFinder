// ===============================================================================
// DATA
// Below data will hold all of the friends
// Initially we just set it equal to Kermit the Frog as the first friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Kermit the Frog",
    photo: "http://vignette1.wikia.nocookie.net/characters/images/9/98/Kermit-two1.jpg/revision/latest?cb=20130504163204",
    questions:[
        5,1,4,4,5,1,2,5,4,1
      ]
  },
  {
      name: "Animal",
      photo: "https://upload.wikimedia.org/wikipedia/en/e/e7/Animal_%28Muppet%29.jpg",
      questions:[
      3,2,5,1,2,4,2,3,1,5]
  }

];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
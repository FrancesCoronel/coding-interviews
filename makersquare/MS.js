// MakerSquare
// Interview Challenge
// Reddit Like System

var createPost = function(message) {
  return {
    message: message,
    comments: [{likes: 4},{likes:5},{likes:6}],
    likes: 0
  };
};

var addComment = function(item, message) {
  var comment = {
    message: message,
    comments: [],
    likes: 0
  };
  item.comments.push(comment); //
  return comment;
};

var likeItem = function(item) {
  item.likes += 1;
};

var post1 = createPost("First post"); //
var c1 = addComment(post1, "First comment");
var c2 = addComment(post1 ,"Second comment");
likeItem(post1);
likeItem(post1);
likeItem(post1);

var c1_1 = addComment(c1, "hello");
var c1_2 = addComment(c1, "inception");
likeItem(c1_1);
likeItem(c1_1);

// The strength of a post has a formula: 8 * Number of comments + 3 * number of likes

var strength = function(item) {
	var result =  8 * item.comments.length + 3 * item.likes;
	  for (var i = 0; i < item.comments.length; i++) {
    	result += strength(item.comments[i]);
  } 
  return result;
};

var totalLikes = function(item) {
	var total = 0
	for(var i = 0; i < item.comments.length; i++) {
		total += item.comments.likes;
	}
	return total;
}

//post
// 3 comments
// 1 comments
// 

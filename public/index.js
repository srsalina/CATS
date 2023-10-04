// * _____________________phase 1 _____________________*
window.onload = () => {

   // insert div container for h1 and img connected to body
   // console.log('TESTING TESTING!');
   const centerContent = document.createElement('div');
   centerContent.setAttribute("id", "firstHeader")
   document.body.appendChild(centerContent);

//1st part: insert h1
   const firstHeader = document.createElement('h1');
   firstHeader.innerText = "Kitten Pic";
   firstHeader.setAttribute("class", "firstHeader");
   centerContent.appendChild(firstHeader);


   //2nd part: insert img


   createKittenContainer();





   // * _____________________phase 2 _____________________*

// insert div container to hold under img called voteContainer connected to body and UNDER the first container

const voteContainer = document.createElement

//1st part: insert span section

//2nd part: insert voteButtons container div
   // -  button class upVote
   // -  button class downVote



// ____________________________________________________________
// insert commentsContainer div connected to body UNDER the second container
   // -  div = comments-main
   //    -  label(?), input (placeholder = Add a comment...), button
   // -  div = comments-box




   // * _____________________phase 3 _____________________*





   // * _____________________phase 4 _____________________*







}

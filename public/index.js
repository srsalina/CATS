
// * _____________________phase 1 _____________________*
const initializePage = () => {


   const firstContainer = document.createElement('section');
   firstContainer.setAttribute("class", "firstContainer");



   document.body.appendChild(firstContainer);

   mainContent();
   voteContainer();
   commentsContainer();


   if (localStorage.url) {
      document.querySelector("img").src = localStorage.url;
      document.querySelector(".score").innerHTML = localStorage.score;
      commentsContainer(JSON.parse(localStorage.comments))
   } else {

      fetchImage();
   }



}

const mainContent = () => {
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

   const catImg = document.createElement("img");
   catImg.style.margin = "20px";
   catImg.style.maxWidth = "750px";

   const container = document.querySelector(".firstContainer");
   container.appendChild(catImg);



}


   // * _____________________phase 2 _____________________*

// insert div container to hold under img called voteContainer connected to body and UNDER the first container

const voteContainer = () => {



   //1st part: insert span section

   //2nd part: insert voteButtons container div
   // -  button class upVote
   // -  button class downVote


}
// ____________________________________________________________
// insert commentsContainer div connected to body UNDER the second container

const commentsContainer = () => {

   // -  div = comments-main
   //    -  label(?), input (placeholder = Add a comment...), button
   // -  div = comments-box

}



   // * _____________________phase 3 _____________________*





   // * _____________________phase 4 _____________________*

const fetchImage = async () => {
   try {
      const catRes = await fetch("https://api.thecatapi.com/v1/images/search");
      const catData = await catRes.json();
   } catch (e) {
      console.log("Failed to fetch image", e);

   }
}





window.onload = async () => {

   initializePage();

   // localStorage.setItem("url", kittenData[0].url);






}

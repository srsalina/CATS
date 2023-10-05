
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
   const container = document.querySelector(".firstContainer");

   const centerContent = document.createElement('div');
   centerContent.setAttribute("id", "centerContent");
   // * id: firstHeader

   // document.body.appendChild(centerContent);
   container.appendChild(centerContent);

   //1st part: insert h1
   const firstHeader = document.createElement('h1');
   firstHeader.innerText = "Kitten Pic";
   firstHeader.setAttribute("class", "firstHeader");
   centerContent.appendChild(firstHeader);


   //2nd part: insert img

   const img = document.createElement("img");
   img.src = "https://d.newsweek.com/en/full/2015725/pair-cats-cuddling.jpg?w=1600&h=900&l=53&t=48&q=88&f=ccea0f40afb26fe46705726963c02c31";
   const src = document.getElementById("centerContent");

   img.style.margin = "20px";
   img.style.maxWidth = "750px";
   src.appendChild(img);


   container.appendChild(img);



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

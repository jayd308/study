// const form=document.getElementById("form").addEventListener("submit",function(event){
//     event.preventDefault;
// const title=document.getElementById("titl").value;
// const date=document.getElementById("date").value;
// const description=document.getElementById("description").value;

// const newpost={title,date,description};
// const posts=JSON.parse(localStorage.getItem("posts")) || [];
// posts.push(posts);
// localStorage.setItem("posts",JSON.stringify("posts"));
// posts();
// })
// function posts(){
//     const postsdivlist=document.getElementById("posts-list");
//     const posts=JSON.parse(localStorage.getItem("posts")) || [];
//     postsdivlist.innerHTML='';
//     posts.forEach(post => {
//         postdiv=document.createElement("div");
//         postdiv.innerHTML= `<h3> ${post.title}</h3> <p> ${post.date}</p> <p> ${post.description.substring(0,100)}</p>`
//         postsdivlist.appendChild(postDiv);
        
//     });
// }
// posts();







// Select elements
const form = document.getElementById("form");
const postList = document.getElementById("post-list");

// Initialize blog posts from localStorage or empty array
let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

// Function to display blog posts
function displayPosts() {
    postList.innerHTML = ""; // Clear the container
    blogPosts.forEach((post, index) => {
        const postDiv = document.createElement("div");
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>Date:</strong> ${post.date}</p>
            <p>${post.description}</p>
            <button onclick="deletePost(${index})">Delete</button>
        `;
        postList.appendChild(postDiv);
    });
}

// Function to add a new blog post
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;

    const newPost = { title, date, description };
    blogPosts.push(newPost); // Add new post to the array
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts)); // Save to localStorage
    form.reset(); // Clear form inputs
    displayPosts(); // Update the UI
});

// Function to delete a blog post
function deletePost(index) {
    blogPosts.splice(index, 1); // Remove the post using its index
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts)); // Update localStorage
    displayPosts(); // Refresh the UI
}

// Initial call to display posts
displayPosts();





// // Select the form and attach the event listener
// document.getElementById("form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Correctly call preventDefault()
    
//     const title = document.getElementById("title").value; // Fix the typo ("titl" -> "title")
//     const date = document.getElementById("date").value;
//     const description = document.getElementById("description").value;

//     // Create a new blog post object
//     const newPost = { title, date, description };
    
//     // Retrieve existing posts or initialize as an empty array
//     const posts = JSON.parse(localStorage.getItem("posts")) || [];
    
//     // Push the new post to the array
//     posts.push(newPost); // Fix the logic (previous code incorrectly pushed "posts" itself)

//     // Save the updated posts array to localStorage
//     localStorage.setItem("posts", JSON.stringify(posts));
    
//     // Refresh the blog post list
//     displayPosts(); 
// });

// // Function to display blog posts
// function displayPosts() {
//     const postsDivList = document.getElementById("post-list"); // Fix the ID ("posts-list" -> "post-list")
//     const posts = JSON.parse(localStorage.getItem("posts")) || [];
//     postsDivList.innerHTML = ''; // Clear the existing posts before re-rendering
    
//     posts.forEach((post,index) => {
//         const postDiv = document.createElement("div"); // Ensure "postDiv" is correctly scoped
//         postDiv.innerHTML = `
//             <h3>${post.title}</h3>
//             <p><strong>Date:</strong> ${post.date}</p>
//             <p>${post.description.substring(0, 100)}</p>

//              <button onclick="deletePost(${index})">Delete</button>
//         `;
//         postsDivList.appendChild(postDiv);
//     });
// }


// function deletePost(index) {
//         posts.splice(index, 1); // Remove the post using its index
//         localStorage.setItem("posts", JSON.stringify(posts)); // Update localStorage
//         displayPosts(); // Refresh the UI
//     }
// // Call this function initially to load posts from localStorage on page load
// displayPosts();






// document.getElementById("form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent page reload
    
//     const title = document.getElementById("title").value;
//     const date = document.getElementById("date").value;
//     const description = document.getElementById("description").value;

//     // Validate fie
//     // Create a new post object
//     const newPost = { title, date, description };

//     // Retrieve existing posts or initialize an empty array
//     const posts = JSON.parse(localStorage.getItem("posts")) || [];
//     posts.push(newPost); // Add the new post

//     // Save updated posts to localStorage
//     localStorage.setItem("posts", JSON.stringify(posts));

//     // Clear form fields
//     document.getElementById("form").reset();

//     // Display updated list of blog posts
//     displayPosts();
// });

// // Function to display blog posts
// function displayPosts() {
//     const postsDivList = document.getElementById("post-list");
//     const posts = JSON.parse(localStorage.getItem("posts")) || [];
//     postsDivList.innerHTML = ''; // Clear current content

//     posts.forEach((post,index) => {
//         const postDiv = document.createElement("div");
//         postDiv.innerHTML = `
//             <h3>${post.title}</h3>
//             <p> ${post.date}</p>
//             <p>${post.description.substring(0, 100)}</p>

//                <button onclick="deletePost(${index})">Delete</button>
//         `;
//         postsDivList.appendChild(postDiv);
//     });
// }

// function deletePost(index) {
//         posts.splice(index, 1); // Remove the post using its index
//         localStorage.setItem("posts", JSON.stringify(posts)); // Update localStorage
//         displayPosts(); // Refresh the UI
//     }

// // Initial display of posts on page load
// displayPosts();

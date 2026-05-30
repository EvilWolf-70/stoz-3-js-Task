const addBtn = document.querySelector("#addBookBtn");
const form = document.querySelector("#bookForm");
const title = document.querySelector("#bookTitle");
const container = document.getElementById("booksContainer");
const getBooksBtn =document.getElementById('getBooks');
let editedBook = null;

const API = "http://localhost:3000/books";

// eventlisteners

addBtn.addEventListener("click", () => title.focus());
form.addEventListener("submit", addBooks);
container.addEventListener("click", delBooks);
container.addEventListener("click", editBooks);
document.addEventListener("DOMContentLoaded", getBooks)



// GET Method and Creating the UI

function getBooks() {  
  container.innerHTML ="";
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      container.innerHTML = "";
      data.forEach((data) => {
        container.innerHTML += `
         <div class="bg-white book-Card rounded-2xl shadow-lg p-5 hover:shadow-2xl transition">

        <div class="flex justify-between items-start mb-4">

          <div>
            <h3 class="text-xl font-bold text-gray-800">
              ${data.title}
            </h3>

            <p class="text-gray-500">${data.author}</p>

          </div>

          <span class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
           ${data.category}
          </span>

        </div>

        <p class="text-gray-700 mb-4">
          ₹${data.price}
        </p>

        <!-- Actions -->
        <div class="flex gap-3">

          <button  data-id=${data.id}
            class="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-lg editbutton"
          >
            Edit
          </button>

          <button  data-id=${data.id}
            class="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg delbutton"
          >
            Delete
          </button>

        </div>

      </div>
        `;
      });
    })
    .catch((err) => (container.innerHTML = "Server not found"));
}



//Edit function -- when the particular book edit button will be click that time call this function


function editBooks(e){     
  if (e.target.classList.contains("editbutton")) {
     const id = e.target.dataset.id;
      fetch(`${API}/${id}`)
      .then((res) => res.json())
      .then((book) => {
        editedBook = book.id;

        document.getElementById("bookTitle").value = book.title;
        document.getElementById("author").value = book.author;
        document.getElementById("category").value = book.category;
        document.getElementById("price").value = book.price;

      });
  }
}




//delete the book function -- DELETE Method

function delBooks(e) {
  if (e.target.classList.contains("delbutton")) {
    const id = e.target.dataset.id;
    fetch(`${API}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          e.target.closest(".book-Card").remove();
        }
      })
      .catch((err) => console.log(err.message));
  }
}






function addBooks(e) {
  e.preventDefault();

  const book = {
    title: document.getElementById("bookTitle").value,
    author: document.getElementById("author").value,
    category: document.getElementById("category").value,
    price: Number(document.getElementById("price").value),
  };
  
   if (editedBook) {   //edit value !=0  this part will be work -- PUT Method
      
    fetch(`${API}/${editedBook}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editedBook,
        ...book,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        editedBook = null;
        form.reset();
         getBooks();
      })
      .catch((err) => console.log(err));
  }

  else {  //null means post method work -- POST Method
  
  fetch(API, {     
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((res) => res.json())
    .then((data) => {
      form.reset();     //remove the form feilds values
      getBooksBtn.addEventListener('click', getBooks); // recall the getbooks
    })
    .catch((err) => alert("error"));
  }
}


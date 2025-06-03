// Load notes from localStorage on page load
var count=1;
window.onload = function () {
  displayNotes();
};
function addingNotes() {
  const noteInput = document.getElementById("ta1");
  const noteText = ta1.value.trim();
  if (noteText === "") {
    alert("Note can't be empty!");
    return;
  }
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  displayNotes();
}

function displayNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    //change color of each div
    count=count+1;
    if(count%2==0)
    {
         noteDiv.style.backgroundColor="yellow";

    }
    else{
        noteDiv.style.backgroundColor="rgb(223,57,146)";

    }
    noteDiv.className = "note";
    noteDiv.innerHTML = `
      ${note}
      <br>
      <br><button onclick="deleteNotes(${index})" style="width:80px;height:80px;border-radius:50%;font-size:19px">🗑Delete
      </button>
    `;
    container.appendChild(noteDiv);
    //add some style
    noteDiv.style.padding="7px";
    noteDiv.style.margin="7px";
    noteDiv.style.borderRadius="0.5cm";
    noteDiv.style.height="5cm";
    noteDiv.style.width="8cm";
    noteDiv.style.fontSize="27px";
  });
}
function deleteNotes(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1); // Remove one note at index
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

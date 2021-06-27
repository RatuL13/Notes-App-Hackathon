let addNote = document.querySelector(".button");
let all_notes = document.querySelector(".notes");
let lists=document.querySelectorAll(".notes.note-item");

function taskDeleter(e)
{
  //console.log(e.currentTarget.parentNode);
    e.currentTarget.parentNode.remove();
}
for(let i=0;i<lists.length;i++)
{
  let deleBtn = lists[i].querySelector("#delete");
     deleBtn.addEventListener("click",taskDeleter);
  }

let note = document.querySelector(".parent");
var ele;
addNote.addEventListener("click", function (e) {
  let childNote = document.createElement("div");
  childNote.innerHTML='';
  childNote.classList.add("note-item");
  childNote.innerHTML += `<i class="fa fa-trash" aria-hidden="true" id="delete"></i>`
  setAttributes(childNote, { "spellcheck": "false", "data-type": "false", "contenteditable": "true" });
  childNote.innerHTML += `<span class="placeholder">Enter your text here</span>`
  // note.innerHTML+=`<div class="note-item" spellcheck="false" data-type="false" contenteditable="true">
  // <span class="placeholder">Enter your text here</span> <i class="fa fa-trash" aria-hidden="true"></i>
  // </div> `;


  childNote.addEventListener("click", function (e) {
    if (e.currentTarget.getAttribute("data-type") == "false") {
      let span=e.currentTarget.querySelector("span");
      e.currentTarget.removeChild(span);
      e.currentTarget.setAttribute("data-type", "true");
    }
  });

     let deleBtn = childNote.querySelector("#delete");
    //  console.log(deleBtn.parentNode);
     deleBtn.addEventListener("click",taskDeleter);

     note.appendChild(childNote)
     all_notes.appendChild(note);
});


function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}


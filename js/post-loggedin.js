
var quill = new Quill('#content', {
  theme: 'snow'
});
  
// Update the hidden textarea with Quill's HTML content
  function updateTextarea() {
  var contentInput = document.getElementById('content-input');
  contentInput.value = quill.root.innerHTML;
}

// Add event listener to update the textarea when content is changed
quill.on('text-change', updateTextarea);

function changeUpvote(x) {
x.classList.toggle("upvote");
x.classList.toggle("upvote-2");
}

function changeDownvote(x) {
x.classList.toggle("downvote");
x.classList.toggle("downvote-2");
}

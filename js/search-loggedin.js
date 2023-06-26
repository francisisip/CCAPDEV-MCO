function changeComment(x) {
    x.classList.toggle("bi-chat-left-fill");
    x.classList.toggle("bi-chat-left"); 
  }
  
  function changeUpvote(x) {
    x.classList.toggle("upvote");
    x.classList.toggle("upvote-2");
  }
  
  function changeDownvote(x) {
    x.classList.toggle("downvote");
    x.classList.toggle("downvote-2");
  }
  
  //quill library for rich text-editor
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
  
  //for initializing popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
  
  //to make popovers dismiss on click
  const popover = new bootstrap.Popover('.popover-dismiss', {
      trigger: 'focus'
    })
  
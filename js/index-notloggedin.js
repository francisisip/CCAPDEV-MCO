//for initializing popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//to make popovers dismiss on click
const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'focus'
  })

//change comment icon on posts on hover
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
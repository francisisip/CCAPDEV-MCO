//change comment icon on posts on hover
function changeComment(x) {
    x.classList.toggle("bi-chat-left-fill");
    x.classList.toggle("bi-chat-left"); 
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

//for image uploading
const uploadInput = document.getElementById('upload-input');
const imagePreview = document.querySelector('.image-preview');

uploadInput.addEventListener('change', (e) => {
const files = e.target.files;
if (files && files.length > 0) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imagePreviewItem = document.createElement('div');
        imagePreviewItem.classList.add('image-preview-item');
        imagePreviewItem.style.backgroundImage = `url('${event.target.result}')`;
        imagePreview.appendChild(imagePreviewItem);
      };
      reader.readAsDataURL(file);
    }
  }
}
});

//for initializing popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//to make popovers dismiss on click
const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'focus'
  })

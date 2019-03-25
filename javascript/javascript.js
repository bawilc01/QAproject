/****************************
Blog Previewer Functionality
*****************************/

// Hidden success and refresh buttons on initial page load
const successButton = document.getElementById('successButton').style.display = 'none';
const refreshButton = document.getElementById('refreshButton').style.display = 'none';

// Assigning text typed in title and topic fields into variables named the same
var title = document.getElementById('blogTitleInput');
var topic = document.getElementById('blogContent');

// On Prevew button click functionality - preview message and success button visible
function showPreview(){
  document.getElementById('previewMessage').innerHTML = "Please preview your changes before saving.";
  document.getElementById('successButton').style.display = 'block';

  // moving text from title and topic area to the blog preview and making it visible for user to preview
  document.getElementById('blogTitlePreview2').innerHTML = title.value;
  document.getElementById('blogTitlePreview2').style.display = 'block';
  document.getElementById('blogContentPreview2').innerHTML = topic.value;
  document.getElementById('blogContentPreview2').style.display = 'block';
}


// clicking Success shows Refresh button and success message
function showSuccess() {

  /*hides submit and preview buttons after clicking submit button*/
  document.getElementById('successMessage').innerHTML = "Your changes have been saved!";
  document.getElementById('previewMessage').style.display = 'none';
  document.getElementById('previewButton').style.display = 'none';
  document.getElementById('successButton').style.display = 'none';

  /*show refresh button to refresh page*/
  document.getElementById('refreshButton').style.display = 'block';


  /*hide last preview after submit*/
  document.getElementById('blogTitlePreview2').style.display = 'none';
  document.getElementById('blogContentPreview2').style.display = 'none';

}

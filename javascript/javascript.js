/*$('#flashMessage').hide();

$('#previewButton').click(function() {
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();

  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);

$('#flashMessage')
    .slideDown(1000)
    .delay(2000)
    .slideUp();
});*/

const successButton = document.getElementById('successButton').style.display = 'none';

function showPreview(){
  document.getElementById('previewMessage').innerHTML = "Please preview your changes before saving.";
  document.getElementById('successButton').style.display = 'block';
}


function showSuccess() {
  document.getElementById('successMessage').innerHTML = "Your changes have been saved!";
}

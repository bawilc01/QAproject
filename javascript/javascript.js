const successButton = document.getElementById('successButton').style.display = 'none';

function showPreview(){
  document.getElementById('previewMessage').innerHTML = "Please preview your changes before saving.";
  document.getElementById('successButton').style.display = 'block';
}


function showSuccess() {
  document.getElementById('successMessage').innerHTML = "Your changes have been saved!";
  document.getElementById('previewMessage').style.display = 'none';
  document.getElementById('previewButton').style.display = 'none';
  document.getElementById('successButton').style.display = 'none';

}

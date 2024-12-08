document.getElementById('edit-bio-btn').addEventListener('click', () => {
    const bioElement = document.getElementById('bio');
    const currentBio = bioElement.textContent;
  
    // Prompt user to enter new bio
    const newBio = prompt('Edit your bio:', currentBio);
  
    // Update bio if input is provided
    if (newBio !== null && newBio.trim() !== '') {
      bioElement.textContent = newBio;
    }
  });

  // Logout functionality
document.getElementById('logout-btn').addEventListener('click', () => {
    alert('You have been logged out!');
    window.location.href = 'index.html'; 
  });
  
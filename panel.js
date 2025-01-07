// control panel
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Ambil semua elemen dengan kelas 'namaDepan'
    const namaPendekElements = document.querySelectorAll('.namaDepan');
    
    // Iterasi melalui setiap elemen dan ganti teksnya
    namaPendekElements.forEach(element => {
      element.textContent = data.nama;
    });
  })
  .catch(error => console.error('Error fetching data:', error));

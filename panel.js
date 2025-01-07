fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Ambil elemen dengan ID 'namaDepan'
    const namaPendekElement = document.querySelector('#namaDepan');
    
    // Pastikan elemen ditemukan
    if (namaPendekElement) {
      namaPendekElement.textContent = data.nama;
    } else {
      console.error('Element with ID #namaDepan not found.');
    }
  })
  .catch(error => console.error('Error fetching data:', error));

// control panel
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Ambil semua elemen dengan kelas 'namaDepan'
    const namaPendekElements = document.querySelector('#namaDepan');
      element.textContent = data.nama;
    });
  })
  .catch(error => console.error('Error fetching data:', error));

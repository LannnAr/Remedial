const produkContainer = document.getElementById('productList');
let cardToDelete = null;

// Array gambar 
const gambarProduk = [
  "img/laptop.jpg",
  "img/laptop2.jpg",
  "img/laptop3.jpg"
];
let indexGambar = 0;

function toggleDetail() {
  const detail = document.getElementById('detailSpesifikasi');
  detail.style.display = detail.style.display === 'none' ? 'block' : 'none';
}

function tambahProduk() {
  const nama = document.getElementById('nama').value;
  const deskripsi = document.getElementById('deskripsi').value;
  const harga = document.getElementById('harga').value;

  if (!nama || !deskripsi || !harga) {
    alert("Harap isi semua kolom.");
    return;
  }

  
  const gambarDipakai = gambarProduk[indexGambar];
  indexGambar = (indexGambar + 1) % gambarProduk.length;

  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${gambarDipakai}" alt="Laptop" class="product-img">
    <h3>${nama}</h3>
    <p>${deskripsi}</p>
    <p><strong>Harga:</strong> Rp ${parseInt(harga).toLocaleString()}</p>
    <button onclick="konfirmasiHapus(this)">Hapus</button>
  `;
  produkContainer.appendChild(div);

  document.getElementById('nama').value = '';
  document.getElementById('deskripsi').value = '';
  document.getElementById('harga').value = '';
}

function konfirmasiHapus(button) {
  cardToDelete = button.parentElement;
  document.getElementById('popupHapus').style.display = 'flex';
}

document.getElementById('btnYa').onclick = function () {
  if (cardToDelete) cardToDelete.remove();
  cardToDelete = null;
  document.getElementById('popupHapus').style.display = 'none';
};

document.getElementById('btnBatal').onclick = function () {
  cardToDelete = null;
  document.getElementById('popupHapus').style.display = 'none';
};


const dataAwal = [
  { nama: "Laptop Lamaa", deskripsi: "Haloo Aku Laptop Lama", harga: 7000000 },
  { nama: "Laptop Sedang", deskripsi: "aku adalah laptop sedang", harga: 8000000 },
  { nama: "Laptop Baru", deskripsi: "aku adalah laptop baruu", harga: 9000000 },
];

dataAwal.forEach((p, i) => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${gambarProduk[i % gambarProduk.length]}" alt="Laptop" class="product-img">
    <h3>${p.nama}</h3>
    <p>${p.deskripsi}</p>
    <p><strong>Harga:</strong> Rp ${p.harga.toLocaleString()}</p>
    <button onclick="konfirmasiHapus(this)">Hapus</button>
  `;
  produkContainer.appendChild(div);
});

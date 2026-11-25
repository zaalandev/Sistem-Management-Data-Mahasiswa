// =====================================================================
// SISTEM MANAGEMENT DATA MAHASISWA (Aplikasi Console TypeScript)
// UAS Pemrograman Dasar - Kelompok 08 - T1C
// =====================================================================

// Mengimpor library readline-sync agar input pengguna dibaca secara sinkron (sync)
import * as readlineSync from "readline-sync";

// =====================================================================
// BLOK 1 : TIPE DATA, KONSTANTA, DAN PENYIMPANAN DATA
// =====================================================================

// Mendefinisikan struktur (entitas) Mahasiswa beserta tipe data propertinya
interface Mahasiswa {
  nim: string;        // NIM mahasiswa (string), dipakai sebagai ID unik
  nama: string;       // Nama lengkap mahasiswa (string)
  prodi: string;      // Program studi mahasiswa (string)
  semester: number;   // Semester mahasiswa saat ini (number)
  ipk: number;        // Indeks Prestasi Kumulatif 0,00 - 4,00 (number)
}

// Konstanta (nilai tetap)
const BATAS_SEMESTER: number = 8;      // Jumlah semester normal program studi
const IPK_MAKSIMAL: number = 4;          // Batas atas IPK
const IPK_MINIMAL: number = 0;           // Batas bawah IPK



// =====================================================================
// BLOK 2 : FUNGSI BANTU (INPUT, VALIDASI, DAN PERHITUNGAN)
// =====================================================================

// Fungsi membaca input dari pengguna
function bacaInput(pesan: string): string {
  // Menampilkan pesan lalu membaca teks, trim() membuang spasi di awal dan akhir
  const teks: string = readlineSync.question(pesan).trim();
  // Mengembalikan teks hasil input
  return teks;
}

// Fungsi mengecek apakah teks kosong
function apakahKosong(teks: string): boolean {
  // Teks dianggap kosong jika panjangnya 0 atau hanya berisi spasi
  return teks.length === 0 || teks.trim() === "";
}

// Fungsi memvalidasi rentang IPK 0,00 - 4,00
function validasiRentangIPK(ipk: number): boolean {
  // Jika bukan angka (NaN), IPK tidak valid
  if (Number.isNaN(ipk)) {
    return false;
  }
  // Kondisi majemuk: IPK harus >= 0 DAN <= 4, serta tidak boleh tidak valid (!)
  if (ipk >= IPK_MINIMAL && ipk <= IPK_MAKSIMAL && !Number.isNaN(ipk)) {
    return true;
  }
  // Di luar rentang berarti tidak valid
  return false;
}

// Fungsi menentukan jenis semester ganjil/genap
function tentukanJenisSemester(semester: number): string {
  // Sisa bagi 2 sama dengan 0 berarti semester genap
  if (semester % 2 === 0) {
    return "Genap";
  }
  // Selain itu semester ganjil
  return "Ganjil";
}


// =====================================================================
// BLOK 3 : FITUR CRUD + SEARCH
// =====================================================================

// Create: menambah data mahasiswa baru ke dalam array
function tambahMahasiswa(data: Mahasiswa[]): void {
  // TODO Progress 3: input NIM, cek duplikat, input data, validasi, lalu push ke array

  console.log("[Tambah Mahasiswa] Fitur ini akan dikerjakan pada Progress 3.");
}

// Read: menampilkan seluruh data dan detail mahasiswa
function tampilMahasiswa(data: Mahasiswa[]): void {
  // TODO Progress 4: cek array kosong, tampilkan semua data, lalu detail berdasarkan NIM

  console.log("[Tampilkan Mahasiswa] Fitur ini akan dikerjakan pada Progress 4.");
}

// Update: mengubah data mahasiswa berdasarkan NIM
function ubahMahasiswa(data: Mahasiswa[]): void {
  // TODO Progress 5: cari NIM, tampilkan data lama, input data baru, validasi, ganti data

  console.log("[Ubah Data Mahasiswa] Fitur ini akan dikerjakan pada Progress 5.");
}

// Delete: menghapus data mahasiswa berdasarkan NIM dengan konfirmasi
function hapusMahasiswa(data: Mahasiswa[]): void {
  // TODO Progress 5: cari NIM, tampilkan data, minta konfirmasi Y/N, hapus dengan splice

  console.log("[Hapus Mahasiswa] Fitur ini akan dikerjakan pada Progress 5.");
}

// Search: mencari mahasiswa berdasarkan kata kunci dan filter
function cariMahasiswa(data: Mahasiswa[]): void {
  // TODO Progress 6: input kata kunci + filter, perulangan, tampilkan hasil dan jumlahnya

  console.log("[Cari Mahasiswa] Fitur ini akan dikerjakan pada Progress 6.");
}

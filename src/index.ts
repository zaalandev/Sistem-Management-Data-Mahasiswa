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

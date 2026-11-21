Sistem Management Data Mahasiswa

Anggota Kelompok:
- Zaalan Nayaka Putra Lanang
- Mohammad Axel Linggar Alif Khan
- Nabila Nuriza Riskianti

Pembagian Tugas Masing Masing Anggota 

Pembagian Tugas Anggota Kelompok:

Zaalan Nayaka Putra Lanang (Create)
- Penyusun Proposal Laporan 
- Membuat fungsi tambah data mahasiswa.
- Membuat validasi input data mahasiswa.
- Memastikan data mahasiswa baru tersimpan.

Mohammad Axel Linggar Alif Khan (Read)
- Penyusun Proposal Laporan 
- Membuat fungsi menampilkan seluruh data mahasiswa.
- Membuat fungsi mencari data mahasiswa berdasarkan NIM.
- Membuat tampilan daftar mahasiswa.
 
Nabila Nuriza Riskianti (Update)
- Penyusun Proposal Laporan 
- Membuat fungsi mengubah data mahasiswa.
- Membuat validasi data yang akan diubah.
- Memastikan perubahan data tersimpan.

Bersama 
1. Membuat fungsi hapus data mahasiswa (Delete)
- Membuat fungsi menghapus data mahasiswa.
- Membuat konfirmasi sebelum penghapusan.
- Memastikan data yang dipilih benar-benar terhapus.
2. Membuat menu utama aplikasi Berbasis Base Console
3. Membuat validasi Kondisi 
4. Membuat pencarian dan filter data mahasiswa.
5. Integrasi seluruh fitur CRUD.


1.1 Deskripsi Masalah

Latar Belakang Masalah

Data mahasiswa merupakan informasi penting yang perlu dikelola dengan baik agar mudah ditemukan, diperbarui, dan dihapus sesuai kebutuhan. Dalam pengelolaan data mahasiswa secara manual, terdapat kemungkinan terjadinya kesalahan pencatatan, kesulitan  
dalam mencari data tertentu, serta proses pembaruan informasi 
yang kurang efisien.

Berdasarkan permasalahan tersebut, diperlukan sebuah aplikasi sederhana yang dapat membantu proses pengelolaan data mahasiswa. Aplikasi yang dikembangkan adalah Sistem 
Management Data Mahasiswa berbasis console yang menyediakan fitur untuk menambahkan, menampilkan, mengubah, menghapus, dan mencari data mahasiswa.

Aplikasi ini dibuat menggunakan Bahasa pemrograman TypeScript dengan memanfaatkan array sebagai media penyimpanan data sementara. Dengan demikian, aplikasi tidak menggunakan 
database eksternal dan seluruh proses pengelolaan data dilakukan melalui menu yang ditampilkan pada console.

Pengguna Sistem (User)

1. Admin atau Pengelola Data : bertugas memasukkan, melihat, mengubah, menghapus, mengubah, dan mencari data mahasiswa.
2. Mahasiswa : Data identitasnya dikelola melaui aplikasinya, tetapi tidak berinteraksi langsung dengan sistem.

Data Input

Data input meliputi : NIM Mahasiswa, Nama mahasiswa, Program studi mahasiswa, semester, IPK. Pengguna memberikan input berupa pilihan menu untuk menentukan proses yang ingin dilakukan.

Data Output

1. Daftar seluruh data mahasiswa.
2. Informasi mahasiswa berdasarkan NIM yang dicari.
3. Pesan keberhasilan ketika data berhasil ditambahkan.
4. Pesan keberhasilan Ketika data berhasil diperbarui.
5. Pesan keberhasilan ketika data berhasil dihapus.
6. Pesan kesalahan apabila data tidak ditemukan atau input tidak sesuai.
7. Informasi ketika pengguna memilih keluar dari aplikasi. 

Entitas Data & Properti

Entitas : Mahasiswa
Properti : 
-	NIM : string
-	Nama : string
-	Program studi :string
-	Semester : number
-	IPK : number

1.2 Decomposition (Dekomposisi Masalah)

1.Create
Menambahkan data mahasiswa baru ke dalam array.

2.Read
Menampilkan seluruh data mahasiswa yang tersimpan ke dalam array.

3.Update
Mengubah informasi mahasiswa berdasarkan NIM yang dimasukkan.

4.Delete
Menghapus data mahasiswa berdasarkan NIM.

5.Search
Mencari data mahasiswa berdasarkan NIM atau nama dengan pencarian kata kunci yang tidak membedakan huruf besar dan kecil, serta menyediakan filter berdasarkan program studi atau semester.

6.Validasi Input
Memeriksa apakah input pengguna sudah sesuai dengan ketentuan.

7.Menu Utama
Menampilkan pilihan fitur dan mengarahkan pengguna ke proses yang dipilih.

1.3 Pattern Recognition (Pengenalan Pola)

1.	Pola Pengulangan Menu
Aplikasi menggunakan pola pengulangan untuk menampilkan menu utama secara terus-menerus selama program berjalan. Pengulangan akan berhenti Ketika pengguna memilih menu keluar.

2.	Pola Validasi Input
Setiap data yang dimasukkan pengguna perlu diperiksa terlebih dahulu sebelum diproses. Validasi dilakukan untuk memastikan data sesuai dengan ketentuan. Misalnya : Nim tidak boleh kosong, nama tidak boleh kosong, semester harus berupa angka, IPK harus berupa angka dengan rentang 0,00 sampai 4,00.

3.	Pola Pencarian Data pada Array
Pencarian dilakukan dengan memeriksa setiap elemen dalam array sampai data yang sesuai ditemukan. Misalnya: Ketika pengguna memasukkan NIM, aplikasi akan membandingkan NIm tersebut dengan setiap data mahasiswa yang tersimpan.

4.	Pola Pengelolaan Data
Setiap data mahasiswa memiliki struktur property yang sama, yaitu NIM, nama, program studi, semester, dan IPK. Pola ini memudahkan  aplikasi dalam melakukan penambahan, penampilan, perubahan, dan penghapusan data.

5.	Pola Pesan Sistem
Setiap proses yang dilakukan  pengguna akan menghasilkan respons dari aplikasi. Misalnya: Data berhasil ditambahkan, Data berhasil diperbarui, Data berhasil dihapus, Data tidak ditemukan, Pilihan menu tidak valid.

1.4 Abstraction (Abstraksi)

Relevan

NIM
Nama mahasiswa
Program studi
Semester
IPK

Tidak Relevan

Alamat rumah
Nomor telepon
Hobi
Foto mahasiswa
Riwayat organisasi

1.5 Algorithmic Thinking (Berpikir Algoritmik)

a.	Algoritma Menu Utama
1.	Memulai aplikasi.
2.	Membuat array kosong untuk menyimpan data mahasiswa.
3.	Menampilkan menu utama yang terdiri dari Tambah Mahasiswa, Tampilkan Mahasiswa, Ubah Data Mahasiswa, Hapus Mahasiswa, Cari Mahasiswa, dan Keluar.
4.	Meminta pengguna memasukkan pilihan menu.
5.	Memeriksa pilihan yang dimasukkan pengguna.
6.	Jika pilihan sesuai, aplikasi menjalankan fitur yang dipiilih.
7.	Jika pilihan tidak sesuai, aplikasi menampilkan pesan kesalahan.
8.	Setelah proses selesai, aplikasi kembali menampilkan menu utama.
9.	Jika pengguna memilih menu keluar, aplikasi menghentikan pengulangan dan menampilkan pesan bahwa program telah selesai.

b.	Algoritma Create (Menambahkan Data)
1.	Pengguna memilih menu Tambah Mahasiswa.
2.	Aplikasi meminta pengguna memasukkan NIM.
3.	Aplikasi memeriksa apakah NIM sudah terdapat dalam array.
4.	Jika NIM sudah digunakan, aplikasi menampilkan pesan bahwa NIM telah terdaftar.
5.	Jika NIM belum digunakan, aplikasi meminta pengguna memasukkan nama, program studi, semester, dan IPK.
6.	Aplikasi melakukan validasi terhadap seluruh input.
7.	Jika data valid, aplikasi menyimpan data mahasiswa baru ke dalam array. 
8.	Aplikasi menampilkan pesan bahwa data berhasil ditambahkan.
9.	Aplikasi kembali ke menu utama.

c.	Algoritma Read (Menampilkan Data)
1.	Pengguna memilih menu Tampilkan Mahasiswa.
2.	Aplikasi memeriksa apakah array memiliki data mahasiswa.
3.	Jika array kosong, aplikasi menampilkan pesan bahwa belum terdapat data mahasiswa.
4.	Jika array memiliki data, aplikasi melakukan pengulangan untuk membaca setiap elemen array.
5.	Aplikasi menampilkan NIM, nama, program studi, semester, dan IPK setiap mahasiswa.
6.	Aplikasi meminta pengguna memasukkan NIM mahasiswa yang ingin dilihat detailnya.
7.	Aplikasi mencari mahasiswa berdasarkan NIM menggunakan data dalam array.
8.	Jika ditemukan, aplikasi menampilkan detail mahasiswa tersebut.
9.	Jika tidak ditemukan, aplikasi menampilkan pesan bahwa data tidak tesedia.
10.	Setelah seluruh data ditampilkan, aplikasi kembali ke menu utama.

d.	Algoritma Update (Mengubah Data)
1.	Pengguna memilih menu Ubah Data Mahasiswa.
2.	Aplikasi meminta pengguna memasukkan NIM mahasiswa yang ingin di ubah.
3.	Aplikasi melakukan pencarian NIM di dalam array.
4.	Jika NIM tidak ditemukan, aplikasi menampilkan pesan bahwa data mahasiswa tidak ditemukan.
5.	Jika NIM ditemukan, aplikasi menampilkan data mahasiswa tersebut.
6.	Aplikasi meminta pengguna memasukkan informasi baru yang ingi diperbarui.
7.	Aplikasi melakukan validasi terhadap data baru.
8.	Jika data valid, aplikasi mengganti informasi lama dengan informasi baru. 
9.	Aplikasi menampilkan pesan bahwa data berhasil diperbarui.
10.	Aplikasi kembali ke menu utama.

e.	Algoritma Delete (Menghapus Data)
1.	Pengguna memilih menu Hapus Mahasiswa.
2.	Aplikasi meminta pengguna memasukkan NIM mahasiswa yang ingin dihapus.
3.	Aplikasi mencari NIM tersebut di dalam array.
4.	Jika NIM tidak ditemukan, aplikasi menampilkan pesan bahwa data mahasiswa tidak ditemukan. 
5.	JIka NIM ditemukan, aplikasi menampilkan informasi mahasiswa yang akan dihapus.
6.	Aplikasi meminta konfirmasi dari pengguna sebelum menghapus data.
7.	Jika pengguna menyetujui, aplikasi menghapus data mahasiswa dari array.
8.	Jika pengguna membatalkan, data mahasiswa tetap tersimpan.
9.	Aplikasi menampilkan pesan sesuai tindakan pengguna.
10.	Aplikasi kembali ke menu utama.
                                                                                                                             
f.	Algoritma Search (Mencari Data)
1.	Pengguna memilih menu Cari Mahasiswa.
2.	Aplikasi meminta pengguna memasukkan NIM atau nama mahasiswa yang ingin dicari dan tidak membedakan huruf besar dan kecil serta pengguna dapat menggunakan filter program studi atau semester.
3.	Aplikasi melakukan pengulangan untuk memeriksa setiap elemen array.
4.	Aplikasi membandingkan input pengguna dengan data NIM atau nama mahasiswa.
5.	Jika data ditemukan, aplikasi menampilkan infromasi mahasiswa yang sesuai.
6.	Jika data tidak ditemukan, aplikasi menampilkan pesan bahwa data mahasiswa tidak tersedia.
7.	Setelah proses pencarian selesai, kembali ke menu utama.

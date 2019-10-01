/*
==============
Bola ping-pong
==============

Di dalam sebuah kotak A ada 50 bola ping-pong.
Setiap bola ping pong bisa berwarna merah atau putih.

Buatlah pseudocode untuk menghitung jumlah
bola ping-pong berwarna merah dan putih masing-masing di dalam kotak A.

===== jawaban =====

*/
START
PUT jumlah_bola_keseluruhan with any value

READ bolamerah = jumlah_bola_keseluruhan - bolaputih
READ bolaputih = jumlah_bola_keseluruhan - bolamerah

SHOW BOLA MERAH
SHOW BOLA PUTIH

END

START

AMBIL BOLA DARI KOTAK A

JIKA BOLA YANG DIAMBIL BERWARNA MERAH PUT MERAH += 1
JIKA BOLA YANG DIAMBIL BERWARNA PUTIH PUT PUTIH += 1

LAKUKAN KEGIATAN DI ATAS SAMPAI TIDAK ADA BOLA DI KOTAK A

SHOW MERAH
SHOW PUTIH

END
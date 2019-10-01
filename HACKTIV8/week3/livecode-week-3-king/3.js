/*
==========
Balance XY
==========

Buatlah function xyBalance yang menerima input berupa string str dan
mengembalikan true jika setelah string x ada y di dalam string tersebut.
Satu 'y' bisa menutup lebih dari satu x.

Contoh Output dan Penjelasan:
xyBalance("aaxbby") → true, karena setelah x pada index ke 2 ada y di index 5
xyBalance("aaxbb") → false, karena setelah x tidak ada y di dalam string tersebut
xyBalance("yaaxbb") → false, karena setelah x pada posisi 3, tidak ada y di dalam string
xyBalance("bxacdexby") -> true, karena setelah x pada posisi 1 dan 6, ada y pada index terakhir
xyBalance("cnxbyuxi") ->false, karena tidak ada y yang menutupi x pada index 6

*/

  function xyBalance(str) {

    var length = str.length;

    var x = 0;
    var y = 0;

    for (i = 1; i <= length; i++) {
      if (str.charAt(i) == 'x') {
        x = i;
      }
    }

    if (x) {
      for (i = 1; i <= length; i++) {
        if (str.charAt(i) == 'y') {
          y = i;
        }
      }
    }

    if (y > x) {
      return console.log(true);
    }

    return console.log(false);
  }

  xyBalance("aaxbby"); //true
  xyBalance("aaxbb");
  xyBalance("yaaxbb");
  xyBalance("bxacdexby"); //true
  xyBalance("cnxbyuxi");
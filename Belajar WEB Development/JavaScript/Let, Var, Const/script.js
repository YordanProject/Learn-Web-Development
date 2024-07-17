// Let
let nama = "Bejo";
// Diubah
nama = "Coki"
console.log(nama);

// Var
var buah = "Apel";
buah = "Pisang";
console.log(buah);

// Const
const barang = "Buku";
// tidak bisa udah karena konstan
console.log(barang);

// kelakukan Let
// Mengeluarkan semua data yang ada pada scope dalam dan luar dan tidak ada yang terganti.
let anggotaTubuh = "Tangan"
{
    let anggotaTubuh = "kaki"
    console.log(anggotaTubuh);
}
console.log(anggotaTubuh)


// Kelakuan Var
// Mengeluarkan data bagian dalam scope saja dan mengganti data pada bagian luar.
var organDalam = "Ginjal";
{
    var organDalam = "Jantung";
    console.log(organDalam);
}
console.log(organDalam);

// Kelakuan Const
// Sama seperti Let karena data tidak akan terganti disebabkan oleh konstanta.
const jenisUsus =  "Usus Besar";
{
    const jenisUsus = "Usus kecil";
    console.log(jenisUsus)
}
console.log(jenisUsus);

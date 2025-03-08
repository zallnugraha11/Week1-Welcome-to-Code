// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

if (tanggal < 1 || tanggal > 31){
    console.log("Tanggal tidak valid! Masukkan angka antara 1 - 31.");

}else if (bulan <1 || bulan > 12){
    console.log("bulan tidak calid! Masukan angka antara 1 -12 ");

}else if (tahun <1900 || tahun > 2200){
    console.log("Tahun tidak valid! Masukan Tahun antara 1900 - 2200");

}else{

    let namabulan= "" ;

    switch (bulan) {
        case 1: namaBulan = "Januari"; break;
        case 2: namaBulan = "Februari"; break;
        case 3: namaBulan = "Maret"; break;
        case 4: namaBulan = "April"; break;
        case 5: namaBulan = "Mei"; break;
        case 6: namaBulan = "Juni"; break;
        case 7: namaBulan = "Juli"; break;
        case 8: namaBulan = "Agustus"; break;
        case 9: namaBulan = "September"; break;
        case 10: namaBulan = "Oktober"; break;
        case 11: namaBulan = "November"; break;
        case 12: namaBulan = "Desember"; break;
        default: namaBulan = "Bulan tidak valid";
    }
    console.log(`${tanggal} ${namaBulan} ${tahun}`);
}
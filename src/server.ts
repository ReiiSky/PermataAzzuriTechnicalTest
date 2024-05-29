import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();
app.use(bodyParser.json());


app.post('/soal_pertama', (req, res) => {
  const daftarBilangan: number[] = req.body.bilangan;

  const jumlahBilanganFn = (daftarBilangan: number[]) => {
    let jumlah = 0;

    for (const bilangan of daftarBilangan) {
      jumlah += bilangan;
    }

    return jumlah;
  }
  res.send({
    jumlah: jumlahBilanganFn(daftarBilangan),
  });
});

app.post('/soal_kedua', (req, res) => {
  const daftarBilangan: number[] = req.body.bilangan;

  const bilanganTerkecilFn = (daftarBilangan: number[]) => {
    let terkecil = Number.MAX_SAFE_INTEGER;

    for (const bilangan of daftarBilangan) {
      if (bilangan < terkecil) {
        terkecil = bilangan;
      }
    }
    
    return terkecil;
  }
  res.send({
    tekecil: bilanganTerkecilFn(daftarBilangan),
  });
});

app.post('/soal_ketiga', (req, res) => {
  const daftarBilangan: number[] = req.body.bilangan;

  const bilanganTerbesarFn = (daftarBilangan: number[]) => {
    let terbesar = -Number.MAX_SAFE_INTEGER;

    for (const bilangan of daftarBilangan) {
      if (bilangan > terbesar) {
        terbesar = bilangan;
      }
    }
    
    return terbesar;
  }

  res.send({
    terbesar: bilanganTerbesarFn(daftarBilangan),
  });
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
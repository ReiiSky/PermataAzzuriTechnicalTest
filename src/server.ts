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

app.post('/soal_keempat', (req, res) => {
  const daftarBilangan: number[] = req.body.bilangan;

  const bilanganLebihDariSatuFn = (daftarBilangan: number[]) => {
    const bilanganLebihDariSatu = new Map<number, number>();

    for (const bilangan of daftarBilangan) {
      const currentBilangan = bilanganLebihDariSatu.get(bilangan);

      if (!currentBilangan) { // 
        bilanganLebihDariSatu.set(bilangan, 1);
      } else {
        bilanganLebihDariSatu.set(bilangan, currentBilangan + 1);
      }
    }

    const hasilBilangan = [];

    for (const [_, bilangan] of daftarBilangan.entries()) {
      const jumlah = bilanganLebihDariSatu.get(bilangan);
      if (!jumlah) continue;

      if (jumlah > 1 && !exist(hasilBilangan, bilangan)) {
        hasilBilangan.push(bilangan);
      }
    }

    return hasilBilangan;
  }

  const exist = (daftarBilangan: number[], bilangan : number) => {
    for (const b of daftarBilangan) {
      if (b == bilangan) {
        return true
      }
    }

    return false;
  }

  res.send({
    lebih_dari_satu: bilanganLebihDariSatuFn(daftarBilangan),
  });
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
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

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
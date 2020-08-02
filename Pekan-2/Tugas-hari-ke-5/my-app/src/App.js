import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <center>
        <strong>
          <h1>Form Pembelian Buah</h1>
        </strong>
      </center>
      <table>
        <tbody><tr>
          <td valign="top"><strong>Nama Pelanggan</strong></td>
          <td><input type="text" name="nama" /></td>
        </tr>
          <tr>
            <td valign="bottom"><strong>Daftar Item</strong></td>
            <td>
              <input type="checkbox" />Semangka<br />
              <input type="checkbox" />Jeruk<br />
              <input type="checkbox" />Nanas<br />
              <input type="checkbox" />Salak<br />
              <input type="checkbox" />Anggur
          </td>
          </tr>
          <tr>
            <td colSpan={2}><input type="submit" defaultValue="Kirim" /></td>
          </tr>
        </tbody></table>
    </div>
  );
}


export default App;

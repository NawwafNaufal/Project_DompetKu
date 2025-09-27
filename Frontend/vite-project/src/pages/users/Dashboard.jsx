import React from "react";

import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const Dashboard = () => {
  return (
    <section id="Dashboard">
      <Navbar />
      <div className="bg-gray-100 flex flex-col items-center justify-center">
        <div className="w-full bg-gradient-to-b from-blue-400 to-blue-600 p-8 rounded-b-lg shadow-lg mb-4">
          <div className="flex justify-between">
            <div>
              <h1 className="text-white text-2xl font-semi-bold mb-10">
                Tabungan
              </h1>
              <h3 className="text-white text-sm">Total :</h3>
              <h1 className="text-white text-4xl font-bold">$15.127,00</h1>
            </div>
            <div>
              <img
                src="/assets/coins money.svg"
                alt="gambar"
                className="w-44"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full p-8 ">
          <div className="w-full p-8 bg-white shadow-lg rounded-lg mx-2 md:mx-10">
            <h1 className="text-left font-bold text-xl text-blue-600">
              Pemasukan :
            </h1>
            <div className="w-full border-blue-600">
              <h2>Grafik Lingkaran</h2>
            </div>
            <table>Riwayat Pemasukan</table>
          </div>
        </div>
        <div className="flex w-full p-8 ">
          <div className="w-full p-8 bg-white shadow-lg rounded-lg mx-2 md:mx-10">
            <h1 className="text-left font-bold text-xl text-blue-600">
              Pengeluaran :
            </h1>
            <div className="w-full border-blue-600">
              <h2>Grafik Lingkaran</h2>
            </div>
            <table>Riwayat Pengeluaran</table>
          </div>
        </div>
        <div className="flex w-full p-8 ">
          <div className="w-full p-8 bg-white shadow-lg rounded-lg mx-2 md:mx-10 mb-4">
            <h1 className="text-left font-bold text-xl text-blue-600">
              Grafik Naik Turun :
            </h1>
            <div className="w-full border-blue-600">
              <h2>Pengeluaran dan Pemasukan</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Dashboard;

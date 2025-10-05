import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Dashboard = () => {
  const [pemasukan, setPemasukan] = useState([]);
  const [pengeluaran, setPengeluaran] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataPemasukan = pemasukan.map((item) => ({
    name: item.title,
    value: item.price,
  }));

  const dataPengeluaran = pengeluaran.map((item) => ({
    name: item.title,
    value: item.price,
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPemasukan = await Axios.get(
          "https://dummyjson.com/products?limit=5"
        );
        const resPengeluaran = await Axios.get(
          "https://dummyjson.com/products?skip=5&limit=5"
        );

        setPemasukan(resPemasukan.data.products);
        setPengeluaran(resPengeluaran.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center">Loading ...</p>;
  }

  const COLORS = ["#4CAF50", "#2196F3", "#FF9800", "#F44336"];

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
              <h1 className="text-white text-4xl font-bold">
                Rp{" "}
                {(
                  pemasukan.reduce((a, b) => a + b.price, 0) -
                  pengeluaran.reduce((a, b) => a + b.price, 0)
                ).toLocaleString("id-ID")}
              </h1>
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
              <div className="flex justify-center">
                <PieChart width={300} height={300}>
                  <Pie
                    data={dataPemasukan}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dataPemasukan.map((entry, index) => (
                      <Cell
                        key={`cell-pemasukan-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            </div>
            <table className="w-full text-left mt-4">
              <thead>
                <tr className="border-b">
                  <th>Nama</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                {pemasukan.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>{item.title}</td>
                    <td>Rp {item.price.toLocaleString("id-ID")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex w-full p-8 ">
          <div className="w-full p-8 bg-white shadow-lg rounded-lg mx-2 md:mx-10">
            <h1 className="text-left font-bold text-xl text-blue-600">
              Pengeluaran :
            </h1>
            <div className="w-full border-blue-600">
              <h2>Grafik Lingkaran</h2>
              <div className="flex justify-center">
                <PieChart width={300} height={300}>
                  <Pie
                    data={dataPengeluaran}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dataPengeluaran.map((entry, index) => (
                      <Cell
                        key={`cell-pengeluaran-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            </div>
            <table className="w-full text-left mt-4">
              <thead>
                <tr className="border-b">
                  <th>Nama</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                {pengeluaran.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>{item.title}</td>
                    <td>Rp {item.price.toLocaleString("id-ID")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="flex w-full p-8 ">
          <div className="w-full p-8 bg-white shadow-lg rounded-lg mx-2 md:mx-10 mb-4">
            <h1 className="text-left font-bold text-xl text-blue-600">
              Grafik Naik Turun :
            </h1>
            <div className="w-full border-blue-600">
              <h2>Pengeluaran dan Pemasukan</h2>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </section>
  );
};

export default Dashboard;

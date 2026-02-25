import React, { useState } from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

export default function App() {
  return (
    <div className="overflow-hidden relative">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        theme="light"
      />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

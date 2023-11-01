"use client";
import Header from "../app/components/header/header"
import Footer from "../app/components/footer/footer"
import Search from "../app/components/search/search"
import Table from "../app/components/table/table"
import React, { useState } from 'react';


export default function Home() {
  return (
    <main className="bg-slate-800">
      <Header />
      <Search />
      <Table />
      <Footer />
    </main>
  );
}

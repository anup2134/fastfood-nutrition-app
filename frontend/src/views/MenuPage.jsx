import { useLocation } from "react-router-dom";
import { useState } from "react";
import mcdonalds from "../assets/mcdonald.svg";
import dominos from "../assets/dominos.svg";
import kfc from "../assets/kfc.svg";
import pizzaHut from "../assets/pizza-hut.svg";
import burgerKing from "../assets/burger-king.svg";
import subway from "../assets/subway.svg";
import starbucks from "../assets/starbucks.svg";
import cafeCoffeeDay from "../assets/ccd.svg";

const MenuPage = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [search, setSearch] = useState("");

  return (
    <>
      <header className="sticky top-0 h-[72px] bg-white flex items-center">
        <h1 className="text-[18px] my-10 ml-44 leading-[18px] tracking-[-1px] sticky font-bold sm:mx-2 sm:ml-8">
          HELLO
          <br /> FRESH
        </h1>
      </header>
      <section className="pl-44 sm:pl-8 sm:pt-8 pb-5">
        <img
          src={
            pathname === "/mcdonalds"
              ? mcdonalds
              : pathname === "/dominos"
              ? dominos
              : pathname === "/kfc"
              ? kfc
              : pathname === "/pizzahut"
              ? pizzaHut
              : pathname === "/burgerking"
              ? burgerKing
              : pathname === "/subway"
              ? subway
              : pathname === "/starbucks"
              ? starbucks
              : pathname === "/ccd"
              ? cafeCoffeeDay
              : null
          }
          alt={pathname}
          className="w-[80px] h-[80px] mt-[60px] sm:mt-5"
        />
        <h2 className="text-4xl leading-10 tracking-[-2.5px] mt-5 font-bold">
          {pathname === "/mcdonalds"
            ? "Mc'donalds"
            : pathname === "/dominos"
            ? "Domino's"
            : pathname === "/kfc"
            ? "KFC"
            : pathname === "/pizzahut"
            ? "Pizza Hut"
            : pathname === "/burgerking"
            ? "Burger King"
            : pathname === "/subway"
            ? "Subway"
            : pathname === "/starbucks"
            ? "Starbucks"
            : pathname === "/ccd"
            ? "Cafe Coffee Day"
            : null}
        </h2>
      </section>
      <section className="pl-44 pt-[5.5rem] sm:pl-8 flex items-center justify-between flex-wrap gap-y-3 w-[80vw] sm:w-full sm:flex-col sm:items-start">
        <h2 className="text-2xl font-bold">
          {pathname === "mcdonalds" ? "Mc'donalds" : ""} Menu
        </h2>
        <div className="relative">
          <svg
            className="absolute text-slate-400 h-[30px] w-[30px] top-[7px] left-[10px]"
            viewBox="0 0 20 20"
            fill="black"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>

          <input
            type="text"
            placeholder="Search"
            className="w-[360px] sm:pt-3 h-11 sm:w-full focus:outline-none rounded-full bg-[#f5f7fa] pl-16"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>
    </>
  );
};

export default MenuPage;

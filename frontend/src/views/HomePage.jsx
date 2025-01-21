import mcdonalds from "../assets/mcdonald.svg";
import dominos from "../assets/dominos.svg";
import kfc from "../assets/kfc.svg";
import pizzaHut from "../assets/pizza-hut.svg";
import burgerKing from "../assets/burger-king.svg";
import subway from "../assets/subway.svg";
import starbucks from "../assets/starbucks.svg";
import cafeCoffeeDay from "../assets/ccd.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <header className="sticky top-0 h-[72px] bg-white flex items-center">
        <h1 className="text-[18px] my-10 ml-44 leading-[18px] tracking-[-1px] sticky font-bold sm:mx-2 sm:ml-8">
          HELLO
          <br /> FRESH
        </h1>
      </header>
      <section className="pt-20 pl-44 sm:pl-8 sm:pt-8">
        <h2 className=" font-bold text-[40px] leading-[44px] sm:text-[30px] sm:leading-[34px]">
          Eat better when you
          <br /> go out with friends
        </h2>
        <p className="text-[17px] text-[#737780] mt-6 sm:text-[14px] sm:mt-3">
          Don't cancel your plans of going out and
          <br /> having fun, eat better instead
        </p>
      </section>
      <section className="pl-44 pt-[88px] font-bold text-[18px] sm:pl-8 sm:pt-16 h-[800px]">
        <h2 className="text-[22px] font-bold mb-8 leading-[26.4px] tracking-[-1px]">
          Where are you going to eat?
        </h2>
        <div className="flex flex-wrap p-0 gap-x-4 gap-y-4 max-w-[1100px] sm:max-w-full">
          <Link
            to="/mcdonalds"
            state={{
              chainName: "McDonald's",
              linkToWebsite: "mcdindia.com",
            }}
          >
            <div className="w-[350px] h-[76px] border-2 flex pl-4 sm:pl-0 items-center sm:flex-col border-[#EAEAEA] rounded-lg sm:w-[150px] hover:bg-gray-100">
              <img
                src={mcdonalds}
                alt="mcdonalds"
                className="w-[48px] h-[48px]"
              />
              <span className="ml-6 sm:ml-0">McDonald's</span>
            </div>
          </Link>
          <Link
            to="/dominos"
            state={{
              chainName: "Domino’s Pizza",
              linkToWebsite: "dominos.co.in",
            }}
          >
            <div className="w-[350px] h-[76px] border-2 flex pl-4 sm:pl-0 items-center sm:flex-col border-[#EAEAEA] rounded-lg sm:w-[150px] hover:bg-gray-100">
              <img src={dominos} alt="dominos" className="w-[48px] h-[48px]" />
              <span className="ml-6 sm:ml-0">Domino’s Pizza</span>
            </div>
          </Link>
          <Link
            to="/kfc"
            state={{
              chainName: "KFC",
              linkToWebsite: "kfc.co.in",
            }}
          >
            <div className="w-[350px] h-[76px] border-2 flex pl-4 sm:pl-0 items-center sm:flex-col border-[#EAEAEA] rounded-lg sm:w-[150px] hover:bg-gray-100">
              <img src={kfc} alt="kfc" className="w-[48px] h-[48px]" />
              <span className="ml-6 sm:ml-0">KFC</span>
            </div>
          </Link>
          <Link
            to="/pizzahut"
            state={{
              chainName: "Pizza Hut",
              linkToWebsite: "pizzahut.co.in",
            }}
          >
            <div className="w-[350px] h-[76px] border-2 flex pl-4 sm:pl-0 items-center sm:flex-col border-[#EAEAEA] rounded-lg sm:w-[150px] hover:bg-gray-100">
              <img
                src={pizzaHut}
                alt="pizza-hut"
                className="w-[48px] h-[48px]"
              />
              <span className="ml-6 sm:ml-0">Pizza Hut</span>
            </div>
          </Link>
          <Link
            to="/burgerking"
            state={{
              chainName: "Burger King",
              linkToWebsite: "burgerking.co.in",
            }}
          >
            <div className="w-[350px] h-[76px] border-2 flex pl-4 sm:pl-0 items-center sm:flex-col border-[#EAEAEA] rounded-lg sm:w-[150px] hover:bg-gray-100">
              <img
                src={burgerKing}
                alt="burger-king"
                className="w-[48px] h-[48px]"
              />
              <span className="ml-6 sm:ml-0">Burger King</span>
            </div>
          </Link>
          <Link
            to="/subway"
            state={{
              chainName: "Subway",
              linkToWebsite: "subway.co.in",
            }}
          >
            <div className="w-[350px] h-[76px] border-2 flex pl-4 sm:pl-0 items-center sm:flex-col border-[#EAEAEA] rounded-lg sm:w-[150px] hover:bg-gray-100">
              <img src={subway} alt="subway" className="w-[48px] h-[48px]" />
              <span className="ml-6 sm:ml-0">Subway</span>
            </div>
          </Link>
          <Link
            to="/starbucks"
            state={{
              chainName: "Starbucks",
              linkToWebsite: "starbucks.co.in",
            }}
          >
            <div className="w-[350px] h-[76px] border-2 flex pl-4 sm:pl-0 items-center sm:flex-col border-[#EAEAEA] rounded-lg sm:w-[150px] hover:bg-gray-100">
              <img
                src={starbucks}
                alt="starbucks"
                className="w-[48px] h-[48px]"
              />
              <span className="ml-6 sm:ml-0">Starbucks</span>
            </div>
          </Link>
          <Link
            to="/ccd"
            state={{
              chainName: "Cafe Coffee Day",
              linkToWebsite: "ccdindia.com",
            }}
          >
            <div className="w-[350px] h-[76px] border-2 flex pl-4 sm:pl-0 items-center sm:flex-col border-[#EAEAEA] rounded-lg sm:w-[150px] hover:bg-gray-100">
              <img
                src={cafeCoffeeDay}
                alt="cafe-coffee-day"
                className="w-[48px] h-[48px]"
              />
              <span className="ml-6 sm:ml-0">Cafe Coffee Day</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;

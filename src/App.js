import React, { useState } from "react";
import "./App.css";
import Logo from "./images/logo.png";

function App() {
  const [selectedPeople, setSelectedPeople] = useState("1 Porple");
  const [selectedCookingStyle, setSelectedCookingStyle] = useState("healthy");
  const [selectedCuisine, setSelectedCuisine] = useState("indonesian");
  const [generatedPlan, setGeneratedPlan] = useState("");

  const handleGeneratePlan = () => {
    const plan = `You are cooking for ${selectedPeople}, with a cooking style of ${selectedCookingStyle}, and your favorite cuisine is ${selectedCuisine}.`;
    setGeneratedPlan(plan);
  };

  return (
    <>
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" class="flex items-center">
              <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            </a>
            <div class="flex items-center lg:order-2">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-lime-500 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-lime-500"
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <div className="flex flex-col items-center">
                        <span className="ml-2">Discover</span>
                        <span className="text-base text-gray-500 mr-auto ml-2">
                          Test
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <a className="ml-3 mr-3 border-l border-gray-500 h-12"></a>

                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-lime-500 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-lime-500"
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <div className="flex flex-col items-center">
                        <span className="ml-2">Watch</span>
                        <span className="text-base text-gray-500 mr-auto ml-2">
                          Test
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <a className="ml-3 mr-3 border-l border-gray-500 h-12"></a>

                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-lime-500 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-lime-500"
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <div className="flex flex-col items-center">
                        <span className="ml-2">Detox</span>
                        <span className="text-base text-gray-500 mr-auto ml-2">
                          Test
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="container flex  items-center">
        <div className="border-4 border-gray-500/100 w-full my-4 rounded-lg">
          <div className="header  bg-white">
            <h1 className="title font-bold text-center text-lime-500">
              The Decision Detox
            </h1>
            <p className="text-5xl font-bold text-center">
              starts tonight with your
            </p>
            <p className="text-5xl font-bold text-center">
              personalised meal plan.
            </p>
          </div>

          <div className="bg-slate-200 p-5">
            <h2 className="pt-3">How many people are you cooking for?</h2>
            <select
              className="input rounded-lg"
              value={selectedPeople}
              onChange={(e) => setSelectedPeople(e.target.value)}
            >
              <option value="1 Porple">1 Porple</option>
              <option value="2 Porple">2 Porple</option>
              <option value="3 Porple">3 Porple</option>
            </select>

            <h2 className="pt-3">What's your cooking style?</h2>
            <select
              className="input rounded-lg"
              value={selectedCookingStyle}
              onChange={(e) => setSelectedCookingStyle(e.target.value)}
            >
              <option value="healthy">Healthy</option>
              <option value="comfort">Comfort</option>
              <option value="international">International</option>
            </select>

            <h2 className="pt-3">Choose your favorite cuisine:</h2>
            <select
              className="input rounded-lg"
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
            >
              <option value="indonesian">Indonesian</option>
              <option value="italian">Italian</option>
              <option value="japanese">Japanese</option>
            </select>

            <div className="container flex flex-col items-center justify-center">
              <button
                className="rounded-lg font-bold text-white py-2 px-4 border bg-lime-500 cursor-pointer mt-3"
                onClick={handleGeneratePlan}
              >
                Generate plan
              </button>

              {generatedPlan && <p className="mt-3">{generatedPlan}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Loader from "../include/Loader";
import Menu from "../include/Menu";
import Data from "../json/countryByContinent.json";

import SelectionDropdown from "./components/SelectionDropdown";
export default function CountryManagement() {
  var continentList = [];
  const [countinentList, setCountinentList] = useState([]);
  const [continent, setContinent] = useState();
  const [countryList, setCountryList] = useState([]);
  const [country, setCountry] = useState();
  const [month, setMonth] = useState([]);
  console.log(month);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",

    "November",

    "December",
  ];
  useEffect(() => {
    document.getElementById("page-loader").style.display = "none";

    var element = document.getElementById("page-container");
    element.classList.add("show");
  }, []);
  var temp = [];
  useEffect(() => {
    Data.map((e, i) => {
      continentList.push(e.continent);
    });

    setCountinentList([...new Set(continentList)]);

    var element = document.getElementById("page-container");
    element.classList.add("show");
  }, []);
  const handleContinent = (e) => {
    setContinent(e);
    Data.filter((e1, i) => e1.continent == e).map((e, i) => {
      temp.push(e.country);
    });
    setCountryList(temp);
  };

  return (
    <>
      <Loader />

      <div
        id="page-container"
        className="fade page-sidebar-fixed page-header-fixed"
      >
        <Menu />

        <div id="content" className="content">
          <ol className="breadcrumb float-xl-right">
            <li className="breadcrumb-item basePath ">
              <a href="javascript:;">Home</a>
            </li>
            <li className="breadcrumb-item active currentPath">Dashboard</li>
          </ol>
          <h1 className="page-header">Country Management</h1>

          <p>
            <button
              class="btn btn-outline-success"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Add Country
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <form>
                <SelectionDropdown
                  list={countinentList}
                  setState={handleContinent}
                  label="Continent Name:"
                  firstOption="Select Continent"
                />
                {countryList && continent ? (
                  <>
                    <SelectionDropdown
                      list={countryList}
                      setState={(e) => {
                        setCountry(e);
                      }}
                      label="Country Name:"
                      firstOption="Select Country"
                    />
                  </>
                ) : null}
                <div class="form-group">
                  <label for="exampleInputPassword1"> Category: </label>
                  <br />

                  <div class="form-check form-check-inline ">
                    <input
                      class="form-check-input mt-1"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label class="form-check-label mb-2" for="inlineCheckbox1">
                      Mountains
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input mt-1"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label class="form-check-label mb-2" for="inlineCheckbox2">
                      Sea Side
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input mt-1"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label class="form-check-label mb-2" for="inlineCheckbox2">
                      Adventures
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input mt-1"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label class="form-check-label mb-2" for="inlineCheckbox2">
                      Desert
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input mt-1"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label class="form-check-label mb-2" for="inlineCheckbox2">
                      Romantic
                    </label>
                  </div>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlFile1">Image:</label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Description:</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Places to Visit:
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">
                    Budget Range Per Person:
                  </label>
                  <input
                    type="password"
                    class="form-control ml-0"
                    id="exampleInputPassword1"
                    placeholder="Enter Amount"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Safety Guidelines:
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <SelectionDropdown
                  list={months}
                  setState={(e) => {
                    if (e) setMonth([...month, e]);
                  }}
                  label=" Best Months to Visit:"
                  firstOption="Select Month"
                />

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

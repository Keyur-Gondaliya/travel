import React, { useState, useEffect, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from './include/Loader';
import Menu from './include/Menu';
import Footer from './include/Footer';
export default function Country() {
  useEffect(() => {
    document.getElementById('page-loader').style.display = 'none';

    var element = document.getElementById('page-container');
    element.classList.add('show');
  }, []);

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
            <li className="breadcrumb-item">
              <NavLink to="/dashboard">
                <span className="basePath">Dashboard</span>
              </NavLink>
            </li>
            <li className="breadcrumb-item active currentPath">Banners</li>
          </ol>
          <h1 className="page-header">Banners</h1>
          <br />

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
                <div class="form-group">
                  <label for="exampleInputEmail1"> Country Name:</label>
                  <input
                    type="email"
                    class="form-control ml-0"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Country Name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Continent:</label>
                  <input
                    type="password"
                    class="form-control ml-0"
                    id="exampleInputPassword1"
                    placeholder="Continent"
                  />
                </div>
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
                <div class="form-group">
                  <label for="exampleInputPassword1">
                    Best Months to Visit:
                  </label>
                  <input
                    type="password"
                    class="form-control ml-0"
                    id="exampleInputPassword1"
                    placeholder="Enter Month"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* <!-- Add Country Section Start --> */}

          {/* <!-- Add Country Section End --> */}

          <Footer />
        </div>
      </div>
    </>
  );
}

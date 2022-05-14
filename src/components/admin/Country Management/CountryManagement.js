import React, { useState, useEffect } from 'react';
import Loader from '../include/Loader';
import Menu from '../include/Menu';
export default function CountryManagement() {
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState({});
  const [addPicture, setAddPicture] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    document.getElementById('page-loader').style.display = 'none';

    var element = document.getElementById('page-container');
    element.classList.add('show');
  }, []);

  const [formData, setFormData] = useState({
    countryName: '',
    continent: '',
    description: '',
    placeToVisit: '',
    budget: '',
    safetyGuidelines: '',
    bestMonths: '',
  });
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);

  const uploadPicture = async (e) => {
    e.preventDefault();
    setAddPicture(true);
    setImage(e.target.files[0]);
  };

  //console.log(formData);

  const validate = () => {
    let isValid = true;
    let input = formData;
    let error = {};
    if (!input['countryName']) {
      isValid = false;
      error['countryName'] = 'Please enter country name';
    }
    if (!input['continent']) {
      isValid = false;
      error['continent'] = 'Please enter continent';
    }
    if (!addPicture) {
      isValid = false;
      error['img_err'] = 'Please select the image.';
    }
    if (!input['description']) {
      isValid = false;
      error['description'] = 'Please enter description';
    }
    if (!input['placeToVisit']) {
      isValid = false;
      error['placeToVisit'] = 'Please enter name of place ';
    }
    if (!input['budget']) {
      isValid = false;
      error['budget'] = 'Please enter budget';
    }
    if (!input['safetyGuidelines']) {
      isValid = false;
      error['safetyGuidelines'] = 'Please enter guidelines';
    }
    if (!input['bestMonths']) {
      isValid = false;
      error['bestMonths'] = 'Please enter months';
    }
    if (
      option1 == false &&
      option2 == false &&
      option3 == false &&
      option4 == false &&
      option5 == false
    ) {
      isValid = false;
      error['multiChoice'] = 'Please select any one';
    }
    setError(error);
    //return isValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validate();
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
            <li className="breadcrumb-item active currentPath">
              Country Management
            </li>
          </ol>
          <h1 className="page-header">Country Management</h1>

          <p>
            <button
              className="btn btn-outline-success"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{ borderRadius: '20px' }}
            >
              Add Country
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div
              className="card card-body d-flex justify-content-xl-start"
              style={{ borderRadius: '20px' }}
            >
              <form className="CountryForm" onSubmit={submitHandler}>
                <div className="form-group mb-4">
                  <label for="exampleInputEmail1"> Country Name:</label>
                  <input
                    type="text"
                    className="form-control ml-0"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Country Name"
                    name="countryName"
                    value={formData.countryName}
                    onChange={(e) =>
                      setFormData({ ...formData, countryName: e.target.value })
                    }
                  />
                  <div className="text-danger">{error.countryName}</div>
                </div>
                <div className="form-group mb-4">
                  <label for="exampleInputPassword1">Continent:</label>
                  <input
                    type="text"
                    className="form-control ml-0"
                    id="exampleInputPassword1"
                    placeholder="Continent"
                    name="continent"
                    value={formData.continent}
                    onChange={(e) =>
                      setFormData({ ...formData, continent: e.target.value })
                    }
                  />
                  <div className="text-danger">{error.continent}</div>
                </div>

                <div className="form-group mb-4">
                  <label for="exampleInputPassword1"> Category: </label>
                  <br />

                  <div className="form-check form-check-inline ">
                    <input
                      className="form-check-input mt-1"
                      type="checkbox"
                      id="inlineCheckbox1"
                      name="option1"
                      value="option1"
                      onClick={(e) => setOption1(!option1)}
                    />
                    <label
                      className="form-check-label mb-2 checkBox"
                      for="inlineCheckbox1"
                    >
                      Mountains
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input mt-1"
                      type="checkbox"
                      id="inlineCheckbox2"
                      name="option2"
                      value="option2"
                      onClick={(e) => setOption2(!option2)}
                    />
                    <label
                      className="form-check-label mb-2 checkBox"
                      for="inlineCheckbox2"
                    >
                      Sea Side
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input mt-1"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option3"
                      name="option3"
                      onClick={(e) => setOption3(!option3)}
                    />
                    <label
                      className="form-check-label mb-2 checkBox"
                      for="inlineCheckbox2"
                    >
                      Adventures
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input mt-1"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option4"
                      name="option4"
                      onClick={(e) => setOption4(!option4)}
                    />
                    <label
                      className="form-check-label mb-2 checkBox"
                      for="inlineCheckbox2"
                    >
                      Desert
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input mt-1"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option5"
                      name="option5"
                      onClick={(e) => setOption5(!option5)}
                    />
                    <label
                      className="form-check-label mb-2 checkBox"
                      for="inlineCheckbox2"
                    >
                      Romantic
                    </label>
                  </div>
                  <div className="text-danger">{error.multiChoice}</div>
                </div>

                <div className="form-group mb-4">
                  <label for="exampleFormControlFile1">Image:</label>
                  <input
                    type="file"
                    className="form-control-file imgInput"
                    id="exampleFormControlFile1"
                    onChange={uploadPicture}
                  />
                  <div className="text-danger">{error.img_err}</div>
                </div>
                <div className="form-group mb-4">
                  <label for="exampleFormControlTextarea1">Description:</label>
                  <textarea
                    className="form-control textArea"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  ></textarea>
                  <div className="text-danger">{error.description}</div>
                </div>
                <div className="form-group mb-4">
                  <label for="exampleFormControlTextarea1">
                    Places to Visit:
                  </label>
                  <textarea
                    className="form-control textArea"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="placeToVisit"
                    value={formData.placeToVisit}
                    onChange={(e) =>
                      setFormData({ ...formData, placeToVisit: e.target.value })
                    }
                  ></textarea>
                  <div className="text-danger">{error.placeToVisit}</div>
                </div>
                <div className="form-group mb-4">
                  <label for="exampleInputPassword1">
                    Budget Range Per Person:
                  </label>
                  <input
                    type="text"
                    className="form-control ml-0"
                    id="exampleInputPassword1"
                    placeholder="Enter Amount"
                    name="budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                  />
                  <div className="text-danger">{error.budget}</div>
                </div>
                <div className="form-group mb-4">
                  <label for="exampleFormControlTextarea1">
                    Safety Guidelines:
                  </label>
                  <textarea
                    className="form-control textArea"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="safetyGuidelines"
                    value={formData.safetyGuidelines}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        safetyGuidelines: e.target.value,
                      })
                    }
                  ></textarea>
                  <div className="text-danger">{error.safetyGuidelines}</div>
                </div>
                <div className="form-group mb-4">
                  <label for="exampleInputPassword1">
                    Best Months to Visit:
                  </label>
                  <input
                    type="text"
                    className="form-control ml-0"
                    id="exampleInputPassword1"
                    placeholder="Enter Month"
                    name="bestMonths"
                    value={formData.bestMonths}
                    onChange={(e) =>
                      setFormData({ ...formData, bestMonths: e.target.value })
                    }
                  />
                  <div className="text-danger">{error.bestMonths}</div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={disable}
                >
                  {disable ? 'Processing...' : 'Upload'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

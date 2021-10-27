import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "./style.css";

const answers = ['A', 'B', 'C', 'D', 'E']
const Main = () => {
  const [questionNum, SetQuestionNum] = useState(52);
  const [qNum, SetqNum] = useState(1);
  const [aNum, SetaNum] = useState('A');

  const fields = [];
  for (let i = 1; i <= questionNum; i++) {
    fields.push(<li className="list-group-item" key={`q-${i}`} onClick={() => SetqNum(i)}>{i}</li>);
  }
  const aNums = [];
  const AnswerClick = (e, item) => {
    // e.value === true?
    for (let i = 1; i <= aNums.length; i++) {
      aNums.push(item);
    }
  }

  return (
    <div className="row mt-80 m-0 p-0">
      <div className="col-12 col-md-8 h-75 m-0 p-0">
        <div className="background">
        </div>
        <div className="d-flex flex-column align-items-center">
          <button className="question-btn mt-4 text-uppercase fw-bold btn btn-outline-primary">
            YOU SELECTED ANSWER {answers} FOR QUESTION NUMBER {qNum}
          </button>
          <button className="submit-btn text-uppercase fw-bold btn btn-outline-primary">
            SUBMIT
          </button>
        </div>
      </div>
      <div className="col-12 col-md-4 m-0 p-0">
        <div className="container">
          <h4 class="fw-bold my-5">Testing Sections</h4>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
              Select Test Section
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={() => SetQuestionNum(52)} active>
                Section 1 (Reading)
              </Dropdown.Item>
              <Dropdown.Item onClick={() => SetQuestionNum(44)} >Section 2 (Writing and Language)</Dropdown.Item>
              <Dropdown.Item onClick={() => SetQuestionNum(18)} >Section 3 (Math and Cale)</Dropdown.Item>
              <Dropdown.Item onClick={() => SetQuestionNum(38)} >Section 4 (Math and Cale)</Dropdown.Item>
              <Dropdown.Item onClick={() => SetQuestionNum(12)} >Expiremental</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className="question-btn mt-4 text-uppercase fw-bold btn btn-outline-primary">
            Next Question
          </button>
          <button className="question-btn mt-4 text-uppercase fw-bold btn btn-outline-primary">
            Previous Question
          </button>
          <div className="mt-5 row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-header">
                  <h6 className="fw-bold"> Question </h6>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    {fields}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-header">
                  <h6 className="fw-bold"> Answer </h6>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    {answers.map((item, index) => (
                      <li className="list-group-item" key={`a-${index}`} >
                        <div className="d-flex align-items-center">
                          <input type="checkbox" onChange={(e) => AnswerClick(e, item)}/>
                          <p className="d-inline-block ml-1 mb-0">{item}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
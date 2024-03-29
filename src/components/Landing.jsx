import React from "react";
import logo from "../logo-lg.png";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import axios from "axios";

const Landing = () => {
  const [details, setDetails] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/feeds");
    }
  }, [navigate]);

  async function fetchDetails() {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/api/feeds/landing-details/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setDetails(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <div className="row landing-page-row">
        <div className="col-lg-5 landing-page-container"></div>
        <div className="col-lg-7">
          <div className="landing-page-nav">
            <Link to="/login">
              <span className="mr-4">Login</span>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </div>
          <div className="landing-page-info">
            <img src={logo} alt="logo" height="150" />
            <h1 className="landing-page-title">IntelliJobs</h1>
            <h2>Let us "build" a job for you !</h2>
          </div>
          <div className="row text-center ml-1">
            <div className="card landing-page-card col-sm">
              <div className="mt-2">
                <Icon
                  icon="ph:users-three"
                  fontSize={"4rem"}
                  color={"var(--primary)"}
                />
              </div>
              <div>
                <ul className="list font-14 mt-2">
                  <li>
                    <p className="font-weight-bold font-16 mb-2">About Us</p>
                  </li>
                  <li>
                    <p>
                      IntelliJobs is a Job Portal where you can find variety of job vacancies and build an excellent career
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card landing-page-card col-sm">
              <div className="mt-2">
                <Icon
                  icon="fluent:mail-open-person-24-regular"
                  fontSize={"4rem"}
                  color={"var(--primary)"}
                />
              </div>
              <div>
                <ul className="list font-14 mt-2">
                  <li>
                    <p className="font-weight-bold font-16 mb-2">Contact Us</p>
                  </li>
                  <li>
                    <p>
                      You can reach to us through our primary email address or phone number
                      <br />
                      <strong>intellijobs@gmail.com</strong> 
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card landing-page-card col-sm">
              <div className="mt-2">
                <Icon
                  icon="fluent:target-arrow-24-regular"
                  fontSize={"4rem"}
                  color={"var(--primary)"}
                />
              </div>
              <div>
                <ul className="list font-14 mt-2">
                  <li>
                    <p className="font-weight-bold font-16 mb-2">Our Goal</p>
                  </li>
                  <li>
                    <p>
                      Our aim is to assist all of our users find a decent job help them build a wonderful career.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="landing-work-title">How It Works</h1>
      </div>
      <div className="row landing-work-row">
        <div className="card landing-page-card col-sm-2">
          <div className="mt-2">
            <Icon
              icon="ph:user-circle-plus-duotone"
              fontSize={"4rem"}
              color={"var(--primary)"}
            />
          </div>
          <div>
            <ul className="list font-14 mt-2">
              <li>
                <p className="font-weight-bold font-16 mb-2">Register</p>
              </li>
              <li>
                <p>
                 Register your personal and professional details.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <Icon icon="entypo:arrow-long-right" className="landing-work-arrow" />
        <div className="card landing-page-card col-sm-2">
          <div className="mt-2">
            <Icon
              icon="icon-park-outline:search"
              fontSize={"3.5rem"}
              color={"var(--primary)"}
            />
          </div>
          <div>
            <ul className="list font-14 mt-2">
              <li>
                <p className="font-weight-bold font-16 mb-2">Search Jobs</p>
              </li>
              <li>
                <p>
                  Search among wide range of job openings of your preference.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <Icon icon="entypo:arrow-long-right" className="landing-work-arrow" />
        <div className="card landing-page-card col-sm-2">
          <div className="mt-2">
            <Icon
              icon="mdi:sticker-check-outline"
              fontSize={"3.5rem"}
              color={"var(--primary)"}
            />
          </div>
          <div>
            <ul className="list font-14 mt-2">
              <li>
                <p className="font-weight-bold font-16 mb-2">Apply</p>
              </li>
              <li>
                <p>
                  Apply to the job vacancy as you desire.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <Icon icon="entypo:arrow-long-right" className="landing-work-arrow" />
        <div className="card landing-page-card col-sm-2">
          <div className="mt-2">
            <Icon
              icon="ph:user-circle-gear-duotone"
              fontSize={"4rem"}
              color={"var(--primary)"}
            />
          </div>
          <div>
            <ul className="list font-14 mt-2">
              <li>
                <p className="font-weight-bold font-16 mb-2">Get Placed</p>
              </li>
              <li>
                <p>
                  Get a good job placement.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1 className="landing-stats-title">Our Work In Numbers</h1>
      </div>
      <div className="row landing-work-row pb-5">
        <div className="col-lg-3 col-md-4 mb-lg-0 mb-3">
          <div className="card card-stats cardbg-blue">
            <div>
              <div className="icon">
                <Icon
                  icon="ic:twotone-work-history"
                  fontSize={"2.5rem"}
                  color={"#fff"}
                />
              </div>
              <p className="title">Active Vacancies</p>
            </div>
            <h1 className="value">{details.active_vacancies}</h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mb-lg-0 mb-3">
          <div className="card card-stats cardbg-red">
            <div>
              <div className="icon">
                <Icon
                  icon="ion:business"
                  fontSize={"2rem"}
                  color={"#fff"}
                />
              </div>
              <p className="title">Organizations</p>
            </div>
            <h1 className="value">{details.organizations}</h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mb-lg-0 mb-3">
          <div className="card card-stats cardbg-green">
            <div>
              <div className="icon">
                <Icon
                  icon="la:user-tie"
                  fontSize={"2.8rem"}
                  color={"#fff"}
                />
              </div>
              <p className="title">Job Seekers</p>
            </div>
            <h1 className="value">{details.job_seekers}</h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mb-lg-0 mb-3">
          <div className="card card-stats cardbg-purple-20">
            <div>
              <div className="icon">
                <Icon
                  icon="ic:baseline-work-outline"
                  fontSize={"4rem"}
                  color={"#fff"}
                />
              </div>
              <p className="title">Total Vacancies</p>
            </div>
            <h1 className="value">{details.total_vacancies}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

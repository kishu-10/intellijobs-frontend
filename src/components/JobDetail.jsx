import Footer from "./Footer";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { showError, showSuccess } from "../utils/toast";

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  const fetchJob = useCallback(async () => {
    try {
      const result = await axios.get(
        `http://127.0.0.1:8000/api/jobs/detail/${jobId}/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setJob(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [jobId]);

  useEffect(() => {
    fetchJob();
  }, [fetchJob]);

  const addToWishlist = () => {
    const formData = new FormData();
    formData.append("job", jobId);
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/jobs/wishlist/add/",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        fetchJob();
        showSuccess(response.data.data.message);
      })
      .catch((error) => {
        showError("Error");
      });
  };

  if (job) {
    return (
      <>
        <Navbar />
        <div className="row">
          <div className="job-detail-head">
            <img className="img-fluid" src={job.category.image} alt="" />
            <div className="col-lg-8">
              <div className="job-title-div">
                <div className="job-title-desc">
                  <h1>{job.title}</h1>
                  <h3 className="mt-3">{job.organization}</h3>
                  <p className="text-justify">
                   {job.org_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="job-detail-section">
          <div className="container job-detail-container pl-5">
            <div className="row">
              <div className="col-lg-9 ml-3">
                <h2 className="txt-primary pt-3">About Job</h2>
                <div className="row">
                  <div className="col-md-4 col-sm-6 mb-3">
                    <div className="card-job-detail">
                      <p>Job Category</p>
                      <p className="txt-primary">{job.category.name}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <div className="card-job-detail">
                      <p>No. of Vacancy</p>
                      <p className="txt-primary">{job.no_of_vacancy}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <div className="card-job-detail">
                      <p>Employment Type</p>
                      <p className="txt-primary">{job.employment_type}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <div className="card-job-detail">
                      <p>Job Location</p>
                      <p className="txt-primary">{job.job_address}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <div className="card-job-detail">
                      <p>Offered Salary</p>
                      <p className="txt-primary">{job.offered_salary}</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-3">
                    <div className="card-job-detail">
                      <p>Level</p>
                      <p className="txt-primary">{job.job_level}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 ml-5">
                <div className="job-detail-actions">
                  <Icon
                    icon={`${
                      job.is_wishlist
                        ? "fa-solid:bookmark"
                        : "fa-regular:bookmark"
                    }`}
                    className="ml-3 mr-2"
                    style={{ cursor: "pointer", color: "var(--primary)" }}
                    onClick={() => addToWishlist()}
                  />
                  <button className="btn btn-primary ml-4">Apply Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="job-detail-desc">
                <h2>Qualification & Experience</h2>
                <h4>Education Level</h4>
                <ul>
                  <li>{job.education_level}</li>
                </ul>
                <h4>Experience Required</h4>
                <ul>
                  <li>{job.experienced_required} years</li>
                </ul>
              </div>
              <div className="job-detail-desc">
                <h2>Job Description</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: job.description }}
                ></div>
              </div>
              <div className="job-detail-desc">
                <h2>Required Skills</h2>
                <div dangerouslySetInnerHTML={{ __html: job.skills }}></div>
              </div>
              <div className="job-detail-desc">
                <h2>Other Specifications</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: job.other_specification }}
                ></div>
              </div>
              <div className="job-detail-desc">
                <h2>Career Benefits</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: job.career_benefits }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return <>Loading ....</>;
};

export default JobDetail;

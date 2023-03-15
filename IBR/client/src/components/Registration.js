import React, { useState } from "react";
import webApi from "../web/webApi";
import WebService from "../web/webService";
import "./Registration.css";

export default function Registration() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [fathersname, setFathersname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [maritialstatus, setMaritialstatus] = useState("");
  const [annualincome, setAnnualincome] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [alternatecontact, setAlternatecontact] = useState("");
  const [board10, setBoard10] = useState("");
  const [school10, setSchool10] = useState("");
  const [pass10, setPass10] = useState("");
  const [per10, setPer10] = useState("");
  const [board12, setBoard12] = useState("");
  const [school12, setSchool12] = useState("");
  const [pass12, setPass12] = useState("");
  const [per12, setPer12] = useState("");
  const [universityUG, setUniversityUG] = useState("");
  const [collegeUG, setCollegeUG] = useState("");
  const [passUG, setPassUG] = useState("");
  const [perUg, setPerUg] = useState("");
  const [universityPG, setUniversityPG] = useState("");
  const [collegePG, setCollegePG] = useState("");
  const [passPG, setPassPG] = useState("");
  const [perPg, setPerPg] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");
  const [photo, setPhoto] = useState("");
  const [adhaarcard, setAdhaarcard] = useState("");
  const [fadhaarcard, setFadhaarcard] = useState("");
  const [incomecertificate, setIncomecertificate] = useState("");
  const [sssmid, setSssmid] = useState("");
  const [marksheet12, setMarksheet12] = useState("");
  const [recentkypassout, setRecentkypassout] = useState("");

  const register =async (e) => {
    e.preventDefault();
        // let studentDetails = {
    //   firstname,
    //   lastname,
    //   fathersname,
    //   dob,
    //   gender,
    //   maritialstatus,
    //   annualincome,
    //   email,
    //   contact,
    //   alternatecontact,
    //   board10,
    //   school10,
    //   pass10,
    //   per10,
    //   board12,
    //   school12,
    //   pass12,
    //   per12,
    //   universityUG,
    //   collegeUG,
    //   passUG,
    //   perUg,
    //   universityPG,
    //   collegePG,
    //   passPG,
    //   perPg,
    //   address,
    //   state,
    //   city,
    //   q1,
    //   q2,
    //   q3,
    //   q4,
    //   q5,
    // };
    let formData = new FormData();
    formData.set("firstname",firstname)
    formData.set("lastname",lastname)
    formData.set("fathersname",fathersname)
    formData.set("dob",dob)
    formData.set("gender",gender)
    formData.set("maritialstatus",maritialstatus)
    formData.set("annualincome",annualincome)
    formData.set("email",email)
    formData.set("contact",contact)
    formData.set("alternatecontact",alternatecontact)
    formData.set("board10",board10)
    formData.set("school10",school10)
    formData.set("pass10",pass10)
    formData.set("per10",per10)
    formData.set("board12",board12)
    formData.set("school12",school12)
    formData.set("pass12",pass12)
    formData.set("per12",per12)
    formData.set("universityUG",universityUG)
    formData.set("collegeUG",collegeUG)
    formData.set("passUG",passUG)
    formData.set("perUG",perUg)
    formData.set("universityPG",universityPG)
    formData.set("collegePG",collegePG)
    formData.set("passPG",passPG)
    formData.set("perPG",perPg)
    formData.set("address",address)
    formData.set("state",state)
    formData.set("city",city)
    formData.set("q1",q1)
    formData.set("q2",q2)
    formData.set("q3",q3)
    formData.set("q4",q4)
    formData.set("q5",q5)
    formData.append("docs", photo);
    formData.append("docs", adhaarcard);
    formData.append("docs", fadhaarcard);
    formData.append("docs", incomecertificate);
    formData.append("docs", sssmid);
    formData.append("docs", marksheet12);
    formData.append("docs", recentkypassout);

    console.log(formData);

    try {
      let res = await WebService.postApi(webApi.REGISTER_STUDENT,formData);
      if(res.data.status){
        window.alert("successfull");
          console.log(res.data.result);
      }
      else  
        window.alert("error");
      } catch (error) {
        console.log(error);
      window.alert("error");
      
    }

  };
  return (
    <div style={{ width: "auto" }}>
      <div style={{ borderTop: "15px solid #ab2330" }}>
        <h3
          style={{
            fontFamily: "Arial Narrow', Arial",
            fontSize: " 35px",
            marginTop: "25px",
          }}
        >
          <center>Student Registration Form</center>
        </h3>
      </div>
      <div
        className="row container-fluid"
        style={{ width: "auto", marginTop: " 30px" }}
      >
        <div className="step-height col-lg-3 col-md-3 col-sm-3 col-xs-3 head2">
          <a className="">
            <span className="badge badge-danger active">1 </span>
          </a>
          <span className="step-label active remove-pointer">
            {" "}
            Personal Details{" "}
          </span>
          <i className="right"></i>
        </div>

        <div className="step-height col-lg-3 col-md-3 col-sm-3 col-xs-3 head2">
          <a className="">
            <span className="badge active">2 </span>
          </a>
          <span className="step-label active remove-pointer">
            Qualification Details{" "}
          </span>
          <i className="right"></i>
        </div>

        <div className="step-height col-lg-3 col-md-3 col-sm-3 col-xs-3 head2">
          <a className="">
            <span className="badge active">3 </span>
          </a>
          <span className="step-label active remove-pointer">
            {" "}
            Address Details{" "}
          </span>
          <i className="right"></i>
        </div>

        <div className="step-height col-lg-3 col-md-3 col-sm-3 col-xs-3 head2">
          <a className="">
            <span className="badge active">4 </span>
          </a>
          <span className="step-label active remove-pointer">
            {" "}
            Image Upload{" "}
          </span>
          <i className="right"></i>
        </div>
      </div>

      <small className="float-right" style={{ color: "red" }}>
        All fields marked in * are mandatory
      </small>

      <form onSubmit={register}>
        <div className="container-fluid">
          <div className="section-header">Personal Details</div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="firstname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="lname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lname"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="fathername">Father Name</label>
              <input
                type="text"
                className="form-control"
                id="fathername"
                onChange={(e) => setFathersname(e.target.value)}
              />
            </div>

            <div className="form-group col-md-6">
              <label for="dob">Date of Birth </label>
              <input
                id="dob"
                className="form-control"
                type="date"
                name="dob"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-3 my-4">
              <label for="gender" className="fieldlabels">
                Gender
              </label>
              <input
                className="col-md-1"
                type="radio"
                id="gender1"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                value="Male"
              />{" "}
              <label for="gender1">Male</label>
              <input
                className="col-md-1"
                type="radio"
                id="gender2"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                value="Female"
              />{" "}
              <label for="gender2">Female</label>
              <br />
            </div>
            <div className="form-group col-md-3 col-sm-3 my-4">
              <label for="maritialstatus" className="fieldlabels">
                Maritialstatus
              </label>
              <input
                className="col-md-1"
                type="radio"
                id="maritialstatus1"
                name="maritialstatus"
                onChange={(e) => setMaritialstatus(e.target.value)}
                value="Married"
              />
              <label for="maritialstatus1">Married</label>
              <input
                className="col-md-1"
                type="radio"
                onChange={(e) => setMaritialstatus(e.target.value)}
                id="maritialstatus2"
                name="maritialstatus"
                value="Unmarried"
              />
              <label for="maritialstatus2">Unmarried</label> <br />
            </div>

            <div className="form-group col-md-6">
              <label className="fieldlabels ">Annual Income: *</label>
              <input
                id="annualincome"
                className="form-control"
                type="text"
                onChange={(e) => setAnnualincome(e.target.value)}
                name="annualincome"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="fieldlabels">Email</label>
              <input
                id="email"
                className="form-control"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Id"
              />
            </div>

            <div className="form-group col-md-3">
              <label className="fieldlabels">Mobile Number</label>
              <input
                id="contact"
                className="form-control"
                type="text"
                onChange={(e) => setContact(e.target.value)}
                name="contact"
              />
            </div>
            <div className="form-group col-md-3">
              <label className="fieldlabels">Alternate Mobile Number</label>
              <input
                id="contact"
                className="form-control"
                type="text"
                onChange={(e) => setAlternatecontact(e.target.value)}
                name="contact"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="section-header">Qualification Details</div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <fieldset className="border p-3 rounded">
                <legend className="w-auto">
                  Class 10<sup>th</sup>
                </legend>
                <div className="row">
                  <div className="col-md-6">
                    <label className="fieldlabels">Board &emsp; &emsp; </label>
                    <select
                      id="board10"
                      name="board10"
                      onChange={(e) => setBoard10(e.target.value)}
                    >
                      <option value="StateBoard">State Board</option>
                      <option value="CBSC">CBSC</option>
                      <option value="ICSE">ICSE</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="fieldlabels">Passing Year &ensp;</label>
                    <select
                      id="pass10"
                      name="pass10"
                      className="pss"
                      onChange={(e) => setPass10(e.target.value)}
                    >
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label forper10="per10">Percentage</label>
                    input{" "}
                    <input
                      id="per10"
                      type="number"
                      name="per10"
                      onChange={(e) => setPer10(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="school10">School Name</label>
                    <input
                      id="school10"
                      type="text"
                      name="school10"
                      onChange={(e) => setSchool10(e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="form-group col-md-6">
              <fieldset className="border p-3 rounded">
                <legend className="w-auto">
                  Class 12<sup>th</sup>
                </legend>
                <div className="row">
                  <div className="col-md-6">
                    <label className="fieldlabels">Board &emsp; &emsp; </label>
                    <select
                      id="board12"
                      name="board12"
                      onChange={(e) => setBoard12(e.target.value)}
                    >
                      <option value="StateBoard">State Board</option>
                      <option value="CBSC">CBSC</option>
                      <option value="ICSE">ICSE</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="fieldlabels">Passing Year &ensp;</label>
                    <select
                      id="pass12"
                      name="pass12"
                      className="pss"
                      onChange={(e) => setPass12(e.target.value)}
                    >
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label for="per12">Percentage</label>
                    <input
                      id="per12"
                      type="number"
                      name="per12"
                      onChange={(e) => setPer12(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="school12">School Name</label>
                    <input
                      id="school12"
                      type="text"
                      name="school12"
                      onChange={(e) => setSchool12(e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <fieldset className="border p-3 rounded">
                <legend className="w-auto">Under Graduation</legend>
                <div className="row">
                  <div className="col-md-6">
                    <label className="fieldlabels">University &ensp; </label>
                    <input
                      id="universityUG"
                      type="text"
                      name="universityUG"
                      onChange={(e) => setUniversityUG(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="fieldlabels">Passing Year &ensp;</label>
                    <select
                      id="passUG"
                      name="passUG"
                      className="pss"
                      onChange={(e) => setPassUG(e.target.value)}
                    >
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label for="perUG">Percentage</label>
                    <input
                      id="perUG"
                      type="number"
                      name="perUG"
                      onChange={(e) => setPerUg(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="collageUG">Collage Name</label>
                    <input
                      id="collageUG"
                      type="text"
                      name="collageUG"
                      onChange={(e) => setCollegeUG(e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="form-group col-md-6">
              <fieldset className="border p-3 rounded">
                <legend className="w-auto">Post Graduation</legend>
                <div className="row">
                  <div className="col-md-6">
                    <label className="fieldlabels">University &ensp; </label>
                    <input
                      id="universityPG"
                      type="text"
                      name="universityPG"
                      onChange={(e) => setUniversityPG(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="fieldlabels">Passing Year &ensp;</label>
                    <select
                      id="passPG"
                      name="passPG"
                      className="pss"
                      onChange={(e) => setPassPG(e.target.value)}
                    >
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label for="perUG">Percentage</label>
                    <input
                      id="perPG"
                      type="number"
                      name="perPG"
                      onChange={(e) => setPerPg(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="collagePG">Collage Name</label>
                    <input
                      id="collagePG"
                      type="text"
                      name="collagePG"
                      onChange={(e) => setCollegePG(e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="section-header">Address Details</div>

          <div className="form-row ">
            <div className="form-group col-md-6">
              <fieldset className="border p-3 rounded">
                <legend className="w-auto">Local Address</legend>

                <div className="row">
                  <div className="col-md-6">
                    <label className="fieldlabels">State &ensp;</label>
                    <select
                      id="board10"
                      name="board10"
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="StateBoard">Choose State</option>
                      <option value="CBSC">CBSC</option>
                      <option value="ICSE">ICSE</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="fieldlabels">City &ensp; </label>
                    <select
                      id="board10"
                      name="board10"
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="StateBoard">Choose City</option>
                      <option value="CBSC">CBSC</option>
                      <option value="ICSE">ICSE</option>
                    </select>
                  </div>
                </div>

                <label for="localaddress">Full Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="localaddress"
                  name="localaddress"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </fieldset>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-10">
              <fieldset className="border p-3 rounded">
                <legend className="w-auto">Questions</legend>
                <i className="fa fa-pencil-square-o">
                  &ensp; WHAT IS YOUR INTERST ?
                </i>
                <textarea
                  id="form10"
                  className="md-textarea form-control"
                  onChange={(e) => setQ1(e.target.value)}
                  rows="3"
                ></textarea>
                <i className="fa fa-pencil-square-o">
                  &ensp; WHAT IS YOUR INTERST ?
                </i>
                <textarea
                  id="form10"
                  className="md-textarea form-control"
                  onChange={(e) => setQ2(e.target.value)}
                  rows="3"
                ></textarea>
                <i className="fa fa-pencil-square-o">
                  &ensp; WHAT IS YOUR INTERST ?
                </i>
                <textarea
                  id="form10"
                  className="md-textarea form-control"
                  onChange={(e) => setQ3(e.target.value)}
                  rows="3"
                ></textarea>
                <i className="fa fa-pencil-square-o">
                  &ensp; WHAT IS YOUR INTERST ?
                </i>
                <textarea
                  id="form10"
                  className="md-textarea form-control"
                  onChange={(e) => setQ4(e.target.value)}
                  rows="3"
                ></textarea>
                <i className="fa fa-pencil-square-o">
                  &ensp; WHAT IS YOUR INTERST ?
                </i>
                <textarea
                  id="form10"
                  className="md-textarea form-control"
                  onChange={(e) => setQ5(e.target.value)}
                  rows="3"
                ></textarea>
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
              <label className="">Photo</label>
              <input
                className="form-control my-3"
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
              ></input>
              <label className="">Adhaar Card</label>
              <input
                className="form-control my-3"
                type="file"
                onChange={(e) => setAdhaarcard(e.target.files[0])}
              ></input>
              <label className="">Father's Adhaar Card</label>
              <input
                className="form-control my-3"
                type="file"
                onChange={(e) => setFadhaarcard(e.target.files[0])}
              ></input>
              <label className="">Income Certificate</label>
              <input
                className="form-control my-3"
                type="file"
                onChange={(e) => setIncomecertificate(e.target.files[0])}
              ></input>
              <label className="">SSSMID Number</label>
              <input
                className="form-control my-3"
                type="file"
                onChange={(e) => setSssmid(e.target.files[0])}
              ></input>
              <label className="">
                12<sup>th</sup> Merksheet{" "}
              </label>
              <input
                className="form-control my-3"
                type="file"
                onChange={(e) => setMarksheet12(e.target.files[0])}
              ></input>
              <label className="">Recently Passout Marksheet</label>
              <input
                className="form-control my-3 "
                type="file"
                onChange={(e) => setRecentkypassout(e.target.files[0])}
              ></input>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-danger my-4 float-right">
          Register
        </button>
      </form>
    </div>
  );
}

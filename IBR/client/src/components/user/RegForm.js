import { TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { uni } from './university'
import { states } from './state'
import { Form, Button } from 'semantic-ui-react'
import  {useForm } from 'react-hook-form';
import WebService from '../../web/webService';
import webApi from '../../web/webApi';
import { toast, ToastContainer } from "react-toastify";

export default function RegForm() {
    //text field states
    const { register, handleSubmit, formState: { errors } } = useForm();
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
    const [statef, setStatef] = useState("");
    const [cityf, setCityf] = useState("");
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

    /*************************************************************/
    const [state, setState] = useState([]);;
    const [city, setCity] = useState([]);
    const [passingYear, setPassingYear] = useState([]);
    const [subsUG, setSubsUG] = useState([]);
    const [subsPG, setSubsPG] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [contentUG, setContentUG] = useState(<></>);
    const [contentPG, setContentPG] = useState(<></>);
    const [contactSt, setContactSt] = useState(false);
    const [qualificationSt, setQualificationSt] = useState(false);
    const [addressSt, setAddressSt] = useState(false);
    const [documentSt, setDocumentSt] = useState(false);
    const [qnaSt, setQnaSt] = useState(false);
    const calPassingYear = () => {
        let curYear = new Date().getFullYear();
        let arr = [];
        for (let i = 1; i <= 15; i++) {
            arr.push(curYear--);
        }
        setPassingYear(arr);
    }
    const ugSub = () => {
        let subs = ["B.tech", "BCA", "BBA", "Bsc", "Bcom", "BA"];
        setSubsUG(subs);
    }
    const pgSub = () => {
        let subs = ["M.tech", "MCA", "MBA", "Msc'", "Mcom", "MA"];
        setSubsPG(subs);
    }
    const unversities = () => {

    }
    const statesFetch = () => {
        let st = [];
        for (const i in states) {
            st.push(i);
        }
        setState(st);
    }
    const cityFetch = (e) => {
        let st = e.target.value;
        if (st == "0")
            setCity([]);
        else
            setCity(states[st]);
    }
    useEffect(() => {
        calPassingYear();
        ugSub();
        pgSub();
        // getStateApi();
        setUniversities(uni);
        statesFetch()
    }, [])

    const changeUgStatus = (e) => {
        console.log("in UG");
        let com = <div>
            <Form.Field>
                <input className='form-control my-4' list='unilist' type="text" placeholder='Enter University Name' {...register('qualificationUG.university')}></input>
            </Form.Field>
            <Form.Field>
                <input className='form-control my-4' list='unilist' type="text" placeholder='Enter College name' {...register('qualificationUG.college')}></input>
                <datalist id='unilist'>
                    {uni.sort().map((university, index) => <option key={index} value={university}>{university}</option>)}
                </datalist>
            </Form.Field>
            <Form.Field>
                <select className='form-select my-4' {...register('qualificationUG.subject')}>
                    <option value="0">Select Subject</option>
                    {subsUG.map((sub, index) => <option key={index} value={sub}>{sub}</option>)}
                </select>
            </Form.Field>
            <Form.Field>
                <select className='form-select' {...register('qualificationUG.passingyear')}>
                    <option value="0">Select passing year...</option>
                    {passingYear.map((year, index) => <option key={index} value={year}>{year}</option>)}
                </select>
            </Form.Field>
            <Form.Field>
                <input className='form-control my-4' type="number" placeholder='Enter percentage' {...register('qualificationUG.percentage')}></input>
            </Form.Field>
        </div>

        let per = <div>
            <Form.Field>
                <input className='form-control my-4' list='unilist' type="text" placeholder='Enter University Name' {...register('qualificationUG.university')}></input>
            </Form.Field>
            <Form.Field>
                <input className='form-control my-4' list='unilist' type="text" placeholder='Enter College name' {...register('qualificationUG.college')}></input>
                <datalist id='unilist'>
                    {uni.sort().map((university, index) => <option key={index} value={university}>{university}</option>)}
                </datalist>
            </Form.Field>
            <Form.Field>
                <select className='form-select my-4' {...register('qualificationUG.subject')}>
                    <option value="0">Select Subject</option>
                    {subsUG.map((sub, index) => <option key={index} value={sub}>{sub}</option>)}
                </select>
            </Form.Field>
            <Form.Field>
                <select className='form-select' {...register('qualificationUG.passingyear')}>
                    <option value="0">Select Year</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                    <option value="Fourth">Fourth</option>
                </select>
            </Form.Field>
        </div>
        if (e.target.value == 'completed') {
            setContentUG(com);
        }
        else if (e.target.value == 'persuing') {
            setContentUG(per);
        }
        else {
            setContentUG(<></>)
        }

    }

    const changePgStatus = (e) => {
        // console.log(e.target.value);
        let com = <div>
            <input className='form-control my-4' list='unilist' type="text" placeholder='Enter University Name' {...register("qualificationPG.university")}></input>
            <input className='form-control my-4' list='unilist' type="text" placeholder='Enter College name' {...register("qualificationPG.college")}></input>
            <datalist id='unilist'>
                {uni.sort().map((university, index) => <option key={index} value={university}>{university}</option>)}
            </datalist>
            <select className='form-select my-4' {...register("qualificationPG.subject")}>
                <option value="0">Select Subject</option>
                {subsPG.map((sub, index) => <option key={index} value={sub}>{sub}</option>)}
            </select>
            <select className='form-select' {...register("qualificationPG.passingyear")}>
                <option value="0">Select passing year...</option>
                {passingYear.map((year, index) => <option key={index} value={year}>{year}</option>)}
            </select>
            <input className='form-control my-4' type="number" placeholder='Enter percentage' {...register("qualificationPG.percentage")}></input>
        </div>

        let per = <div>
            <input className='form-control my-4' list='unilist' type="text" placeholder='Enter University Name' {...register("qualificationPG.university")}></input>
            <input className='form-control my-4' list='unilist' type="text" placeholder='Enter College name' {...register("qualificationPG.college")}></input>
            <datalist id='unilist'>
                {uni.sort().map((university, index) => <option key={index} value={university}>{university}</option>)}
            </datalist>
            <select className='form-select my-4' {...register("qualificationPG.subject")}>
                <option value="0">Select Subject</option>
                {subsPG.map((sub, index) => <option key={index} value={sub}>{sub}</option>)}
            </select>
            <select className='form-select' {...register("qualificationPG.runningyear")}>
                <option value="0">Select Year</option>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
                <option value="Fourth">Fourth</option>
            </select>
        </div>
        if (e.target.value == 'completed') {
            setContentPG(com);
        }
        else if (e.target.value == 'persuing') {
            setContentPG(per);
        }
        else {
            setContentPG(<></>)
        }

    }
    let css = {
        borderRadius: '25px'
    }
    const hello = async(data) => {
        // console.log(data);
        // console.log("-------------------------------------------------------");
        // console.log(photo)
        // console.log("-------------------------------------------------------");
        // console.log(adhaarcard)
        // console.log("--------------------------------------------------------");
        // console.log(fadhaarcard)
        // console.log("-------------------------------------------------------");
        // console.log(incomecertificate)
        // data=JSON.parse(JSON.stringify(data))
        
            let formData = new FormData();
                formData.append("docs", photo);
                formData.append("docs", adhaarcard);
                formData.append("docs", fadhaarcard);
                formData.append("docs", incomecertificate);
                formData.append("docs", sssmid);
                formData.append("docs", marksheet12);
                formData.append("docs", recentkypassout);
                formData.set("data", JSON.stringify(data));
                //console.log(DATA)
              
        try {
            console.log(data);
            let res = await WebService.postApi(webApi.ADD_REGISTRATION,formData);
            if (res.data.status) {
            //   dispatch(updatePlacement(res.data.result));
              toast.success("Placement uploaded successfully");
            }
          } catch (error) {
            console.log(error);
            toast.error("Oops!.. something went wrong");
          }
        
    }

    const docss = (data) => {
        console.log(data);
    }
    return (
        <div className="container text-center">
            <ul className="nav nav-tabs m-auto">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#personal">Personal</a>
                </li>
                <li className="nav-item" >
                    <a className="nav-link" data-bs-toggle="tab" href="#contact" disabled={contactSt}>Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#qualification" disabled={qualificationSt}>Qualification</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#address" disabled={addressSt}>Address</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#documents" disabled={documentSt}>Documents</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#qna" disabled={qnaSt}>QnA</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane container active" id="personal">
                    <div className='row my-5'>
                        <div className='col-md-10 m-auto'>
                            <div className='form-group border p-5 bg-light' style={css}>
                                <center><h3>Personal Details</h3></center>
                                <center><hr style={{ width: '30%', fontSize: '20px' }}></hr></center>
                                <Form onSubmit={handleSubmit(hello)}>
                                    <Form.Field>
                                        <input
                                            className='form-control my-4' type="text" placeholder='First Name' {...register('firstname')}></input>
                                    </Form.Field>
                                    <Form.Field>
                                        <input className='form-control my-4' type="text" placeholder='Last Name' {...register('lastname')}></input>
                                    </Form.Field>
                                    <Form.Field>
                                        <input className='form-control my-4' type="text" placeholder='Father Name' {...register('fathersname')}></input>
                                    </Form.Field>
                                    <Form.Field>
                                        <input className='form-control my-4' type="date" placeholder='Date of birth' {...register('dob')}></input>
                                    </Form.Field>
                                    <Form.Field>
                                        <select className='form-select my-4' {...register('gender')}>
                                            <option value="0">Select gender...</option>
                                            <option value="Male">Male</option>
                                            <option value="Male">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </Form.Field>
                                    <Form.Field>
                                        <select className='form-select my-4' {...register('maritialstatus')}>
                                            <option value="0">Select Maritial Status...</option>
                                            <option value="Married">Married</option>
                                            <option value="Unmarried">Unmarried</option>
                                        </select>
                                    </Form.Field>
                                    {/* <Button type='submit'>Submit Form</Button> */}
                                </Form>
                                {/* <button onClick={personalDetailFunction} className='btn btn-success'>Click</button> */}
                                <div>
                                    <a className="nav-link" data-bs-toggle="tab" href="#contact" disabled={contactSt}>Contact</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane container fade" id="contact">
                    <div className='row my-5'>
                        <div className='col-md-10 m-auto border p-5 my-5 bg-light' style={css}>
                            <center><h3>Contact Details</h3></center>
                            <center><hr style={{ width: '30%', fontSize: '20px' }}></hr></center>
                            <div className='form-group my-5'>
                                <Form>
                                    <Form.Field>
                                        <input className='form-control my-4' type="text" placeholder='Email Id' {...register('email')}></input>
                                    </Form.Field>
                                    <Form.Field>
                                        <input className='form-control my-4' type="number" placeholder='Contact Number' {...register('contact')}></input>
                                    </Form.Field>
                                    <Form.Field>
                                        <input className='form-control my-4' type="number" placeholder='Alternate Contact Number' {...register('alternatecontact')}></input>
                                    </Form.Field>
                                    <Form.Field>
                                        <input className='form-control my-4' type="number" placeholder='Annual Income' {...register('annualincome')}></input>
                                    </Form.Field>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane container fade" id="qualification">
                    <Form>
                        <div className='row my-5'>
                            <div className='col-md-10 m-auto border p-5 my-5 bg-light' style={css}>
                                <center><h3>Qualification Details</h3></center>
                                <center><hr style={{ width: '30%', fontSize: '20px' }}></hr></center>
                                <div className='form-group my-5'>
                                    <h4>10<sup>th</sup> </h4>
                                    <Form.Field>
                                        <select className='form-select' {...register('qualification10.board')}>
                                            <option value="0">Select Board..</option>
                                            <option value="CBSE">CBSE</option>
                                            <option value="ICSE">ICSE</option>
                                            <option value="State board">State Board</option>
                                        </select>
                                    </Form.Field>
                                    <Form.Field>
                                        <input className='form-control my-4' type="text" placeholder='Enter school name' {...register('qualification10.school')}></input>
                                    </Form.Field>
                                    <Form.Field>
                                        <select className='form-select' {...register('qualification10.passingyear')}>
                                            <option value="0">Select passing year...</option>
                                            {passingYear.map((year, index) => <option key={index} value={year}>{year}</option>)}
                                        </select>
                                    </Form.Field>
                                    <Form.Field>
                                        <input className='form-control my-4' type="number" placeholder='Enter percentage' {...register('qualification10.percentage')}></input>
                                    </Form.Field>
                                </div>
                                <div className='form-group my-5'>
                                    <h4>12<sup>th</sup> </h4>
                                    <Form.Field>
                                        <select className='form-select' {...register('qualification12.board')}>
                                            <option value="0">Select Board..</option>
                                            <option value="CBSE">CBSE</option>
                                            <option value="ICSE">ICSE</option>
                                            <option value="State board">State Board</option>
                                        </select>
                                    </Form.Field>
                                    <Form.Field>
                                        <input className='form-control my-4' type="text" placeholder='Enter school name' {...register('qualification12.school')}></input>
                                    </Form.Field>
                                    <Form.Field>
                                        <select className='form-select'>
                                            <option value="0" {...register('qualification12.passingyear')}>Select passing year...</option>
                                            {passingYear.map((year, index) => <option key={index} value={year}>{year}</option>)}
                                        </select>
                                    </Form.Field>
                                    <Form.Field>
                                        <input className='form-control my-4' type="number" placeholder='Enter percentage' {...register('qualification12.percentage')}></input>
                                    </Form.Field>
                                </div>
                                <div className='form-group my-5'>
                                    <h4>Under Graduation</h4>
                                    <Form.Field>
                                        <select {...register("qualificationUG.status")} onChange={changeUgStatus} className='form-control my-4' >
                                            <option value="0">Select option..</option>
                                            <option value="persuing">Persuing</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </Form.Field>
                                    {contentUG}
                                </div>
                                <div className='form-group my-5'>
                                    <h4>Post Graduation</h4>
                                    <Form.Field>
                                        <select {...register('qualificationPG.status')} onChange={changePgStatus} className='form-control my-4'>
                                            <option value="0">Select option..</option>
                                            <option value="persuing">Persuing</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </Form.Field>
                                    {contentPG}
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="tab-pane container fade" id="address">
                    <div className='row my-5'>
                        <div className='col-md-10 m-auto border p-5 my-5 bg-light' style={css}>
                            <h4>Address Information</h4>
                            <Form>
                                <Form.Field>
                                    <textarea className='form-control my-4' placeholder='full Address' {...register("address")}></textarea>
                                </Form.Field>
                                <Form.Field>
                                    <select  {...register("state")} onChange={cityFetch} className='form-select my-4'>
                                        <option value="0">Select State..</option>
                                        {state.map((st, index) => <option value={st} key={index}>{st}</option>)}
                                    </select>
                                </Form.Field>
                                <Form.Field>
                                    <select  {...register("city")} className='form-select my-4'>
                                        {city.map((ct, index) => <option value={ct} key={index}>{ct}</option>)}
                                    </select>
                                </Form.Field>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="tab-pane container fade" id="documents">
                    <div className='row my-5'>
                        <div className='col-md-10 m-auto border p-5 my-5 bg-light' style={css}>
                            <h4>Upload Your document</h4>
                            <div>
                                {/* <Form.Field> */}
                                    <lable className="form-lable">Passport size photo</lable>
                                    
                                    <input className='form-control my-2' type="file" onChange={(e)=>setPhoto(e.target.files[0])}></input>
                                {/* </Form.Field> */}
                                {/* <Form.Field> */}
                                    <lable className="form-lable">Adhaar card</lable>
                                    <input className='form-control my-2' type="file"onChange={(e)=>setAdhaarcard(e.target.files[0])}></input>
                                {/* </Form.Field> */}
                                {/* <Form.Field> */}
                                    <lable className="form-lable">Father's adhaar card</lable>
                                    <input className='form-control my-2' type="file"onChange={(e)=>setFadhaarcard(e.target.files[0])}></input>
                                {/* </Form.Field> */}
                                {/* <Form.Field> */}
                                    <lable className="form-lable">Income certificate</lable>
                                    <input className='form-control my-2' type="file" onChange={(e)=>setIncomecertificate(e.target.files[0])}></input>
                                {/* </Form.Field> */}
                                {/* <Form.Field> */}
                                    <lable className="form-lable">SSSMID</lable>
                                    <input className='form-control my-2' type="file" onChange={(e)=>setSssmid(e.target.files[0])}></input>
                                {/* </Form.Field> */}
                                {/* <Form.Field> */}
                                    <lable className="form-lable">Marksheet 12<sup>th</sup></lable>
                                    <input className='form-control my-2' type="file" onChange={(e)=>setMarksheet12(e.target.files[0])}></input>
                                {/* </Form.Field> */}
                                {/* <Form.Field> */}
                                    <lable className="form-lable">Recently passout marksheet</lable>
                                    <input className='form-control my-2' type="file" onChange={(e)=>setRecentkypassout(e.target.files[0])}></input>
                                {/* </Form.Field> */}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="tab-pane container fade" id="qna">
                    <div className='row my-5'>
                        <div className='col-md-10 m-auto form-group my-5 border p-5 bg-light' style={css}>
                            <h4>Please answer all the questions in 200 words:-</h4>
                            <Form  onSubmit={handleSubmit(hello)}>
                                <Form.Field>
                                    <lable className='form-lable'><b>Q1:- </b>What other courses you are doing right now?</lable>
                                    <textarea className='form-control my-3' {...register("q1")}></textarea>
                                </Form.Field>
                                <Form.Field>
                                    <lable className='form-lable'><b>Q2:- </b>What is your ambition in next five years?</lable>
                                    <textarea className='form-control my-3' {...register("q2")}></textarea>
                                </Form.Field>
                                <Form.Field>
                                    <lable className='form-lable'><b>Q3:- </b>Why do you want to persue carrer in I.T. sector ? Narrate an incident?</lable>
                                    <textarea className='form-control my-3' {...register("q3")}></textarea>
                                </Form.Field>
                                <Form.Field>
                                    <lable className='form-lable'><b>Q4:- </b>Write about yourself and your family</lable>
                                    <textarea className='form-control my-3' {...register("q4")}></textarea>
                                </Form.Field>
                                <Form.Field>
                                    <lable className='form-lable'><b>Q5:- </b>Write your commitments in the family and expectations of your parents?</lable>
                                    <textarea className='form-control my-3' {...register("q5")}></textarea>
                                </Form.Field>
                                <Button type='submit'>Submit Form</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


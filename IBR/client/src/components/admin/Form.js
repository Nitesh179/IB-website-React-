import { useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import WebService from "../../web/webService";
import webApi from "../../web/webApi";
import { updateGallery } from "../../web/gallerySlice";
import { toast, ToastContainer } from "react-toastify";
import { updateNews } from "../../web/NewsSlice";
import { updatePlacement } from "../../web/placementSlice";
import { Box, Tab, Tabs} from "@mui/material";

export default function Forms() {
  const dispatch = useDispatch();
  const [filename, setFilename] = useState("");
  const [category, setCategory] = useState("");
  const [caption, setCaption] = useState("");

  const [headline, setHeadline] = useState("");
  const [fullNews, setFullNews] = useState("");

  const [studentName, setStudentName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [studentImage, setStudentImage] = useState("");

  // Save placement function
  const addPlacement = async (e) => {
    e.preventDefault();

    // console.log("=> ",studentName)
    // console.log("=> ",companyName)

    let formData = new FormData();
    formData.append("placementImage", studentImage);
    formData.set("name", studentName);
    formData.set("company", companyName);

    try {
      let res = await WebService.postApi(webApi.ADD_PLACEMENT, formData);
      if (res.data.status) {
        dispatch(updatePlacement(res.data.result));
        toast.success("Placement uploaded successfully");
        setStudentName("");
        setCompanyName("");
        setStudentImage("");
      }
    } catch (error) {
      console.log(error);
      toast.error("Oops!.. something went wrong");
    }
  };

  // save gallery function
  const addGallery = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("galleryImage", filename);
    formData.set("category", category);
    formData.set("caption", caption);

    try {
      let res = await WebService.postApi(webApi.ADD_GALLERY, formData);

      if (res.data.status) {
        dispatch(updateGallery(res.data.result));
        toast.success("Image uploaded successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Oops!.. something went wrong");
    }
  };
  const addNews = async (e) => {
    e.preventDefault();

    try {
      let res = await WebService.postApi(webApi.ADD_NEWS, {
        headline,
        fullnews: fullNews,
      });

      if (res.data.status) {
        dispatch(updateNews(res.data.result));
        toast.success("News uploaded successfully");
      }
    } catch (error) {
      toast.error("Oops!.. something went wrong");
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          {/* Add gallery */}
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Gallery Updates</h6>
              <form>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setCaption(e.target.value)}
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="News Heading"
                  />
                  <label for="floatingPassword">Caption</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="News Heading"
                  />
                  <label for="floatingPassword">Category</label>
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    onChange={(event) => setFilename(event.target.files[0])}
                    type="file"
                    id="formFile"
                  />
                </div>
                <button
                  type="submit"
                  onClick={addGallery}
                  className="btn1 btn btn-primary"
                >
                  upload
                </button>
              </form>
            </div>
          </div>

          {/* News Upload */}
          <div className="col-sm-12 col-xl-6">
            <form>
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">News Updates</h6>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    onChange={(e) => setHeadline(e.target.value)}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="News Heading"
                  />
                  <label for="floatingPassword">News Heading</label>
                </div>

                <div className="form-floating">
                  <textarea
                    onChange={(e) => setFullNews(e.target.value)}
                    className="form-control"
                    placeholder="News Updates"
                    id="floatingTextarea"
                    style={{ height: "150px" }}
                  ></textarea>
                  <label for="floatingTextarea">Full News</label>
                </div>
              </div>
              <button
                type="submit"
                onClick={addNews}
                className="btn1 btn btn-primary"
              >
                upload
              </button>
            </form>
          </div>

          {/* Add Placement */}
          <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4">Placement Updates</h6>
              <form>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setStudentName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Student Name"
                  />
                  <label for="floatingPassword">Student Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setCompanyName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Company Name"
                  />
                  <label for="floatingPassword">Company Name</label>
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    onChange={(event) => setStudentImage(event.target.files[0])}
                    type="file"
                    id="formFile"
                  />
                </div>
                <button
                  type="submit"
                  onClick={addPlacement}
                  className="btn1 btn btn-primary"
                >
                  upload
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

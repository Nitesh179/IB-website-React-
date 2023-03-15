import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import webApi from "../../web/webApi";
import WebService from "../../web/webService";
import { toast, ToastContainer } from "react-toastify";
import { deleteContact} from '../../web/contactSlice'

export default function ContactReply() {
  const [message, setMessage] = useState("");
  const [btnStatus, setBtnStatus] = useState("visible")
  const [spStatus, setSpStatus] = useState("hidden")
  const { contactList } = useSelector((state) => state.contact.value);
  const dispatch=useDispatch();

  const reply = async (user,index) => {

      setSpStatus('visible')
    setBtnStatus('hidden');
    user = JSON.parse(JSON.stringify(user));
    user.reply = message;
    try {
      let res = await WebService.postApi(webApi.MESSAGE_REPLY, user);
      if (res.data.status) {
        toast.success("Reply sent successfully");
        dispatch(deleteContact(index));
        setBtnStatus('visible');
        setSpStatus('hidden');
      } else {
        toast.error("Internal server error");
        setBtnStatus('visible');
        setSpStatus('hidden')
      }
    } catch (error) {}
  };
  return (
    <div className="container">
      <ToastContainer />
      {contactList.length == 0 && (
        <center>
          <h3>No new queries</h3>
        </center>
      )}
      <table className="table text-center">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th colSpan={2}>Reply</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((query, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{query.name}</td>
              <td>{query.email}</td>
              <td>{query.message}</td>
              <td>
                <input
                  className="form-control"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="enter your reply"
                ></input>
              </td>
              <td>
                <button
                style={{visibility:btnStatus}}
                  onClick={() => {reply(query,index)}}
                  className="btn btn-outline-success"
                >
                  Reply
                </button>
               
              </td>
              <td>
              <div className="spinner-border" style={{visibility:spStatus}} role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

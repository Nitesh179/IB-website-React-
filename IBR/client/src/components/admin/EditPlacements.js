import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import webApi from '../../web/webApi';
import WebService from '../../web/webService';
import {toast,ToastContainer} from 'react-toastify'
import { deletePlacement } from '../../web/placementSlice';
export default function EditPlacements() {
    const dispatch = useDispatch();
    const {placementList} = useSelector(state=>state.placement.value);
    const deletePlacements = async(id,index)=>{
        try {
            let res = await WebService.getApi(webApi.DELETE_PLACEMENT+"/"+id);
            if(res.data.status){
                toast.success("Record deleted successfully");
                dispatch(deletePlacement(index));
            }
            else
            toast.error("Oops!.. something went wrong");
        } catch (error) {
            toast.error("Oops!.. something went wrong");
        }
    }
  return (
    <div className='container table-responsive'>
        <ToastContainer/>
        <table className='table text-center'>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {placementList.map((student,index)=><tr key={index}>
                    <td>{index+1}</td>
                    <td><img src={"/placement/"+student.image} className="img-fluid" style={{width:'150px',height:'100px'}}></img></td>
                    <td>{student.name}</td>
                    <td>{student.company}</td>
                    <td><button className='btn btn-outline-danger' onClick={()=>deletePlacements(student._id,index)}>Delete</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

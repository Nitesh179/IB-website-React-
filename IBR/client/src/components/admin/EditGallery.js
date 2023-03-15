import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import webApi from '../../web/webApi';
import WebService from '../../web/webService';
import {toast,ToastContainer} from 'react-toastify'
import { deleteGallery} from '../../web/gallerySlice'
export default function EditGallery() {
    const dispatch = useDispatch();
    const {galleryList} = useSelector(state=>state.gallery.value);
    const deleteImage = async(id,index)=>{
        try {
            let res = await WebService.getApi(webApi.DELETE_GALLERY+"/"+id);
            if(res.data.status){
                toast.success("Record deleted successfully");
                dispatch(deleteGallery(index));
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
                    <th>Caption</th>
                    <th>Category</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {galleryList.map((img,index)=><tr key={index}>
                    <td>{index+1}</td>
                    <td><img src={"/images/"+img.image} className="img-fluid" style={{width:'150px',height:'100px'}}></img></td>
                    <td>{img.caption}</td>
                    <td>{img.category}</td>
                    <td><button className='btn btn-outline-danger' onClick={()=>deleteImage(img._id,index)}>Delete</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

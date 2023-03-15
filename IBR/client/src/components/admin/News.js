import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import webApi from '../../web/webApi';
import WebService from '../../web/webService';
import {toast,ToastContainer} from 'react-toastify';
import { deleteNews } from '../../web/NewsSlice';
export default function News() {
    const {newsList} = useSelector(state=>state.news.value);
    const dispatch = useDispatch();
    const delImage =async (id)=>{
       let res = await WebService.getApi(webApi.NEWS_DELETE+"/"+id);
        if(res.data.status){
            dispatch(deleteNews());
            toast.success("News Deleted successfully");
        }
        else
            toast.error("Oop!... something went wrong");


    }
  return (
    <div className='container'>
        <ToastContainer/>
        <div className='row'>
            <table className='table border'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Headline</th>
                        <th>Fullnews</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {newsList.map((news,index)=><tr key={index}>
                    <td>{index+1}</td>
                    <td>{news.headline}</td>
                    <td>{news.fullnews}</td>
                    <td><button className='btn btn-primary'>Edit</button></td>
                    <td><button onClick={()=>delImage(news._id)} className='btn btn-outline-danger'>Delete</button></td>
                </tr>)}
                </tbody>
            </table>
        </div>
    </div>
  )
}

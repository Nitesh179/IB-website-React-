import React, { useEffect, useState } from 'react'

export default function GalleryItems({currentItems}) {
    const [gList, setGList] = useState([]);
    useEffect(()=>{
        setGList(currentItems);
    },[])
  return (
    <div className="row portfolio-container" data-aos-easing="ease-in-out" data-aos-duration="500">
    {gList.map((img,index)=><div key={index} className="col-lg-4 col-md-6 portfolio-wrap filter-app">
        <div className="portfolio-item">
          <img src={"/images/"+img.image} style={{minHeight:"250px",maxHeight:'250px',width:'100%'}} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h3>{img.caption}</h3>
            <p className='text-white'><b>{img.dateOfUpload}</b></p>
            <div>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  )
}

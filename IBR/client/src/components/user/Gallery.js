import { maxHeight } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./gallery.css"
export default function Gallery() {
  const {galleryList} = useSelector(state=>state.gallery.value);
  const [gList,setGlist] = useState([...galleryList]);
  const [cat,setCat] = useState([]);
  useState(()=>{
    let arr = [...new Set(galleryList.map(img=>img.category))];
    setCat([...arr]);
  },[])
  const filImage = (category)=>{
    if(category == 'all'){
      setGlist([...galleryList]);
    }
    else{
      let arr = galleryList.filter(img=>img.category === category);
      setGlist([...arr]);
    }
  }
  
  return <>
    <main id="main">
      <section className="portfolio my-5">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" onClick={()=>filImage('all')} className="filter-active">All</li>
                {cat.map((category,index)=><li onClick={()=>filImage(category)} key={index}>{category}</li>)}
                
              </ul>
            </div>
          </div>
          <hr></hr>
          <div className="row portfolio-container" data-aos-easing="ease-in-out" data-aos-duration="500">
          {gList.map((img,index)=><div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
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
        </div>
      </section>
      {/* <!-- End Portfolio Section --> */}

    </main>

  </>
}

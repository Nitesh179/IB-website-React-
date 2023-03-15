import { useSelector } from "react-redux";
import '../Table.css';

export default function StudentTable(){
    const {registrationList} = useSelector(state=>state.admin.value.registration);
   
    return<>
     

          
    {registrationList.length==0 ? <div className="d-flex align-items-center">
        <strong>Please Wait Data Loading....</strong>
        <div className="spinner-border ms-5" role="status" aria-hidden="true"></div>
      </div> : " "}
          

{/* new table */}

<div class="heading">
    <h1 className="m-auto">Registeration List</h1>
</div>
    <div class="outer-wrapper">
    <div class="table-wrapper">
    <table>
        <thead className="text-white">
                <th>S.no</th>
                <th>Student Image</th>
                <th>Register Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>contact</th>
                <th>Alternate No.</th>
                <th>Address</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Family Income</th>
                <th>Married</th>
                <th>10th Percent</th>
                <th>12th Percent</th>
                <th>UG Percent</th>
                <th>PG Percent</th>
        </thead>
        <tbody>
           {registrationList.map((obj,index)=>{
            return <tr key={index} >
              <td>{index+1}</td>
              {/* <td style={{padding:'',textAlign:""}}>
                    <img src={"/documents/"+obj.docs[0]}  alt="image not Available" className="rounded h-25 w-25"/>
              </td> */}
              <td style={{width:"300px"}}  > <img src={"/documents/"+obj.docs[0]}  alt="image not Available" className="rounded h-50 w-25"/> </td>
                
                  <td>{obj.dateOfRegistration}</td>
                  <td>{obj.firstname +" "+ obj.lastname}</td>
                  <td>{obj.email}</td>
                  <td>{obj.contact}</td>
                  <td>{obj.alternatecontact}</td>
                  <td>{obj.address}</td>
                  <td>{obj.dob}</td>
                  <td>{obj.gender}</td>
                  <td>{obj.annualincome}</td>
                  <td>{obj.maritialstatus}</td>
                  <td>{obj.qualification10.percentage+" "+"("+obj.qualification10.passingyear+")"}</td>
                  <td>{obj.qualification12.percentage+" "+"("+obj.qualification12.passingyear+")"}</td>
                  <td>{obj.qualificationUG.percentage+" "+"("+obj.qualificationUG.passingyear+")"}</td>
                  <td>{obj.qualificationPG.percentage+" "+"("+obj.qualificationPG.passingyear+")"}</td>

            </tr>

           })}
           

        </tbody>
    </table>
</div>
</div>



    </>
}
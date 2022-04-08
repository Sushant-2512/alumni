import React from 'react';
import AlumniCard from './AlumniCard';
import {useState,useEffect} from 'react';
import axios from "axios";
// let  Dummy_array=[]
// function getData(user)
// {
//   if(user==="Student")
//   {
//      axios.get("http://localhost:5000/students/")
//      .then( function(res)
//    {
//          console.log(res.data);
//          setArray(res.data);
//     });
//   }
//   else {
//     axios.get("http://localhost:5000/alumni/")
//     .then( function(res)
//   {
//         console.log(res.data);
//    });
//   }
// }


const SearchAlumni = () => {
      const [profession,manageProfession]=useState("Student");
      const [Dummy_array,setArray]=useState([]);
      function manageChange(event) {

         const {value}=event.target;
         console.log(value);
         manageProfession(value);
      }
      // getData("Student");
      useEffect(()=>{
        function getData(user)
        {
          if(user==="Student")
          {
             axios.get("http://localhost:5000/students/")
             .then( function(res)
           {
                 console.log(res.data);
                 setArray(res.data);
            });
          }
          else {
            axios.get("http://localhost:5000/alumni/")
            .then( function(res)
          {
                console.log(res.data);
                setArray(res.data);
           });
          }
        }
        console.log(profession);
        getData(profession)
      },[profession])
      // function manageChange(event) {
      //
      //    const {value}=event.target;
      //    console.log(value);
      //    manageProfession(value);
      // }
      let main_array=[];
      for(var i=0;i<Dummy_array.length;i++)
      {
          if(Dummy_array[i].profession==profession)
          {
              main_array.push(Dummy_array[i]);
          }
      }
      console.log(main_array);

    const renderAlumni=main_array.map((alumni,index)=>(<AlumniCard data={alumni} key={index}/>))
    return (
        <div>
        <div className="searchAlumni">
        <select name="profession" className="form-control"  onChange={manageChange}>
                    <option className="form-control " value="google-pay"  disabled selected>select Profession</option>
                      <option className="form-control" value="Student">Student</option>
                    <option className="form-control" value="Computer Science Engenering">Computer Science Engenering</option>
                    <option className="form-control" value="Civil Engenering">Civil Engenering</option>
                      <option className="form-control" value="mechanical Engenering">mechanical Engenering</option>
                        <option className="form-control" value="Electrical Engenering">Electrical Engenering</option>
                          <option className="form-control" value="Electronics Engenering">Electronics Engenering</option>
                            <option className="form-control" value="Civil Services">Civil Services</option>
                                <option className="form-control" value="IT sector">IT sector</option>
                              <option className="form-control" value="BSc">BSc</option>
                                <option className="form-control" value="MBBS">MBBS</option>
                                  <option className="form-control" value="BHMS">BHMS</option>
                                    <option className="form-control" value="BAMS">BAMS</option>

        </select>
        </div>
        <div className="alumni-box">
          {renderAlumni}
        </div>
        </div>
    );
};

export default SearchAlumni;

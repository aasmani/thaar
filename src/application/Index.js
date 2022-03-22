import React, { useEffect, useState } from 'react'
import "./Index.css"
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const[category , setCategory] = useState([])
    const [togle , setTogle] = useState(false)
  const getCategories = async ()=>{
      try{
        const response = await fetch("https://logibricks.com/api/blogCategories")
        const resjson = await response.json()
        console.log(resjson.data);
        setCategory(resjson.data)
      }catch (error){
        console.log(`the error is ${error}`);
      }
  }
    useEffect(()=>{
        getCategories();
    },[])
   console.log(category);
   let navigate = useNavigate();


  return (
      <>
    
      <button style={{margin: "5rem 0 0 5rem",
    width: "25%",
    height: "10vh",
    fontSize: "1.7rem",
    fontWeight: "700",
     padding: "1rem 1rem",
     borderRadius: "56px",
    color: "#0077b6",
    backgroundColor: "skyblue",
    cursor:"pointer",
    boxShadow: "2px 2px 20px rgb(19 35 204)",
    border:" 1px",
}} onClick={()=>setTogle(!togle)}>Click Here For Categories
      </button>

      {togle ?  <div  className='categories'>
      <h1 style={{textTransform:"uppercase"}}>{category[4].slug} <button style={{paddingTop:"5.5px" , cursor:"pointer"}} onClick={()=>{
        navigate("/page1")
      }}>Click To Know More</button></h1>
      <h1 style={{textTransform:"uppercase"}}>{category[5].slug} <button style={{paddingTop:"5.5px ", cursor:"pointer"}} onClick={()=>{
        navigate("/page2")
      }}>Click To Know More</button></h1>
      <h1 style={{textTransform:"uppercase"}}>{category[3].slug} <button style={{paddingTop:"5.5px ", cursor:"pointer"}} onClick={()=>{
        navigate("/page2")
      }}>Click To Know More</button></h1>
      <h1 style={{textTransform:"uppercase"}}>{category[2].slug} <button style={{paddingTop:"5.5px" , cursor:"pointer"}} onClick={()=>{
        navigate("/page2")
      }}>Click To Know More</button></h1>
      <h1 style={{textTransform:"uppercase"}}>{category[1].slug} <button style={{paddingTop:"5.5px" , cursor:"pointer"}} onClick={()=>{
        navigate("/page1")
      }}>Click To Know More</button></h1>
      <h1 style={{textTransform:"uppercase"}}>{category[0].slug} <button style={{paddingTop:"5.5px" , cursor:"pointer"}} onClick={()=>{
        navigate("/page1")
      }}>Click To Know More</button></h1>
     
    </div> : null}

    
    </>
  )
}

export default Index
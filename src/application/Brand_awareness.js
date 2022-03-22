import React, { useEffect, useState } from "react";



const Brand_awareness = () => {
    const[category , setCategory] = useState([])
    
         const getUsers = async ()=>{
         try{
            const response = await fetch("https://logibricks.com/api/blogs/brand-awareness?page=1")
            const resjson = await response.json()
            console.log(resjson.blogs.data)
            setCategory(resjson.blogs.data)
         }catch(error){
           
            console.log(`the error is ${error}`);
         }
         
     }


     
      useEffect(()=>{
        getUsers();
     },[]);


 
  
 
    return (
        <>
     <div style={{
               border: "2px solid black",
               borderRadius: "7px",
              padding: "5px 10px",
              width :"105%", 
              backgroundColor: "#8338ec14"
              }}>
                 <h1 style={{textAlign:"center" , backgroundColor: "#8338ec14"}}>Brand-Awarness</h1>
        {category.map((detail)=>{
            return(
                
                <div  >
                <p>{detail.title}</p>
               <img style={{ width: "35%",
                             height: "154px",
                             marginLeft: "27%",
                             borderRadius: "49%"}} src={detail.full_img}></img>
               <p>{detail.detail}</p>
               <img style={{ width: "35%",
                             height: "154px",
                             marginLeft: "27%",
                             borderRadius: "49%"}} src={detail.thumb}></img>
                             <hr></hr>
               </div>
              
              
                
            )
        })}
        </div> 
      
        
        </>
      );
}

export default Brand_awareness
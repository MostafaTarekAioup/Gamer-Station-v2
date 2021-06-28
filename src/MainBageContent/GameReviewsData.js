import React from 'react'
import { Doughnut } from 'react-chartjs-2';
const GameReviewsData = () => {
 const chartData = {
  labels : ["Excptional" , "meh" , "Good" , "Try" ],
  datasets : [
   {
    label : "Rates",
    data :[
      8000 ,
      500 ,
      8000,
      5000,
    ],
    backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
            ],
   }
  ]
 }
 return (
  <div>
   <Doughnut
   data={chartData}
   // width={300}
   height={300}
   options={{ 
    title : {
     display : true,
     text :"Reviews",
     fontSize:25
    },
    legend:{
     display:true,
     position: "top"
    },
    maintainAspectRatio: false 
    }}/>
  </div>
 )
}

export default GameReviewsData

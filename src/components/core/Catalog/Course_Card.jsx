
import React, {useState,useEffect} from 'react'
import RatingStars from "../../common/RatingStars"
import { Link } from 'react-router-dom'
import GetAvgRaitng from "../../../utils/avgRating"



const Course_Card = ({course,Height}) => {
  const [avgReviewCount,setAvgReviewCount]=useState(0);

  useEffect(()=>{
    const count=GetAvgRaitng(course.ratingAndReviews )
  },[course])
  return (
    <div>
    
   
    
    <Link to={`/courses/${course._id}`}>
    <div className=''>
      <div className="rounded-lg">
        <img
        src={course?.thumbnail}
        alt='course ka thumnail'
        className={`${Height} w-full rounded-xl object-cover`}

        />
      </div>
      <div className="flex flex-col gap-2 px-1 py-3">
        <p className="text-xl text-slate-50">{course?.courseName}</p>
        <p className="text-sm text-slate-50">{course?.instructor?.firstName} {course?.instructor?.lastName}</p>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">{avgReviewCount || 0}</span>
          <RatingStars Review_Count={avgReviewCount}/>
          <span className="text-slate-400">{course?.ratingAndReviews?.length} Rating</span>
        </div>
        <p className="text-xl text-slate-50">
          {course?.price}
        </p>
      </div>
    </div>

    </Link>

      
    </div>
  )
}

export default Course_Card

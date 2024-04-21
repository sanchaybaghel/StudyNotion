import { FaCheck } from "react-icons/fa"
import { useSelector } from "react-redux"
import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
import CourseInformationForm from "./CourseInformation/CourseInformationForm"
import PublishCourse from "./PublishCourse"

export default function RenderSteps() {
  const { step } = useSelector((state) => state.course)

  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ]

  return (
    <>
      <div className="relative mb-2 flex w-full justify-center">
        {steps.map((item, index) => (
          <div className="flex flex-col items-center" key={item.id}>
            <button
              className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                step === item.id
                  ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                  : "border-slate-700 bg-slate-800 text-slate-300"
              } ${step > item.id && "bg-yellow-50 text-yellow-50"}`}
            >
              {step > item.id ? (
                <FaCheck className="font-bold text-slate-900" />
              ) : (
                item.id
              )}
            </button>
            {index !== steps.length - 1 && (
              <div
                className={`h-[calc(34px/2)] w-[33%] border-dashed border-b-2 ${
                  step > item.id ? "border-yellow-50" : "border-slate-500"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="relative mb-16 flex w-full select-none justify-between">
        {steps.map((item) => (
          <div className="flex min-w-[130px] flex-col items-center gap-y-2" key={item.id}>
            <p
              className={`text-sm ${
                step >= item.id ? "text-slate-50" : "text-slate-500"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
      {
        <p>step is{step}</p>
      }

      {/* Render specific component based on current step */}
    
     
       {/* <CourseInformationForm /> */}
       {step === 1 &&  <CourseInformationForm />}
      
      {step === 2 && <CourseBuilderForm />}
      {step === 3 && <PublishCourse />}
    </>
  )
}

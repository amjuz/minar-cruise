import Image from "next/image"
import Bounded from "../elements/Bounded"
import { star, facilities } from "@/constants/home/landingData"
import { Dot } from "lucide-react"

const Facilities = () => {
    const { heading, description } = facilities
  return (
    <Bounded>
        <section className=" my-20 ">
            <article className="">
                <div className="flex font-bold text-2xl items-center">
                    <Image src={star.url} alt="star"  width={50} height={200}/>
                    <h3>
                    {heading}
                    </h3>
                </div>
                   
                <ul className="list-disc list-inside grid-cols-2 grid leading-10 text-sm border">
                {description.map( item => (
                    <>
                        <li className="">{item}</li>
                    </>
                ))}
                 </ul>
            </article>
        </section>
    </Bounded>
  )
}

export default Facilities

// https://cochincruiseline.com/wp-content/uploads/2021/09/bg-line.png)

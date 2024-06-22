import { BookingData } from "@/constants/home/landingData";
import Image from "next/image";
import { Button } from "../ui/button";

const BookingDescription = () => {
  const { image1, image2, mainHeading, subHeading, features } = BookingData;
  return (
    <section className="flex min-h-[80vh] ">
      <div className="w-full basis-[45%]">
        <Image
          width={1280}
          height={720}
          className="w-full h-full object-cover"
          src={image1.url}
          alt={image1.alt}
        />
      </div>
      <div className="relative w-full basis-[55%]">
        <Image
          className="w-full h-full object-cover object-center"
          width={1280}
          height={720}
          src={image2.url}
          alt={image2.alt}
        />
        <div className="absolute top-0 bg-black/60 w-full min-w-[60%] h-full z-20">
          <h1></h1>
        </div>
      </div>
    </section>
  );
};

export default BookingDescription;

// <div className="p-12 h-full flex flex-col justify-evenly">
//             <div className="">
//               <h6>hello</h6>
//               <h5 className="text-5xl font-bold">Why Choose minar</h5>
//               <p>
//                 Be it a cool DJ party with your friends and colleagues or a
//                 laidback family vacation, now you can enjoy in the open sea with
//                 Minar
//               </p>
//             </div>
//             <div className="flex flex-col gap-4">
//               {features.map((item) => (
//                 <>
//                   <div className="flex gap-4   items-center justify-center ">
//                     <div className="">
//                       <Image
//                         src={item.icon}
//                         alt="ship icon"
//                         width={100}
//                         height={30}
//                       />
//                     </div>
//                     <div className="flex flex-col ">
//                       <div className="">
//                         <h3 className="text-2xl font-bold">{item.heading}</h3>
//                       </div>
//                       <div className="">
//                         <p>{item.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               ))}
//             </div>
//             <Button>Book Now</Button>
//           </div>

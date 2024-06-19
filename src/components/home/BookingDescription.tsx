import { BookingData } from "@/constants/home/landingData";
import Image from "next/image";
import { Button } from "../ui/button";

const BookingDescription = () => {
  const { image1, image2, mainHeading, subHeading, features } = BookingData;
  return (
    <section className="flex min-h-[80vh] object-fill">
      <div className="w-full basis-[45%] max-lg:hidden">
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
          className="z-0 w-full h-full object-cover object-center "
          width={1280}
          height={720}
          src={image2.url}
          alt={image2.alt}
        />
        <div className=" flex flex-col absolute text-white top-0 bg-black/60 z-[1] max-w-[60%] w-full h-full object-cover max-lg:w-full">
          <div className="p-12 h-full flex flex-col justify-evenly  ">
            <div className=" ">
              <h6>hello</h6>
              <h5 className="text-5xl font-bold">Why Choose minar</h5>
              <p>
                Be it a cool DJ party with your friends and colleagues or a
                laidback family vacation, now you can enjoy in the open sea with
                Minar
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {features.map((item) => (
                <>
                  <div className="flex gap-4   items-center justify-center ">
                    <div className="">
                      <Image
                        src={item.icon}
                        alt="ship icon"
                        width={100}
                        height={30}
                      />
                    </div>
                    <div className="flex flex-col ">
                      <div className="">
                        <h3 className="text-2xl font-bold">{item.heading}</h3>
                      </div>
                      <div className="">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <Button>Book Now</Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BookingDescription;

// {features.map((item) => (
//   <>
//     <div className="flex items-center gap-5">
//       <Image
//         src={item.icon}
//         alt=""
//         width={180}
//         height={100}
//         className="w-20"
//       />
//       <div className="flex flex-col gap-5">
//         <div className="text-2xl font-bold">{item.heading}</div>
//         <div className="">{item.description}</div>
//       </div>
//     </div>
//   </>
// ))}

// <div className="tracking-widest flex flex-col gap-5 pb-20">
//             <h1 className="text-5xl font-bold text-red-600">{mainHeading}</h1>
//             <p className="text-lg">{subHeading}</p>
//           </div>

// <div className="">
// <div>
//   <div className="text-5xl font-bold">{mainHeading}</div>
//   <div className="">{subHeading}</div>
// </div>
// <div className="flex flex-col items-stretch border-2 ">
//   {features.map((item) => (
//     <>
//       <div className="flex gap-4 border-2 ">
//         <div className="">
//           <Image
//             src={item.icon}
//             alt="ship icon"
//             width={100}
//             height={30}
//           />
//         </div>
//         <div className="flex flex-col ">
//           <div className="">
//             <h3 className="text-2xl font-bold">{item.heading}</h3>
//           </div>
//           <div className="">
//             <p>{item.description}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   ))}
//   <Button>Book Now</Button>
// </div>
// </div>
// </div>

import Image from "next/image";
import { entertainment } from "@/constants/home/landingData";
import { Bad_Script } from 'next/font/google'
import { cn } from "@/lib/utils";

const badScript = Bad_Script({
    weight: "400",
    style: ["normal"],
    subsets: ["latin"]
}) 
const Entertainments = () => {
  const { image } = entertainment;
  return (
    <section className="flex ">
      <article className="basis-[50%]">
        <Image src={image.url} alt="" width={1000} height={200} className="w-full" />
      </article>
      <article className="basis-[50%] w-full bg-red-600 text-white">
        <div className="p-32">
            <h1 className="text-5xl font-bold py-8">Entertainments</h1>
            <ul className={cn("text-2xl list-disc list-inside space-y-5", badScript.className)}>
                <li>Live DJ performance</li>
                <li>Live Karaoke singers</li>
                <li>Mimicry show</li>
                <li>Magic Show</li>
                <li>Fun filled programs</li>
            </ul>
        </div>
      </article>
    </section>
  );
};

export default Entertainments;

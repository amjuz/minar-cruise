import { Mail, MapPin, Phone } from "lucide-react";
import { footer } from "@/constants/home/landingData";
import Image from "next/image";

const ContactCard = () => {
  const { contact, email, address, image } = footer;
  return (
    <>
      <section className="space-y-8">
          <div className="">
            <Image src={image} alt="logo" width={150} height={150} />
          </div>
          <div className="flex gap-2">
            <Phone color="red" />
            {contact.map((item, i) => (
              <>
                <p className="font-light text-slate-400" key={i}>
                  {item}
                </p>
              </>
            ))}
          </div>
          <div className="flex gap-2">
            <Mail color="red" />
            <p className="font-light text-slate-400">{email}</p>
          </div>
          <div className="flex gap-2">
            <MapPin size={64} color="red" />
            <p className="font-light text-slate-400">{address}</p>
          </div>
      </section>
    </>
  );
};

export default ContactCard;

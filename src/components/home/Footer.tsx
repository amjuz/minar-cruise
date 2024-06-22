import Bounded from "../elements/Bounded";
import CopyRight from "./CopyRight";
import InfoCard from "./InfoCard";
import SocialCard from "./SocialCard";

const Footer = () => {
  return (
    <footer className="text-white bg-[#313041] ">
      <Bounded>
        <InfoCard />
        <SocialCard />
        <CopyRight/>
      </Bounded>
    </footer>
  );
};

export default Footer;
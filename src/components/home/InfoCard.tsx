import Bounded from "../elements/Bounded";
import CompanyInfoCard from "./CompanyInfoCard";
import ContactCard from "./ContactCard";
import ExploreCard from "./ExploreCard";
import SubscribeCard from "./SubscribeCard";

const InfoCard = () => {
  return (
    <>
      <div className="grid grid-cols-4 pt-20">
        <ContactCard />
        <CompanyInfoCard />
        <ExploreCard/>
        <SubscribeCard />
      </div>
    </>
  );
};

export default InfoCard;

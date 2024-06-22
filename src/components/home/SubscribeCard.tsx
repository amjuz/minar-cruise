import { Button } from "../ui/button";

const SubscribeCard = () => {
  return (
    <form className="flex flex-col justify-between" action="submit">
      <label className="font-bold text-2xl">News Letter</label>
      <input
        type="text"
        placeholder="First Name"
        className="outline-none placeholder: bg-[#313041] border-b py-2 border-slate-500 hover:border-blue-400 "
        required
      />
      <input
        type="text"
        placeholder="Email Address"
        className="outline-none placeholder: bg-[#313041] border-b py-2 border-slate-500  hover:border-blue-400"
        required
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
};

export default SubscribeCard;

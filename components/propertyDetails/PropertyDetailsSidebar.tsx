import SqaureButton from "../buttons/SquareButton";

export default function PropertyDetailSideBar() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-300 rounded">
      <text className="text-xl font-bold">Property Info</text>
      <text>3 roomed cottage</text>
      <text>Harare, Mabvuku</text>
      <text>$150/month</text>
      <SqaureButton text="Apply Now" />
    </div>
  );
}

import YellowButton from "../../buttons/YellowButton";
import { useRouter } from "next/router";

export default function LandlordSection() {
  const router = useRouter();
  return (
    <div
      className="relative flex flex-col md:grid md:grid-cols-2 gap-4 p-4 bg-pattern-bg"
      style={{
        height: "500px",
      }}
    >
      <div className="flex items-center justify-center overflow-hidden rounded-2xl">
        <div
          className="bg-lenderz rounded-2xl "
          style={{
            height: "400px",
            width: "500px",
          }}
        ></div>
      </div>
      <div className="flex flex-col justify-center gap-8">
        <text className="text-xl md:text-5xl font-black">Are you a landlord?</text>
        <text>
          Start earning today! Quickly list your property on our platform and
          become part of our landlords
        </text>
        <div>
          <YellowButton
            text="List Property Now"
            onClick={() => {
              router.push("/dashboard");
            }}
          />
        </div>
      </div>
    </div>
  );
}

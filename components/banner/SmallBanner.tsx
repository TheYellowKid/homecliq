import { Interface } from "readline";

interface BannerProps {
  heading: string;
}

export default function SmallBanner({ heading }: BannerProps) {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen bg-center bg-cover bg-small-banner bg-blend-darken"
      style={{ height: 300 }}
    >
      <div className="flex flex-col items-center gap-8">
        <text className="text-2xl md:text-5xl font-bold text-white text-center">{heading}</text>
      </div>
    </div>
  );
}

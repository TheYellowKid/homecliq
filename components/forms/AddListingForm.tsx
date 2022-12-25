import SqaureButton from "../buttons/SquareButton";
import Input from "../inputs/Input";
import { useRouter } from "next/router";
import ImageDropzone from "../images/ImageDropZone";

export default function AddListingForm() {
  const router = useRouter();
  return (
    <div className="p-12 bg-white rounded shadow-lg">
      <form className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <text>Title</text>
          <Input placeholder="eg One Room" type="text" onChange={() => {}} />
        </div>
        <div className="flex flex-col gap-1">
          <text>Monthly Rent</text>
          <Input placeholder="eg 100" type="number" onChange={() => {}} />
        </div>
        <div className="flex flex-col gap-1">
          <text>Town / City</text>
          <Input placeholder="Harare" type="text" onChange={() => {}} />
        </div>
        <div className="flex flex-col gap-1">
          <text>Location</text>
          <Input placeholder="Waterfalls" type="text" onChange={() => {}} />
        </div>
        <div className="flex flex-col col-span-2 gap-1">
          <text>Images</text>
          <ImageDropzone />
        </div>
        <div className="flex flex-col col-span-2 gap-1">
          <text>Description</text>
          <textarea
            rows={5}
            placeholder="describe the property"
            className="p-2 border-2 border-gray-500 rounded"
          />
        </div>
        <div className="flex flex-col col-span-2 gap-1">
          <text>Amenities</text>
          <div className="grid grid-cols-4">
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                id="parking"
                name="parking"
                value="parking"
              />
              <text>Parking Space</text>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                id="borehole"
                value="borehole"
                name="borehole"
              />
              <text>Borehole</text>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input type="checkbox" id="zesa" name="zesa" value="zesa" />
              <text>ZESA</text>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                id="durawall"
                name="durawall"
                value="durawall"
              />
              <text>Durawall / Fence</text>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                id="ensuite"
                name="ensuit"
                value="ensuit"
              />
              <text>Bills Inclusive</text>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                id="ensuite"
                name="ensuit"
                value="ensuit"
              />
              <text>Shared Bathroom</text>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                id="sharing"
                name="sharing"
                value="sharing"
              />
              <text>Own Entrace</text>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                id="ensuite"
                name="ensuit"
                value="ensuit"
              />
              <text>Ensuite</text>
            </div>
          </div>
        </div>
        <SqaureButton
          text="Add Property"
          onClick={() => router.push("/dashboard/admin")}
        />
      </form>
    </div>
  );
}

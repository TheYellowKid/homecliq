import SqaureButton from "../buttons/SquareButton";

export default function ImageDropzone() {
  return (
    <div className="relative border-dashed border-2 h-32 ">
      <input
        type="file"
        className=" absolute h-full w-full  z-30 opacity-0"
        multiple
      />
      <div className=" flex flex-col absolute top-0 h-full items-center justify-center gap-4 w-full">
        <text>Dag and drop images here</text>
        <div>
          <SqaureButton text="upload images" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

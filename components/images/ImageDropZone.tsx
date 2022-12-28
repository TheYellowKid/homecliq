import SqaureButton from "../buttons/SquareButton";

interface DropZoneProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function ImageDropzone({ onChange }: DropZoneProps) {
  return (
    <div className="relative border-dashed border-2 h-32 ">
      <input
        type="file"
        className=" absolute h-full w-full  z-30 opacity-0"
        multiple
        onChange={onChange}
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

import SqaureButton from "../buttons/SquareButton";

export default function UserFeedbackForm() {
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="items-center justify-center w-full">
        <textarea className="w-full md:w-1/2" rows={10} />
        <div className="flex flex-row-reverse w-1/2">
          <SqaureButton text="submit" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
}

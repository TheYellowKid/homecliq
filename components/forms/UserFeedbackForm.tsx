import SqaureButton from "../buttons/SquareButton";

export default function UserFeedbackForm() {
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="items-center justify-center w-full">
        <textarea className="w-full" rows={10} />
        <div className="flex flex-row-reverse">
          <SqaureButton text="submit" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
}

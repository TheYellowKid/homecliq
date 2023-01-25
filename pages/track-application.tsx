import TrackApplicationForm from "../components/forms/TrackApplicationForm"


export default function TrackApplication(){
    return(
        <div>
            <div className="flex flex-col items-center justify-center w-screen h-screen font-quicksand">
                <TrackApplicationForm />
            </div>
        </div>
    )
}
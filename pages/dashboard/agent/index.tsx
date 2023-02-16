import AgentCardsSection from "../../../components/dashboard/cardSections/AgentCardSection";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../../firebase";
import { useState, useEffect } from "react";
import AgentDashBoardLayout from "../../../components/layouts/AgentDashBoardLayout";
export default function AgentDashboard() {

  const [totalListings, setTotalListings] = useState(0);
  const [pendingListings, setPendingListings] = useState(0);
  const [totalApplications, setTotalApplications] = useState(0);
  const [doneDeals, setDoneDeals] = useState(0);


  //get agent listings
  const getListings = async () => {
    let counter = 0
    let pendingCounter = 0
    let agent: string = "";
    if (typeof window !== 'undefined') {
      // code that accesses localStorage goes here
       agent  = localStorage.getItem("email") as string;
      }
    getDocs(collection(fireStore, "properties")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if(doc.data().owneremail === agent){
          if(doc.data().isApproved === true){
          counter++
        }else{
          pendingCounter++
        }
        }
      });
      setTotalListings(counter)
      setPendingListings(pendingCounter)
    });
  };

  //get agent applications
    const getApplications = () => {
    let counter = 0;
    let agent: string = "";
    if (typeof window !== 'undefined') {
      // code that accesses localStorage goes here
       agent  = localStorage.getItem("email") as string;
    }
    getDocs(collection(fireStore, "applications")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if(doc.data().owneremail === agent){
          counter++
        }
      })
      setTotalApplications(counter)
    })
  }

  //get agent done deals
  const getDoneDeals = () => {
    let counter = 0;
    let agent: string = "";
    if (typeof window !== 'undefined') {
      // code that accesses localStorage goes here
       agent  = localStorage.getItem("email") as string;
    }
    getDocs(collection(fireStore, "donedeals")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if(doc.data().owneremail === agent){
          counter++
        }
      })
      setDoneDeals(counter)
    })
  }

  useEffect(() => {
    getListings();
    getApplications();
    getDoneDeals();
  }, [])

  return (
    <AgentDashBoardLayout title="Dashboard">
      <AgentCardsSection totalApplications={totalApplications} totalListings={totalListings} doneDeals={doneDeals} pendingListings={pendingListings}/>
    </AgentDashBoardLayout>
  );
}

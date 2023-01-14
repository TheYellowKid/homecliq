import DashboardNavbar from "../../../components/navigation/DashboardNavbar";
import CardsSection from "../../../components/dashboard/CardsSesction";
import AgentDashboardSidebar from "../../../components/dashboard/agent/AgentDashboardSidebar";
import AgentCardsSection from "../../../components/dashboard/cardSections/AgentCardSection";
import {
  HamburgerMenuIcon
} from "@radix-ui/react-icons";
import DashboardMobileNavbar from "../../../components/navigation/DashboardMobileNavbar";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../../firebase";
import { useState, useEffect } from "react";


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
  }, []);

  return (
    <div className="font-quicksand">
      <DashboardNavbar />
      <div className="flex-col md:grid md:grid-cols-5">
        <div className="hidden md:flex flex-col md:px-12"></div>
        <div className="hidden md:flex flex-col md:px-12">
          <AgentDashboardSidebar />
        </div>
        <div className="flex-col p-4 md:col-span-3">
          <div className="flex items-center justify-between p-4">
            <text className="text-3xl font-bold">Dashboard</text>
            <div className="flex items-center justify-center flex-wrap md:hidden">
              <DashboardMobileNavbar />
            </div>
          </div>
          <AgentCardsSection totalApplications={totalApplications} totalListings={totalListings} doneDeals={doneDeals} pendingListings={pendingListings}/>
        </div>
      </div>
    </div>
  );
}

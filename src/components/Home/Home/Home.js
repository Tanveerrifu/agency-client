import React from "react";
import AppNavbar from "../../Shared/AppNavbar/AppNavbar";
import ChatBot from "../../Shared/ChatBot/ChatBot";
import Footer from "../../Shared/Footer/Footer";
import ClientsFeedback from "../ClientsFeedback/ClientsFeedback";
import Header from "../Header/Header";
import OurClients from "../OurClients/OurClients";
import OurServices from "../OurServices/OurServices";
import Team from "../Team/Team";
import Works from "../Works/Works";


const Home = () => {
  return (
    <div>
      <AppNavbar></AppNavbar>
      <Header />
      <ChatBot />
      <OurClients />
      <OurServices />
      <Works />
      <ClientsFeedback />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;

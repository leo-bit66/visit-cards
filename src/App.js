import React, { useState } from "react";
import VisitCard from "./VisitCard";
import InputForm from "./InputForm";

const App = () => {
  const [fullName, setFullName] = useState("Full Name");
  const [jobTitle, setJobTitle] = useState("Job Title");
  const [phone, setPhone] = useState("+49 12 345678");
  const [email, setEmail] = useState("example@email.com");
  const [website, setWebsite] = useState("www.example.de");
  const [backgroundColor, setBackgroundColor ] = useState('#f2f2f2');

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
       
       <InputForm 
         fullName={fullName}
         jobTitle={jobTitle}
         phone={phone}
         email={email}
         website={website}
         onFullNameChange={setFullName}
         onJobTitleChange={setJobTitle}
         onPhoneChange={setPhone}
         onEmailChange={setEmail}
         onWebsiteChange={setWebsite}
         onBackgroundColorChange={setBackgroundColor}
       />
   
      <VisitCard
        fullName={fullName}
        jobTitle={jobTitle}
        phone={phone}
        email={email}
        website={website}
        backgroundColor={backgroundColor}
         />
         
    </div>
  );
};

export default App;

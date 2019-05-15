import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import ContentWrapper from "./components/contentWrapper/ContentWrapper";
import BookingStepper from "./components/bookingStepper/BookingStepper";
import FormWrapper from "./components/formWrapper/FormWrapper";

function App() {
  return (
    <div className="App">
      <Header/>
      <ContentWrapper>
        <BookingStepper/>
        <FormWrapper/>
      </ContentWrapper>
    </div>
  );
}

export default App;

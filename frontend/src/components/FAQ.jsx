import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [open, setOpen] = useState('');

  const toggle = (id) => {
    setOpen(open === id ? '' : id);
  };

  const getButtonClass = (id) => {
    return `accordion-button ${open === id ? '' : 'collapsed'}`;
  };

  const getAccordionClass = (id) => {
    return `accordion-collapse collapse ${open === id ? 'show' : ''}`;
  };

  const getHeaderStyle = (id) => {
    return {
      backgroundColor: open === id ? '#85DCFF' : 'white',
    };
  };

  return (
    <div className="home-faq">
      <div className="home-banner">
        <div className="banner-container">
          <h2 className="heading">Common Questions</h2>
        </div>
      </div>
      <div className="accordion mb-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={getButtonClass('collapseOne')}
              type="button"
              onClick={() => toggle('collapseOne')}
              style={getHeaderStyle('collapseOne')}
            >
              How can I search for jobs on this website?
            </button>
          </h2>
          <div id="collapseOne" className={getAccordionClass('collapseOne')} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>You can search for jobs by entering keywords in the search bar and filtering the results based on your preferences.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={getButtonClass('collapseTwo')}
              type="button"
              onClick={() => toggle('collapseTwo')}
              style={getHeaderStyle('collapseTwo')}
            >
              Are there any fees for using this platform?
            </button>
          </h2>
          <div id="collapseTwo" className={getAccordionClass('collapseTwo')} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>No, our platform is completely free for job seekers. There are no hidden charges or fees.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={getButtonClass('collapseThree')}
              type="button"
              onClick={() => toggle('collapseThree')}
              style={getHeaderStyle('collapseThree')}
            >
              How can I contact employers through this website?
            </button>
          </h2>
          <div id="collapseThree" className={getAccordionClass('collapseThree')} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>You can contact employers by sending them a message through our messaging system or by using the contact information provided in the job listing.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={getButtonClass('collapseFour')}
              type="button"
              onClick={() => toggle('collapseFour')}
              style={getHeaderStyle('collapseFour')}
            >
              Can I receive job alerts for new postings?
            </button>
          </h2>
          <div id="collapseFour" className={getAccordionClass('collapseFour')} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Yes, you can set up job alerts based on your preferences. You will receive notifications when new jobs matching your criteria are posted.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={getButtonClass('collapseFive')}
              type="button"
              onClick={() => toggle('collapseFive')}
              style={getHeaderStyle('collapseFive')}
            >
              Is my personal information secure on this platform?
            </button>
          </h2>
          <div id="collapseFive" className={getAccordionClass('collapseFive')} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Yes, we take data privacy and security seriously. Your personal information is encrypted and protected to ensure confidentiality.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

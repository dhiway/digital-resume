import { useState } from "react";
import "../App.css";
import POE from "../Utils/POE.json";
import POS from "../Utils/POS.json";
import POW from "../Utils/POW.json";
import { getYear } from "../Utils/Utils";
import EditSkillModal from "../components/modals/EditSkillModal";
import { useNavigate } from "react-router-dom";
import SubmitStatus from "../components/modals/SubmitStatus";
function Resume() {
  const Navigate = useNavigate()
  const [skills, setSkills] = useState([POS]);
  const [modalView, setModalView] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  return (
    <div className="App">
      {successModal && (
        <SubmitStatus name={POE?.credentialSubject?.name} close={()=> setSuccessModal(false)}/>
      )}
      {modalView && (
        <EditSkillModal
          credentialArr={skills}
          setCredentialArr={setSkills}
          setVisiblity={setModalView}
        />
      )}
      <div id="doc2" className="yui-t7 pb-16">
      <button onClick={()=>Navigate('/')} 
        className="px-4 py-2 mt-10 border rounded text-design-blue border-design-blue text-base bg-design-grey
        hover:bg-design-purple hover:border-design-purple hover:text-white"
        >Back</button>
        <div id="inner">
          <div id="hd">
            <div className="yui-gc">
              <div className="yui-u first">
                <h1>{POE?.credentialSubject?.name}</h1>
                <h2>{POW?.credentialSubject?.role}</h2>
              </div>

              <div className="yui-u">
                <div className="contact-info">
                  {/* <h3><a id="pdf" href="#">Download PDF</a></h3> */}
                  <h3>
                    <a href="mailto:name@yourdomain.com">
                      {POE?.credentialSubject?.email}
                    </a>
                  </h3>
                  <h3>(9738452245)</h3>
                </div>
              </div>
            </div>
          </div>

          <div id="bd">
            <div id="yui-main">
              <div className="yui-b">
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Profile</h2>
                  </div>
                  <div className="yui-u">
                    <p className="enlarge">
                      Progressively evolve cross-platform ideas before impactful
                      infomediaries.
                    </p>
                  </div>
                </div>
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Skills</h2>
                  </div>
                  <div className="yui-u skills-list">
                    <div
                      className="absolute -right-8 px-2 py-1 border rounded text-design-grey border-design-blue text-base bg-design-blue
                      hover:bg-design-purple hover:border-design-purple hover:text-white"
                      onClick={() => setModalView(true)}
                    >
                      Edit
                    </div>
                    {skills.map((items, i) => {
                      return (
                        <div className="talent" key={i}>
                          <h2>{items.credentialSubject?.skill}</h2>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Education</h2>
                  </div>
                  <div className="yui-u">
                    <h2>{POE?.credentialSubject?.college}</h2>
                  </div>
                </div>
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Experience</h2>
                  </div>
                  <div className="yui-u">
                    <div className="job">
                      <h2>{POW?.credentialSubject?.company}</h2>
                      <h3>{POW?.credentialSubject?.role}</h3>
                      <h4>
                        {getYear(POW?.credentialSubject?.start_date)} -{" "}
                        {getYear(POW?.credentialSubject?.end_date)}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="ft">
            <p>
              {POE?.credentialSubject?.name} &mdash;{" "}
              <a href="mailto:prashant@dhiway.com">
                {POW?.credentialSubject?.email}
              </a>{" "}
              &mdash; 9738452245
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
    <div className=" flex justify-end items-center w-screen h-16 fixed bottom-0 bg-design-grey text-design-blue ">
        <button onClick={()=> setTimeout(()=>setSuccessModal(true), 500)} 
        className="mr-10 px-4 py-2 border rounded text-design-grey border-design-blue text-base bg-design-blue
        hover:bg-design-purple hover:border-design-purple hover:text-white"
        >Submit</button>
    </div>
    </div>
  );
}

export default Resume;

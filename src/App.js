import { useEffect, useState } from 'react';
import './App.css';
import POE from './Utils/POE.json'
import POS from './Utils/POS.json'
import POW from './Utils/POW.json'
import {getYear} from './Utils/Utils'
function App() {
  const [skills, setskills] = useState([])
  useEffect(() => {
    skillsList()
  }, [])

  const skillsList = () => {
    const splitSkills = POS.credentialSubject.skill.split(',')
    setskills(splitSkills)
  }
  return (
    <div className="App">
      <div id="doc2" className="yui-t7">
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
                  <h3><a href="mailto:name@yourdomain.com">{POE?.credentialSubject?.email}</a></h3>
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
                      Progressively evolve cross-platform ideas before impactful infomediaries.
                    </p>
                  </div>
                </div>
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Skills</h2>
                  </div>
                  <div className="yui-u">
                    {skills.map((items, i) => {
                      return (
                        <div className="talent" key={i}>
                          <h2>{items}</h2>
                        </div>
                      )
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
                      <h4>{getYear(POW?.credentialSubject?.start_date)} - {getYear(POW?.credentialSubject?.end_date)}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="ft">
            <p>{POE?.credentialSubject?.name} &mdash; <a href="mailto:prashant@dhiway.com">{POW?.credentialSubject?.email}</a> &mdash; 9738452245</p>
          </div>

        </div>


      </div>
    </div>
  );
}

export default App;

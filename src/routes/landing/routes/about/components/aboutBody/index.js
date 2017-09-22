import React from 'react';
import {Link} from 'react-router';

import './about.scss';

const AboutBody = () => {
  const ircOps = ["Garrison","Sumichu","Belthasar","freeball1"]
  const ircHalfOps = ['bjw', 'Blechy', 'bony', 'CVagts', "JOPEBUSTER", 'mrcab', 'Prier', 'something915', 'ZaeloRae'];
  const ircVoices = ["Acmlm", "bangerra", "ChristosOwen", "Countdown42", "CrescentEXE", "darkman78", "doicm", 
  "Elminster", "fcoughlin", "feasel", "Genocidal", "Golden", "jkoper", "LiteYear", "Millnium", "mithical9", 
  "neskamikaze", "prinny", "quo", "Simmons", "trogdor", "Twig", "usedpizza", "was0x", "Wawlconut", "Xelnas"];

  function renderUser(user, role, displayName) {
    return <p><Link to={`/profile/${user}`}>{(displayName)?displayName:user}</Link><span>{role}</span></p>
  }

  return (
    <div className="about-body">
      <div className="col-md-7">
        {renderUser("Sluip", "Lead operator, IRC & server admin")}
        {ircOps.map((user) => renderUser(user,"IRC Op"))}
        <hr/>
        {renderUser("Stauken", "Teamleader for back-end development")}
        {renderUser("rainbowism", "Developer")}
        {renderUser("dram55", "Developer")}
        <hr/>
        {ircHalfOps.map(user => renderUser(user, "IRC halfop"))}
        <hr/>
        {ircVoices.map(user => renderUser(user, "IRC voice"))}
        <hr/>
        {renderUser("Mundungu", "SRL Seasons front-end code")}
        {renderUser("IvanGS", "Back-end development")}
        {renderUser("joe", "Coded JOPEBUSTER, bugfixed RaceBot")}
        {renderUser("izu", "Japanese translation")}
        {renderUser("esi", "Developer")}
        <hr/>
        {renderUser("Narcissa", "Co-founder, designer, helped code front-end", "Narcissa Wright")}
        {renderUser("bmn", "Helped code the original streams page")}
        {renderUser("TRV", "Helped design the original database")}
        {renderUser("Jiano", "Co-founder, coded RaceBot and front-end site", 'Daniel "Jiano" Hart')}
        {renderUser("puchiedarcy", "Developer of the SRL API" ,'Zach "puchiedarcy" Layman')}
      </div>
    </div>
  );
}

export default AboutBody;
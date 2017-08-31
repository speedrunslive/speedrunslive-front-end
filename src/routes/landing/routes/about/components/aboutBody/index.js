import React from 'react';
import {Link} from 'react-router';

import './about.scss';

const AboutBody = () => {
  return (
    <div className="container aboutSRL">
      <div className="col-md-7">
        <div className="vertical-space"></div>
        <p><Link to="/profile/Sluip">Sluip</Link><span className="dull">Lead operator, IRC & server admin</span></p>
        <p><Link to="/profile/Blechy">Blechy</Link><span className="dull">Lead operator</span></p>
        <p><Link to="/profile/Garrison">Garrison</Link><span className="dull">IRC op</span></p>
        <p><Link to="/profile/sumichu">Sumichu</Link><span className="dull">IRC op</span></p>

        <hr/>

        <p><Link to="/profile/Stauken">Stauken</Link><span className="dull">Teamleader for back-end development</span></p>
        <p><Link to="/profile/esi">esi</Link><span className="dull">Developer</span></p>
        <p><Link to="/profile/rainbowism">rainbowism</Link><span className="dull">Developer</span></p>

        <hr/>

        <p><Link to="/profile/bjw">bjw</Link><span className="dull">IRC halfop</span></p>
        <p><Link to="/profile/bony">bony</Link><span className="dull">IRC halfop</span></p>
        <p><Link to="/profile/CVagts">CVagts</Link><span className="dull">IRC halfop</span></p>
        <p><Link to="/profile/Kirua">Kirua</Link><span className="dull">IRC halfop</span></p>
        <p><Link to="/profile/Prier">Prier</Link><span className="dull">IRC halfop</span></p>
        <p><Link to="/profile/something915">something915</Link><span className="dull">IRC halfop</span></p>

        <hr/>

        <p><Link to="/profile/Acmlm">Acmlm</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/bangerra">bangerra</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/Belthasar">Belthasar</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/ChristosOwen">ChristosOwen</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/crescentexe">CrescentEXE</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/darkman78">darkman78</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/doicm">doicm</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/duneaught">duneaught</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/Elminster">Elminster</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/freeball1">freeball1</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/Genocidal">Genocidal</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/Golden">Golden</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/LiteYear">LiteYear</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/neskamikaze">neskamikaze</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/prinny">prinny</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/quo">quo</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/Samura1man">Samura1man</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/theevilisback">theevilisback</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/Simmons">Simmons</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/Trogdor">Trogdor</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/usedpizza">usedpizza</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/was0x">was0x</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/Xelnas">Xelnas</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profile/ZaeloRae">ZaeloRae</Link><span className="dull">IRC voice</span></p>

        <hr/>

        <p><Link to="/profile/Mundungu">Mundungu</Link><span className="dull">SRL Seasons front-end code</span></p>
        <p><Link to="/profile/IvanGS">IvanGS</Link><span className="dull">Back-end development</span></p>
        <p><Link to="/profile/joe">joe</Link><span className="dull">Coded JOPEBUSTER, bugfixed RaceBot</span></p>
        <p><Link to="/profile/izu">izu</Link><span className="dull">Japanese translation</span></p>

        <hr/>

        <p><Link to="/profile/Narcissa">Narcissa Wright</Link><span className="dull">Co-founder, designer, helped code front-end</span></p>
        <p><Link to="/profile/bmn">bmn</Link><span className="dull">Helped code the original streams page</span></p>
        <p><Link to="/profile/TRV">TRV</Link><span className="dull">Helped design the original database</span></p>
        <p><Link to="/profile/Jiano">Daniel "Jiano" Hart</Link><span className="dull">Co-founder, coded RaceBot and front-end site</span></p>
        <p><Link to="/profile/puchiedarcy">Zach "puchiedarcy" Layman</Link><span className="dull">Server admin, developer of the SRL API</span></p>
      </div>
    </div>
  );
}

export default AboutBody;
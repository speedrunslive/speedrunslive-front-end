import React from 'react';
import {Link} from 'react-router';

import './about.scss';

const AboutBody = () => {
  return (
    <div className="container aboutSRL">
      <div className="col-md-7">
        <div className="vertical-space"></div>
        <p><Link to="/profiles/#!/Sluip/1">Sluip</Link><span className="dull">Lead operator, IRC & server admin</span></p>
        <p><Link to="/profiles/#%21/Blechy/1">Blechy</Link><span className="dull">Lead operator</span></p>
        <p><Link to="/profiles/#%21/Garrison/1">Garrison</Link><span className="dull">IRC op</span></p>
        <p><Link to="/profiles/#%21/sumichu/1">Sumichu</Link><span className="dull">IRC op</span></p>

        <hr/>

        <p><Link to="/profiles/#!/Stauken/1">Stauken</Link><span className="dull">Teamleader for back-end development</span></p>
        <p><Link to="/profiles/#%21/esi/1">esi</Link><span className="dull">Developer</span></p>
        <p><Link to="/profiles/#!/rainbowism/1">rainbowism</Link><span className="dull">Developer</span></p>

        <hr/>

        <p><Link to="/profiles/#%21/bjw/1">bjw</Link><span className="dull">IRC halfop</span></p>
        <p><Link to="/profiles/#%21/bony/1">bony</Link><span className="dull">IRC halfop</span></p>
        <p><Link to="/profiles/#%21/CVagts/1">CVagts</Link><span className="dull">IRC halfop</span></p>
        <p><Link to="/profiles/#%21/Kirua/1">Kirua</Link><span className="dull">IRC halfop</span></p>
        <p><Link to="/profiles/#%21/Prier/1">Prier</Link><span className="dull">IRC halfop</span></p>
        <p><Link to="/profiles/#%21/something915/1">something915</Link><span className="dull">IRC halfop</span></p>

        <hr/>

        <p><Link to="/profiles/#%21/Acmlm/1">Acmlm</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/bangerra/1">bangerra</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/Belthasar/1">Belthasar</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/ChristosOwen/1">ChristosOwen</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/crescentexe/1">CrescentEXE</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/darkman78/1">darkman78</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/doicm/1">doicm</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/duneaught/1">duneaught</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/Elminster/1">Elminster</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/freeball1/1">freeball1</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/Genocidal/1">Genocidal</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/Golden/1">Golden</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/LiteYear/1">LiteYear</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/neskamikaze/1">neskamikaze</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/prinny/1">prinny</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/quo/1">quo</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/Samura1man/1">Samura1man</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/theevilisback/1">theevilisback</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/Simmons/1">Simmons</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/Trogdor/1">Trogdor</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/usedpizza/1">usedpizza</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/was0x/1">was0x</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/Xelnas/1">Xelnas</Link><span className="dull">IRC voice</span></p>
        <p><Link to="/profiles/#%21/ZaeloRae/1">ZaeloRae</Link><span className="dull">IRC voice</span></p>

        <hr/>

        <p><Link to="/profiles/#!/Mundungu/1">Mundungu</Link><span className="dull">SRL Seasons front-end code</span></p>
        <p><Link to="/profiles/#!/IvanGS/1">IvanGS</Link><span className="dull">Back-end development</span></p>
        <p><Link to="/profiles/#!/joe/1">joe</Link><span className="dull">Coded JOPEBUSTER, bugfixed RaceBot</span></p>
        <p><Link to="/profiles/#!/izu/1">izu</Link><span className="dull">Japanese translation</span></p>

        <hr/>

        <p><Link to="/profiles/#!/Narcissa/1">Narcissa Wright</Link><span className="dull">Co-founder, designer, helped code front-end</span></p>
        <p><Link to="/profiles/#!/bmn/1">bmn</Link><span className="dull">Helped code the original streams page</span></p>
        <p><Link to="/profiles/#!/TRV/1">TRV</Link><span className="dull">Helped design the original database</span></p>
        <p><Link to="/profiles/#!/Jiano/1">Daniel "Jiano" Hart</Link><span className="dull">Co-founder, coded RaceBot and front-end site</span></p>
        <p><Link to="/profiles/#!/puchiedarcy/1">Zach "puchiedarcy" Layman</Link><span className="dull">Server admin, developer of the SRL API</span></p>
      </div>
    </div>
  );
}

export default AboutBody;
import React from 'react';
import {Link} from 'react-router';

import './toolsBody.scss';

const ToolsBody = () => {
  return (
    <div className="container toolsBody">
      <div className="col-md-6 pull-left">

        <h1>Streaming Software</h1>

        <p><a className="tool" href="http://www.xsplit.com/">XSplit</a> - Useful 
          "all in one" stream software that connects to your Twitch account.</p>

        <p><a className="tool" href="http://obsproject.com/">Open Broadcaster Software</a> - a free and open source software for recording and live streaming. 
        Source code is available to everyone to contribute and improve.</p>

        <p><a className="tool" href="http://www.ffsplit.com/">FFsplit</a> - Another 
          free XSplit alternative.</p>

        <p><a className="tool" href="http://www.adobe.com/products/flashmediaserver/flashmediaencoder/">FMLE</a> - Alternative
          to XSplit, harder to use. If you're using FMLE you may be interested
			  also using <a href="http://mosax.sakura.ne.jp/fswiki.cgi?page=SCFH+DSF">SCFH DSF</a>, which is used usually in tandem
			  with FMLE to stream a screen region.</p>

        <h1>Video Capture Software</h1>

        <p><a className="tool" href="http://www.amarectv.com/download_amarectv.htm">AmaRecTV</a> - Video capture &amp; preview. 
         The AmaRec codec has a watermark but you can use any codec such
			    as <a href="http://lags.leetcode.net/codec.html">LAGS</a>. Using AmaRecTV as a video source for
			    streaming works well and enables lossless video capture and streaming simultaneously. Highly recommended
			    over Pinnacle if you use a Dazzle.  Click the first link on the page to download.</p>


        <h1>Timers</h1>

        <p><a className="tool" href="http://cdn.speedrunslive.com/tools/WSplit_1.5.2.zip">WSplit</a> - Very awesome timer that tracks how far ahead or behind you are of set checkpoints.
			Lots of new options for image support, color customization, etc. Created by Wodanaz of SDA
			and currently maintained by Nitrofski.</p>

        <p><a className="tool" href="http://jenmaarai.com/llanfair/">Llanfair</a> - New alternative to WSplit.</p>
         

        <p><a className="tool" href="http://livesplit.org/downloads/">LiveSplit</a> - A sleek highly customizable timer for speedrunners.
			      Supports SRL racing and split comparisons.</p>
        <p><a className="tool" href="http://cdn.speedrunslive.com/tools/BKST%20LapTool%20Eng1.2.rar">BKST + LapTool English (v1.2)</a> - Translated LapTool, by Lutepin.</p>         
        <p><a className="tool" href="http://www.kazamit.com/index.php?p=5">Kazami Timer</a> - Lightweight Japanese timer program.</p>
        <p><a className="tool" href="http://www.w00ty.com/sda/timer/">w00ty SDA Timer</a> - bmn's browser-based timer with real-time, NTSC, and PAL.</p>
        <p><a className="tool" href="http://play.google.com/store/apps/details?id=com.msplit">Msplit</a> - Mobile timer for Android.</p>
         
      </div>

      <div className="col-md-6 pull-right">

        <h1>Misc.</h1>
        <p><a className="tool" href="/promotion">Promote SRL!</a> - Goodies for your Twitch page &amp; stream.</p>
        <p><a className="tool" href="http://www.mirc.com/get.html">mIRC</a> - IRC client. Used to connect to <strong>#speedrunslive</strong></p>
        <p><a className="tool" href="https://dl.dropbox.com/u/6998359/BingoPlannerG.zip">Dessyreqt's Bingo Planner</a> - Bingo planning program &amp; card fetcher.</p>

        <h1>Bingo</h1>

        <div>
          <div className="half pull-left">

            <p>In Bingo races, everybody gets the same randomly generated 5&times;5 card of objectives. To finish the race, you must complete objectives in a line.
				Once you get a full row, column, or diagonal, you are done.</p>

            <p>You get to choose which objectives you want to complete, and avoid the ones you do not want to do.
				Several games have Bingo. Bingo tends to work well for games that can be open-ended and require route planning.</p>

          </div>

          <div className="half pull-right">
            <Link className="btn blue-hover bingo" to="/tools/oot-bingo/?seed=<?php echo rand(1, 999999); ?>">Zelda OoT</Link>
            <Link className="btn red-hover bingo" to="/tools/mm-bingo/?seed=<?php echo rand(1, 999999); ?>">Zelda MM</Link>
            <Link className="btn green-hover bingo" to="/tools/supermetroid-bingo/?seed=<?php echo rand(1, 999999); ?>">Super Metroid</Link>
            <Link className="btn yellow-hover bingo" to="/tools/sotn-bingo/?seed=<?php echo rand(1, 999999); ?>">CV:SotN</Link>
            <Link className="btn grey-hover bingo" to="/tools/sm64-bingo/?seed=<?php echo rand(1, 999999); ?>">SM64</Link>
            <Link className="btn blue-hover bingo" to="/tools/smw-bingo/?seed=<?php echo rand(1, 999999); ?>">SMW</Link>
            <Link className="btn red-hover bingo" to="/tools/redblue-bingo/?seed=<?php echo rand(1, 999999); ?>">Poké Red/Blue</Link>
            <Link className="btn green-hover bingo" to="/tools/crystal-bingo/?seed=<?php echo rand(1, 999999); ?>">Poké Crystal</Link>
            <Link className="btn yellow-hover bingo" to="/tools/dk64-bingo/?seed=<?php echo rand(1, 999999); ?>">DK64</Link>
          </div>
        </div>

        <h1>More Goal Generators</h1>
        <p><a className="tool" href="/tools/sotn-equipment/">SotN Inventory Race</a> - Generates a random set of equipment to go find &amp; equip.</p>
        <p><a className="tool" href="/tools/oot-restriction/">OoT Restriction Race</a> - Generates a random OoT race goal with various restrictions.</p>
      </div>
    </div>
  );
}
export default ToolsBody;
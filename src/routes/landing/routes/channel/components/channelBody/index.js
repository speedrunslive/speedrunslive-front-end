import React from 'react';
import {Link} from 'react-router';

import './channelBody.scss';

const ChannelBody = ()=>{
  return(
    <div className="channel-body">
      <div className="col-md-3 pull-right">
        <h1>About #speedrunslive</h1>

        <p><strong>#speedrunslive</strong> is currently where the actual races take place.
		      The IRC bot "RaceBot" lets you set up races and tracks your statistics.</p>

        <p>You must always use the same nickname in <strong>#speedrunslive</strong>. Make sure to pick a name and stick with it. If you come in as "mib_xxxxxx" it will say you are banned.</p>

        <p>Please be courteous, but most of all, come and join in the fun!</p>

        <p>If you need help with the race commands, please <Link to="/faq/commandlist">click here</Link>.</p>

        <p className="important">You are required to register your nickname before you race. Please read the 
        following <Link to="/faq/registration">FAQ</Link> and <a href="/faq/#getregged">guide</a> for 
        more information.</p>

        <h1>IRC information</h1>

        <ul>
          <li>New York &mdash; <strong>irc.speedrunslive.com</strong></li>
          <li>Amsterdam &mdash; <strong>irc2.speedrunslive.com</strong></li>
          <li>Channel &mdash; <strong>#speedrunslive</strong></li>
        </ul>

        <p>It is highly encouraged you use <a href="http://www.mirc.com/get.html">mIRC</a>  or 
        another IRC client of your choice, instead of this widget.</p>

        <p><a className="block" href="https://www.youtube.com/watch?v=hxTBHia1wak">doicm's mIRC Video Guide</a>
          <a className="block" href="https://www.youtube.com/watch?v=72JZgmErL7w">doicm's HexChat Video Guide </a></p>
        <h1>コマンドリスト</h1>
        <p><a href="/faq/commandlist/jp/">RaceBot用全コマンドリスト</a></p>

      </div>
      <div className="col-md-9">
        <iframe className="irc" src="http://widget.mibbit.com/?settings=fc2f995b2c9c6b9f0e26e3c95534ad42&server=irc2.speedrunslive.com&channel=%23speedrunslive&nick=&promptPass=&noServerTab=false">
        </iframe>
      </div>
    </div>
  );
}
export default ChannelBody;
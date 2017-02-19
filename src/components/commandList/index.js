import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './commandList.scss'
import FAQNav from '../faqNav';

//counterpart.registerTranslations('en', require('./translations/en'));

const CommandList = () => {
  return (
<div className = "row commandList">
 <FAQNav>
		<a href="#startrace">.startrace</a>
		<a href="#enter">.enter</a>
		<a href="#unenter">.unenter</a>
		<a href="#entrants">.entrants</a>
		<a href="#ready">.ready</a>
		<a href="#time">.time</a>
		<a href="#goal">.goal</a>
		<a href="#setgoal">.setgoal</a>
		<a href="#setgame">.setgame</a>
		<a href="#done">.done</a>
		<a href="#undone">.undone</a>
		<a href="#quit">.quit</a>
		<a href="#comment">.comment</a>
		<a href="#rematch">.rematch</a>
		<a href="#races">.races</a>
		<a href="#setstream">.setstream</a>
		<a href="#streamoption">.streamoption</a>
		<a href="#stream">.stream</a>
		<a href="#settwitter">.settwitter</a>
		<a href="#twit">.twitter</a>
		<a href="#setyoutube">.setyoutube</a>
		<a href="#youtube">.youtube</a>
		<a href="#filename">.filename</a>
		<h2>Voice Commands</h2>
		<a href="#queue">.queue</a>
		<a href="#record">.record</a>
		<a href="#end">.end</a>
		<a href="#dq">.dq</a>
		<a href="#remove">.remove</a>
		<a href="#creategame">.creategame</a>
		<a href="#purge">.purge</a>
		
 </FAQNav>

<div className="pull-left col-md-9" id="faq">
    <h1>The Complete RaceBot Command List
        <Link to="/faq/commandlist"><img className="flag" src="http://cdn.speedrunslive.com/images/flags/United_States_of_America.png" alt="En" /></Link>
        <Link to="/faq/commandlist/jp"><img src="http://cdn.speedrunslive.com/images/flags/Japan.png" className="flag" alt="Jp" /></Link>
        <Link to="/faq/commandlist/fr"><img src="http://cdn.speedrunslive.com/images/flags/France.png" className="flag" alt="Fr" /></Link>
        <Link to="/faq/commandlist/sp"><img src="http://cdn.speedrunslive.com/images/flags/Spain.png" className="flag" alt="Sp" /></Link>
    </h1>

    <h2 className="border-under" id ="startrace">.startrace <em>game</em> <span className="grey pull-right">main channel</span></h2>

    <p>This opens a new race for people to join.</p>
    <p>Note this uses the game's <em>abbreviation</em>, not the full name. You can find the game abbreviations on the game pages.</p>
    <p><img src="http://cdn.speedrunslive.com/images/error.gif" /><code>.startrace Super Mario 64</code></p>
    <p><img src="http://cdn.speedrunslive.com/images/success.gif" /><code>.startrace sm64</code></p>
    <p>If you're starting a race for a game that has not been raced yet, make an abbreviation that makes sense.</p>
    <p>Don't start a race until you know at least one other person will join the race. Ask around!</p>

    <h2 className="border-under" id ="enter">.enter <span className="grey pull-right">race channel</span></h2>
    <p>Type this to enter the race.</p>

    <h2 className="border-under" id ="unenter">.unenter <span className="grey pull-right">race channel</span></h2>
    <p>Removes you from the race.</p>
    <p>If a race is in progress, you cannot unenter. You must <code>.quit</code> instead.</p>

    <h2 className="border-under" id ="entrants">.entrants <span className="grey pull-right">race channel</span></h2>
    <p>Shows the full list of entrants and their status in the race.</p>

    <h2 className="border-under" id ="ready">.ready <span className="grey pull-right">race channel</span></h2>
    <p>Use this to ready up.</p>
    <p>Once everybody in the race is ready, the race will begin.</p>

    <h2 className="border-under" id ="unready">.unready <span className="grey pull-right">race channel</span></h2>
    <p>Use this if you are no longer ready.</p>

    <h2 className="border-under" id ="time">.time <span className="grey pull-right">race channel</span></h2>
    <p>Checks the elapsed time of the race.</p>

    <h2 className="border-under" id ="goal">.goal <span className="grey pull-right">race channel</span></h2>
    <p>Checks the goal of the race.</p>

    <h2 className="border-under" id ="setgoal">.setgoal <em>goal</em> <span className="grey pull-right">race channel</span></h2>
    <p>Sets the goal of the race.</p>
    <p>A goal must be set before players may ready up.</p>

    <h2 className="border-under" id ="setgame">.setgame <em>game</em> <span className="grey pull-right">race channel</span></h2>
    <p>Changes the game of the race.</p>
    <p>This command can be used to fix mistakes when creating a race.</p>
    <p>It can also be used after <code>.rematch</code> to change the game.</p>

    <h2 className="border-under" id ="done">.done <span className="grey pull-right">race channel</span></h2>
    <p>You type this command once you have successfully finished the goal of the race.</p>
    <p>Do not type this command unless you actually finish.</p>
    <p>If you do not want to finish the race, use <code>.quit</code> instead.</p>

    <h2 className="border-under" id ="undone">.undone <span className="grey pull-right">race channel</span></h2>
    <p>Use this command if you accidentally did <code>.done</code> early, or if you <code>.quit</code> and want to continue
        playing.
    </p>

    <h2 className="border-under" id ="quit">.quit <span className="grey pull-right">race channel</span></h2>
    <p>Use this command if you no longer intend to finish the race. </p>
    <p>If you leave a race channel for too long without quitting, you risk being disqualified.</p>

    <h2 className="border-under" id ="comment">.comment <em>comment</em> <span className="grey pull-right">race channel</span></h2>
    <p>You may leave a comment on a race that you finished participating in. Limit is 140 characters.</p>

    <h2 className="border-under" id ="rematch">.rematch <span className="grey pull-right">race channel</span></h2>
    <p>Once a race is over, you can use this if you intend on racing again.</p>
    <p>Once a rematch is initiated you can <code>.setgoal</code> if necessary.</p>

    <h2 className="border-under" id ="races">.races <span className="grey pull-right">main channel</span></h2>
    <p>Checks which races are going on.</p>

    <h2 className="border-under" id ="setstream">.setstream <em>url</em> <span className="grey pull-right">all channels</span></h2>
    <p>Use this to set your stream on SRL.</p>
    <p>Example: <code>.setstream http://twitch.tv/blechzorz</code></p>

    <h2 className="border-under" id ="streamoption">.streamoption <em>option</em> <span className="grey pull-right">all channels</span></h2>
    <p>Configures your stream to show up on the SRL front page per the corresponding option:</p>
    <ul>
        <li><em>on</em>: You will always be displayed.</li>
        <li><em>auto</em>: You will automatically be shown or hidden based on certain keywords in your Twitch title. Please see
            the edit profile page for a full listing of keywords.</li>
        <li><em>off</em>: You will never be displayed.</li>
        <li><em>races</em>: You will only be displayed while you are in a race on SRL.</li>
    </ul>
    <p>Example: <code>.streamoption auto</code></p>

    <h2 className="border-under" id ="stream">.stream <em>name</em> <span className="grey pull-right">all channels</span></h2>
    <p>Gives the stream url of the requested name.</p>

    <h2 className="border-under" id ="settwitter">.settwitter <em>twitter</em> <span className="grey pull-right">all channels</span></h2>
    <p>Use this to set your Twitter account.</p>

    <h2 className="border-under" id ="twit">.twitter <em>name</em> <span className="grey pull-right">all channels</span></h2>
    <p>Gives the Twitter account of the requested name.</p>

    <h2 className="border-under" id ="setyoutube">.setyoutube <em>account</em> <span className="grey pull-right">all channels</span></h2>
    <p>Use this to set your YouTube account.</p>

    <h2 className="border-under" id ="youtube">.youtube <em>name</em> <span className="grey pull-right">all channels</span></h2>
    <p>Gives the YouTube account of the requested name.</p>

    <h2 className="border-under" id ="filename">.filename <span className="grey pull-right">race channel</span></h2>
    <p>Gives a randomly generated 2 letter filename after the countdown.</p>
    <p>This is typically used for proof purposes in games like <em>The Legend of Zelda: Ocarina of Time</em>.</p>
    <p>Requiring entrants to use the generated filename ensures everybody starts at the same time.</p>

    <h1>Voice Commands</h1>

    <h2 className="border-under" id ="queue">.queue <span className="grey pull-right">main channel</span></h2>
    <p>Gives the list of completed races that have yet to be ended/recorded.</p>

    <h2 className="border-under" id ="record">.record <span className="grey pull-right">race channel</span></h2>
    <p>Use this to record completed races.</p>
    <p>Before you record a race, make sure everything is in order.</p>

    <h2 className="border-under" id ="end">.end <span className="grey pull-right">race channel</span></h2>
    <p>Use this to kill a race.</p>
    <p>Races can be ended if everybody in the race agrees to end it, if nobody joins, or if the goal is inappropriate.</p>

    <h2 className="border-under" id ="dq">.dq <em>name</em> <em>reason</em> <span className="grey pull-right">race channel</span></h2>
    <p>Grounds for disqualification:</p>
    <ul>
        <li>an entrant who breaks the rules of the goal</li>
        <li>an entrant who cheats outpull-right</li>
        <li>an entrant who disappears for too long without quitting</li>
    </ul>

    <h2 className="border-under" id ="remove">.remove <em>name</em> <span className="grey pull-right">race channel</span></h2>
    <p>Removes an entrant from a race.</p>
    <p>If a race is in progress and an entrant needs to suddenly leave, they should quit the race instead of asking to be removed.
        If a race is being held up by somebody who never readied up, then removal would be appropriate.</p>

    <h2 className="border-under" id ="creategame">.creategame <em>game</em> <em>Full Game Name</em> <span className="grey pull-right">all channels</span></h2>
    <p>Adds a new game to the database.</p>
    <p>Don't create a game until it is ready to be recorded.</p>
    <p>You can use this command to change the Full Game Name if was already created.</p>

    <h2 className="border-under" id ="purge">.purge <em>name</em> <span className="grey pull-right">all channels</span></h2>
    <p> User will be temporarily hidden from the SRL front page per our <a href="/faq#whatcanistream">warning system</a>. Should
        only be used to moderate non-speedrunning content.</p>
</div>
</div>

  );
}

export default CommandList;
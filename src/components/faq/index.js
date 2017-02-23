import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './faq.scss'
import FAQNav from '../faqNav';
import ToTopButton from '../toTopButton';
//counterpart.registerTranslations('en', require('./translations/en'));

const FAQBody = () => {
  return (
    <div className="row faq">
      <FAQNav>
        <a href="#what">What is speedrunning?</a>
        <a href="#whatsrl">What is SpeedRunsLive?</a>
        <h2>
          <a href="#getstarted">Getting started</a>
        </h2>
        <a href="#whatsrlraces">What are SRL Races?</a>
        <a href="#join">How do I participate in races?</a>
        <a href="#resources">Are there resources on my game?</a>
        <h2>
          <a href="#racing">Racing</a>
        </h2>
        <a href="#whatrace">What can I race on SpeedRunsLive?</a>
        <a href="#howgoals">How do the different goals work?</a>
        <a href="#newgame">Can I race an unlisted game?</a>
        <a href="#caniemulate">Can I emulate?</a>
        <a href="#setstream">How do I appear on races page?</a>
        <a href="#nostream">I can't stream, can I still race?</a>
        <a href="#proofcall">How do race proofcalls work?</a>
        <a href="#whatseasons">What are SRL seasons?</a>
        <a href="#rankingsystem">How does the ranking system work?</a>
        <a href="#gametime">What about in-game times?</a>
        <a href="#turboetc">What about glitches, cheats, turbo?</a>
        <h2>
          <a href="#frontpage">Front page</a>
        </h2>
        <a href="#howfrontpage">How do I get on the front page?</a>
        <a href="#whatcanistream">What can I stream?</a>
        <a href="#whatotherfeatures">Any front page features?</a>
        <a href="#charitymarathons">Will you feature my marathon?</a>
        <h2>
          <a href="#other">Other</a>
        </h2>
        <a href="#socialmedia">How do I link my social media?</a>
        <a href="#twitchteam">How do I get on the Twitch team?</a>
        <a href="#involved">Can I get more involved?</a>
        <a href="#imbad">I'm really bad, should I even bother?</a>
        <div className="faqdivider"></div>
        <h2>Additional resources</h2>
        <a href="/faq/registration">Registration FAQ</a>
        <a href="/news/update-13-11-14/">Front page guide</a>
      </FAQNav>
      <div className="pull-left col-md-9">
        <h1>Frequently asked questions
          <Link to="/faq">
          <img className="flag" src="http://cdn.speedrunslive.com/images/flags/United_States_of_America.png" alt="En" />
          </Link>
          <Link to="/faq/sp">
          <img src="http://cdn.speedrunslive.com/images/flags/Spain.png" className="flag" alt="Sp" />
          </Link>
        </h1>
        <h1 id="intro">Introduction to speedrunning and SpeedRunsLive</h1>
        <h2 id="what">What is speedrunning?</h2>
        <p>Speedrunning is nothing more than playing a game with the intent of completing it as fast as possible. </p>
        <p>People speedrun to challenge themselves, to see a game pushed to the limits, and to get extra replay value out of a game.</p>
        <h2 id="whatsrl">What is SpeedRunsLive?</h2>
        <p>SpeedRunsLive is a community based around speedrunning after the popularity of livestreaming took off.</p>
        <p>Some of the main features of SRL:</p>
        <ul>
          <li>A <Link to="/">stream directory</Link>, to find speedrunning live streams.</li>
          <li>A richly developed <Link to="/races/">speedrun racing platform</Link>.</li>
          <li>A populated <Link to="/channel/">IRC community</Link>.</li>
        </ul>
        <div className="faqdivider"></div>
        <h1 id="getstarted">Getting started on SpeedRunsLive</h1>
        <h2 id="whatsrlraces">What are SRL Races?</h2>
        <p>SRL Races are currently the most developed facet of SpeedRunsLive. Races let you run in direct competition with others
          simultaneously. Players set up races, and the RaceBot gives them a countdown. On GO! they start at the same time and
          both play through the game with the intention of finishing the goal first. Races are livestreamed so others can watch
          the action.</p>
        <p>Every game raced on SRL has a ranking leaderboard. Players may rise to a higher rank when they do well in races. The
          stronger the opponent, the more you have to gain. The weaker the opponent, the more you have to lose. Most of all,
          we're all in this to have a good time. While races have potential for really great competition, it's all about fun.</p>
        <h2 id="join">How do I participate in SRL races?</h2>
        <h3>1. Download an IRC client</h3>
        <p>There are a multitude of free IRC clients available. Some of the most popular ones include:</p>
        <ul>
          <li><a href="http://www.mirc.com/get.html">mIRC</a> - <a href="https://www.youtube.com/watch?v=hxTBHia1wak">doicm's mIRC Video Guide</a></li>
          <li><a href="http://hexchat.github.io/downloads.html">HexChat</a> - <a href="https://www.youtube.com/watch?v=72JZgmErL7w">doicm's HexChat Video Guide</a></li>
          <li><a href="http://www.icechat.net/site/downloads/">iceChat</a></li>
        </ul>
        <p>
          We also offer an embedded IRC client on our site <Link to="/channel/">here</Link>.
          However, the mibbit client lacks many features that other IRC clients have, so we heavily suggest using
          a full IRC client such as those mentioned above.
        </p>
        <h3> 2. Join our IRC channel</h3>
        <p>In the server connection window of your IRC client, join the <strong>#speedrunslive</strong> channel. You may connect
          to either of the following servers, based on your location:
        </p>
        <ul>
          <li>New York <strong>irc.speedrunslive.com</strong></li>
          <li>Amsterdam <strong>irc2.speedrunslive.com</strong></li>
        </ul>
        <h3>3. Familiarize yourself with basic IRC commands</h3>
        <p>
          A list of the most basic IRC commands can be found <a href="http://www.ircbeginner.com/ircinfo/ircc-commands.html">here</a>.
        </p>
        <p>We'd also suggest using the <code>/list</code> command, which lists the many channels which make up the SRL IRC. These
          range from game-specific channels to general subgroups of our large community.</p>
        <h3 id="getregged">4. Register your nick</h3>
        <ol>
          <li>Sign on to the nick you want to use for all future races, and type <code>/nickserv register <em>password e-mail</em></code>. It is important that you enter your actual e-mail address, in case you need to retrieve your password in the future.</li>
          <li>When logging onto the IRC, you can log in by signing on to your nick, and typing <code>/nickserv identify <em>password</em></code>.</li>
          <li>(optional) Set up automatic login within your IRC client. You may do this in mIRC by going to Options, then the Connect
            menu, then the Options menu. Click Perform, and type <code>/nickserv identify <em>password</em></code>. mIRC will
            automatically enter your password when you join the SRL IRC in the future.</li>
        </ol>
        <p>Advanced users may want to try our custom-built script, provided <a href="http://pastebin.com/kiVCE5Fh">here</a>. Be
          sure to substitute your own login information.
        </p>
        <p>
          If you ever need to retrieve your password, you can type <code>/nickserv resetpass <em>nickname e-mail</em></code> and it will send you a confirmation e-mail.
        </p>
        <p>
          You can find a more indepth FAQ about registration <Link to="/faq/registration/">here</Link>.
        </p>
        <h3>5. Set your stream</h3>
        <p>
          Type <code>.setstream twitch/<em>name</em></code> in the <strong>#speedrunslive</strong> channel to link your stream
          to SRL.
        </p>
        <p>Additional information:</p>
        <ul>
          <li>You only need to do this once. You do not need to do it every time you log in or race.</li>
          <li>Your stream will appear on the Streams page of the site after 1 total hour of racing. You will need to visit the website
            while logged in once per month to stay on. Alternatively you can join the <strong>#speedrunslive</strong> channel
            on IRC while identified at least once a month.
          </li>
          <li>You may substitute <code>twitch</code> with <code>hitbox</code>, but Hitbox.tv is currently <Link to="/news/hitbox/">not supported for racing</Link>
          </li>
          <li>In your Twitch settings, turn on <em>Automatically archive my broadcasts</em> in the Channel & Videos section. This
            will allow our moderators to check your VODs after the race if necessary.
          </li>
        </ul>
        <h3>6. Familiarize yourself with RaceBot commands</h3>
        <p>
          A full listing of RaceBot commands can be found <Link to="/faq/commandlist/">here</Link>.
        </p>
        <h3>7. Review the rules to racing on SRL</h3>
        <p>
          Our rules page can be found <Link to="/faq/rules">here</Link>.
        </p>
        <h3>8. Review the Racing section of this FAQ</h3>
        <p>
          The racing section of the FAQ can be found <a href="#racing">here</a>.
        </p>
        <p>
          After doing all of the above, you are ready for your first race. You can join any races with an ENTRY OPEN status. Alternatively,
          after confirming you have an opponent you can start your own race via the <code>.startrace</code> command.
        </p>
        <h2 id="resources">Where can I meet others that play my game, and find any existing resources about it?</h2>
        <p>
          There are a few places you can start:
        </p>
        <ul>
          <li>Join our IRC network as described above, and type <code>/list</code>. Browse through the list of IRC channels which
            comes up, and see if any pertain to your game or its series. Joining the community for a particular game or series
            is often the best first step towards getting more involved and learning more about it.</li>
          <li>Visit the <a href="http://forum.speeddemosarchive.com">SDA forums</a> and see if there is an existing thread about
            your game.</li>
          <li>There may be an existing site out there devoted entirely to providing strategies, routes, and/or leaderboards for your
            game or its series. Do a quick Google search and see what comes up!</li>
        </ul>
        <div className="faqdivider"></div>
        <h1 id="racing">Racing</h1>
        <h2 id="whatrace">What can I race on SpeedRunsLive?</h2>
        <p>We strongly encourage users to race goals that are meaningful and give time enough for the racers to demonstrate their
          levels of skill. Generally, any goal to beat the full game under any restriction is ok, as long as it exceeds approximately
          3 minutes or more. If you want to race an extremely short game such as Tower of Heaven, one suggestion is to have the
          goal be to beat it several times in a row.</p>
        <p>Generally, any goal that only completes a part of the game, such as "Beat World 1", should be kept to at least about
          10 minutes of actual playtime. However, some race goals can exceed this length and still be discouraged to race (Example:
          Beat Brock in Pokemon R/B/Y. May exceed 10 minutes, but it's too short in respect to the rest of the game to offer
          any real measure of competition.). The same applies for an arbitrary goal such as "Get 1000 points" or "collect 100
          such and suches". This is because we would like SRL to represent one's skill at the full game, so racing too many short
          goals can prevent the leaderboards from reflecting this.</p>
        <p>If you are still unsure, just ask a mod and they can tell you.</p>
        <h2 id="howgoals">Can you explain how different goals work? What does any% mean?</h2>
        <p>In order to race a game there needs to be a start point and an end point. The end point is whatever the goal is. The
          simplest end point is "any%" which means simply to beat the game. The term comes from the Metroid community, where
          people would do 100% runs, low% runs (beating the game with the least amount of items), and any% (anything goes).
        </p>
        <p>Some games don't really fit into percentages, such as Super Mario 64. Instead of percentage, the star count makes more
          sense to use. In Super Mario 64, a "120 star" goal would be to start a new game, collect all 120 stars, and beat the
          game.</p>
        <p>Sometimes goals are more complicated. For example, in King's Bounty, one of the more popular goals is "All Continentia
          bounties; no island leaving nor week ending (Normal)"</p>
        <p>A ruleset like this is the result of the community agreeing upon what makes a good, competitive race goal. Sometimes
          these more complicated goals are more fun and better to race than the more typical goals like "any%"</p>
        <p>For more about terms, check out the <Link to="/faq/glossary/">Glossary</Link>.</p>
          
        <h2 id="newgame">Can I race a game that's not on the SRL <Link to="/races/#!/gamelist/alphabetical">game list</Link>?</h2>
          
        <p>
          Yes, we encourage it!
        </p>
        <p>
          When you start a race on IRC, if the game isn't recognized by RaceBot, the race will automatically be categorized as New
          Game.
        </p>
        <p>
          In order to help us record the game, enter the game's title as a part of the new game's goal, so that a moderator knows what
          game it is when it comes time to record the race.
        </p>
        <h2 id="caniemulate">Can I play on an emulator?</h2>
        <p>If the emulator is accurate and the community for that game accepts emulator as a valid choice, then yes, you can. The
          most commonly used emulators for each system include:</p>
        <ul>
          <li><strong>NES</strong> - FCEUX 2.2.0</li>
          <li><strong>GB</strong> - bgb</li>
          <li><strong>SNES</strong> - SNES9x 1.53</li>
          <li><strong>GBA</strong> - VBA 1.7.2</li>
          <li><strong>Genesis/GameGear/SMS</strong> - Fusion</li>
          <li><strong>N64</strong> - Project64 v1.7</li>
        </ul>
        <p>For reference, <strong>the following emulators are globally banned for use in racing:</strong></p>
        <ul>
          <li><strong>SNES</strong> - ZSNES, snes9x 1.4x</li>
          <li><strong>N64</strong> - Project64 2.x</li>
          <li><strong>GB/GBC</strong> - VBA, VBA-M</li>
          <li><strong>GBA</strong> - VBA-M (use VBA instead. If VBA does not support your GBA game, please contact an op.)</li>
        </ul>
        <h2 id="setstream">How do I get my stream to appear on the races page of SpeedRunsLive?</h2>
        <p>Type <code>.setstream twitch/<em>name</em></code> to link your stream to SRL, if you have not done so already. Please
          note that Hitbox.tv is not currently supported for racing.</p>
        <h2 id="nostream">What if I can't stream but still want to race?</h2>
        <p>It is strongly preferred that you stream for racing. If you are asked for proof, you must figure out a way to show proof
          of completion of the goal. Otherwise, you will be disqualified (and possibly banned). If you are playing on an emulator,
          or if you are racing a <Link to="/races/#!/seasons/1">season goal</Link>,
          you are required to stream (NO exceptions). However, if you are playing on a console, you are not
          required to stream. For more details about streaming and proofcalling, read below.</p>
        <h2 id="proofcall">Rules about streaming and proofcalling.</h2>
        <h3>General</h3>
        <p>The following guidelines are subject to change and there can be instances where operators of SpeedRunsLive will have
          to make decisions that exceed these guidelines depending on the situation.</p>
        <p>Streaming is not a requirement for all racing on SpeedRunsLive, but we prefer that you do so, not only for our sake,
          but for your own as well. Please see specifics of streaming below.</p>
        <p>Being disqualified from a race does not necessarily label you a as a cheater, but rather as having failed to provide
          proof when proofcalled. Please see specifics of proofcalling below.</p>
        <h3>Streaming</h3>
        <p><strong>Consoles:</strong> Consoles can be streamed using a capture card to directly capture the console feed, or using
          a web camera pointed at your tv-screen. You are not required to stream if you are playing on a console, you can however
          still be proofcalled should someone doubt your time.</p>
        <p><strong>Emulators:</strong> All use of emulators MUST be streamed when racing. This is a requirement and there are no
          general exceptions. Certain emulators may be banned. If you happen to use an emulator that is running on an Android
          phone or other such device, you may not race until you have gotten permission from AT LEAST one operator in <strong>#speedrunslive</strong>.
          If you are doubting whether or not your emulator is affected by this rule, then assume that it is, and do not race
          without getting such permission. You can still be proofcalled in the event that you get permission to race without
          streaming, should someone doubt your time.</p>
        <p><strong>PC Games:</strong> All PC games MUST be streamed when racing. This is a requirement and there are no general
          exceptions. If you happen to believe that you cannot race while streaming because your game lags too much or you do
          not have sufficient bandwidth to stream, then you may not race until you have gotten permission from AT LEAST one operator
          in <strong>#speedrunslive</strong>. Also note that this permission will not be given for Minecraft, Minesweeper, Windows
          Desktop Games or other low requirement PC games that can be streamed on any computer purchased within the last four
          or so years. You can still be proofcalled in the event that you get permission to race without streaming, should someone
          doubt your time.</p>
        <p><strong>Other:</strong> When in doubt, ask an operator or other experienced users.</p>
        <h3>Proofcalling</h3>
        <p>Proofcalling is the way that we deal with cheaters and doubtful times on SpeedRunsLive. If a racer finishes with a time
          that seems to be above their skill level, or if a new racer suddenly gets a high ranking time on the race leaderboards,
          it is common to initiate a proofcall if that racer did not stream. Proofcalling can be done by anyone, whether in the
          race or not, and anyone can be proofcalled regardless of position. It is common to ask for assistance in <strong>#speedrunslive</strong> from a voice or operator to come handle the situation.</p>
        <p>The goal will be set to "don't record" or "proofcall in progress", and the racer in question must provide sufficient
          proof, to convince the other racers and proofcall handler that they are able to achieve the time that they claimed.
        </p>
        <p>Examples of sufficient proof:</p>
        <ul>
          <li>Streaming in good quality with sound is always sufficient proof.</li>
          <li>Video recording in good quality.</li>
          <li>In some games, a screencapture of filename and progress of completion is sufficient.</li>
          <li>In some games, a screencapture of in-game timer or level overview is sufficient.</li>
          <li>In some games, an explanation of routing choices and key events is sufficient.</li>
        </ul>
        <p>These examples are general and it is unfortunately impossible to make a perfect guideline for what is sufficient proof,
          which is why we recommend streaming.</p>
        <p>Should you happen to be proofcalled and unable to provide proof for your time, as mentioned previously it does not necessarily
          label you a cheater, but rather unable to prove your time. You will be disqualified from the race, and in the worst
          cases where we do believe cheating has taken place, you will be banned from SpeedRunsLive.</p>
        <p>If you happen to leave during a proofcall or become inactive for a longer period of time, you will also receive a disqualification,
          and if we feel necessary, a ban from SpeedRunsLive.</p>
        <h2 id="whatseasons">What exactly is "Seasons"?</h2>
        <p>A season is a 3 month, ranked competition of races. Season 1 ran from April 12, 2013 to September 8, 2013. Streaming
          is required for Seasons goals, regardless of whether you're playing on console or emulator. To learn more about seasons, <Link to="/races/#!/seasons/1">click here</Link>.</p>
          
        <h2 id="rankingsystem">How does the ranking system work?</h2>
        <p>The ranks for each game are calculated using a modified version of <a href="http://research.microsoft.com/en-us/projects/trueskill/">Microsoft TrueSkill</a>.</p>
        <h2 id="gametime">Some games have an in-game timer. How does this factor in to races?</h2>
        <p>It doesn't. We use real time for everything, so the only thing that determines the winner is the order in which they
          finish in real time. In-game timers tend to be easily abused, and oftentimes do not count many things such as pause
          screens, transitions, or lag.</p>
        <h2 id="turboetc">What's the deal with turbo-functions, glitch-abuse, cheat-codes, savestates, save-warping, scripts, and newgame+?</h2>
        <p>The rules for games are community-driven. Whatever people agree upon as the best way to play is what will be done. However
          here are some guidelines:</p>
        <h3>Turbo-functions</h3>
        <p>Not allowed when the official stock controller doesn't have this function. Turbo is unfair to those who don't have a
          third party controller with a turbo function.</p>
        <h3>Glitch-abuse</h3>
        <p>Allowed, but sometimes limited. One way to limit glitch abuse is to have certain rulesets or categories that have restrictions
          on what you can and cannot do. Generally glitches will be allowed, however. If you don't really understand why, then
          consider this: The game merely executes the code in the way it was programmed to do. The game is the law. If you start
          trying to get at "developer intentions," then you start a game of guesswork trying to figure out what exactly was intended
          or not.</p>
        <h3>Cheat-codes</h3>
        <p>If via a 3rd party device such as a gameshark or game genie, this is not allowed. These generally water down the game
          and remove the element of skill, which is against the whole point of competition. Using in-game cheats, if specifically
          mentioned in the goal, is allowed.</p>
        <h3>Savestates</h3>
        <p>Savestates and any emulator-exclusive functions are completely banned.</p>
        <h3>Save-warping</h3>
        <p>In some games, if you save and reload it will warp you to a certain point faster than if you travelled there naturally.
          Typically allowed, but this is a community-driven rule, and if it becomes more popular to disallow saves for a certain
          game, then so be it.</p>
        <h3>Scripts</h3>
        <p>This is entirely up to the community of the game being raced.</p>
        <h3>Newgame+</h3>
        <p>Allowed if it is specified in the goal. Disallowed otherwise.</p>
        <p>What you should pick up from this list is that it's the game's community drives the ruleset. Nothing is set in stone.
        </p>
        <div className="faqdivider"></div>
        <h1 id="frontpage">Front page</h1>
        <h2 id="howfrontpage">How do I get my stream to appear on the front page of SpeedRunsLive?</h2>
        <p>Type <code>.setstream twitch/<em>name</em></code> to link your stream to SRL, if you have not done so already. Your stream
          will appear on the Streams page of the site after 1 hour of racing. You may not appear immediately, as our system checks
          at specific times throughout the day.
        </p>
        <p>
          You will need to visit the website while logged in once per month to stay on. Alternatively you can join the <strong>#speedrunslive</strong> channel on IRC while identified at least once a month.</p>
        <h2 id="whatcanistream">What am I allowed to stream on the front page of SpeedRunsLive?</h2>
        <p>These things are considered speedrunning-related:</p>
        <ul>
          <li>speedruns</li>
          <li>practice</li>
          <li>routing</li>
          <li>races</li>
          <li>TAS work</li>
          <li>discussion about speedrunning</li>
          <li>challenge playthroughs of games you speedrun or intend to speedrun</li>
        </ul>
        <p>These things are not considered speedrunning-related:</p>
        <ul>
          <li>games which you have no intention of speedrunning</li>
          <li>casual playthroughs</li>
          <li>first playthroughs outside of races</li>
          <li>unrelated work (channel redesign, image or video editing, etc.)</li>
        </ul>
        <p>When logged in via the site, you can click Edit Profile to toggle whether or not you appear on the front page, depending
          on what you are streaming.</p>
        <p>If you are found streaming non-speedrun content to the front page, you will be flagged and automatically hidden. Depending
          on quantity of recent offenses, you will be temporarily blacklisted as follows:</p>
        <ul>
          <li>1st offense: Profile set to "Do not display me", able to be toggled freely</li>
          <li>2nd and 3rd offenses: Profile set to "Do not display me" for 24 hours</li>
          <li>4th offense and beyond: Profile set to "Do not display me" for 1 week</li>
        </ul>
        <p>
          After not being flagged for 3 consecutive months, you will revert to 0 offenses.
        </p>
        <h2 id="whatotherfeatures">What other features does the front page offer? </h2>
        <p>
          While logged in via the site, you can customize your front page by pinning your favorite streamers and games so that they
          appear at the top of your list. You may also hide streamers and games you do not want to see, so that they appear in
          a hidden menu at the bottom of your list.
        </p>
        <h2 id="charitymarathons">Can my upcoming charity marathon be featured on the front page?</h2>
        <p>We're happy to promote any (speedrunning-related) charity marathon, given the following two conditions are met:</p>
        <ol>
          <li>You provide a complete schedule 2 weeks before the marathon begins.</li>
          <li>All donation links presented on stream or marathon related websites should go directly to the charity's PayPal or another
            proven payment method. No proceeds should go towards personal causes.</li>
        </ol>
        <p>Additional notes:</p>
        <ul>
          <li>If you'd like to use PayPal but your charity does not accept it, you should contact them ahead of time to see if they
            are able to set up a PayPal address for you in their domain name.</li>
          <li>Do not add or modify donation links after the stream has been whitelisted.</li>
          <li>We may not whitelist marathons for personal causes, such as medical bills or travel costs to get to another marathon
            (even if “excess” funds go to a charity).</li>
          <li>Users are free to host marathons for whatever cause they wish on their own SRL nick under their own Twitch name, be
            it for charity, personal, etc. Exploiting a loophole by using one’s racing nick and doing <code>.setstream</code> to a marathon Twitch channel is not acceptable, and may result in your stream being temporarily blacklisted from
            the front page.</li>
          <li>After the marathon concludes, the stream will be un-whitelisted. If another marathon happens on the channel in the
            future, please re-submit the request.</li>
        </ul>
        <p>If you would like your marathon to be whitelisted, please PM a moderator, and/or send an e-mail to the SRL e-mail address
          at <a href="mailto:staff@speedrunslive.com">staff@speedrunslive.com</a>.</p>
        <h2 id="noncharitymarathons">I’d like to host a just-for-fun marathon, with no donations involved. Can that be featured on the front page?</h2>
        <p>These types of marathons may be allowed on a case by case basis. Regardless, you can still host the marathon on your
          own personal Twitch channel.</p>
        <p>Any races done on a marathon account to circumvent the stream requirement will be ended, and may result in the marathon
          being blacklisted.</p>
        <p>As stated above, please PM a moderator, and/or send an e-mail to the SRL e-mail address at <a href="mailto:staff@speedrunslive.com">staff@speedrunslive.com</a> with full details and schedule.</p>
        <div className="faqdivider"></div>
        <h1 id="other">Other</h1>
        <h2 id="socialmedia">How can I add or change the social media links in my SRL profile?</h2>
        <p>
          While logged in via the site, click Edit Profile to change your personal options.
        </p>
        <p>
          You may also edit your settings via the corresponding <Link to="/faq/commandlist/#settwitter">RaceBot commands</Link>.
        </p>
        <h2 id="twitchteam">Can I be invited to the SRL Twitch team?</h2>
        <p>
          We plan on actively inviting to the SRL Twitch team in the future, and will announce details when ready.
        </p>
        <h2 id="involved">I want to get more involved. How can I help the community?</h2>
        <p>
          While you help simply by racing and being an active member of the community, there are multiple ways to get more involved:
        </p>
        <ul>
          <li>Assist our IRC moderation team by helping newcomers with questions.</li>
          <li>Submit rulesets for games you are familiar with, to go on the site's game pages.</li>
          <li>If you are multi-lingual, offer to create translations of pages on our site which still need them.</li>
          <li>SRL is fully supported by donations. You could always help by donating <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SQ2NXSJRUVWLW">here</a>!
            100% of donations go towards the various costs associated with keeping the SRL site and IRC running.
          </li>
        </ul>
        <h2 id="imbad">I'm really bad at this whole speedrunning thing...</h2>
        <p>Doesn't matter. There are players of all skill levels on SRL. It is better to actually try than to sit back and make
          excuses. Give it a try!</p>
        <p>Also, if you're still feeling unsure of how everything works here, feel free to lurk in <strong>#speedrunslive</strong>,
          check out a few races, linger in race channels, and ask questions (even if the people tell you to look at the FAQ again,
          which isn't a bad idea either).</p>

          <ToTopButton/>
          
      </div>
    </div>
  );
}

export default FAQBody;
import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './rules.scss'
import FAQNav from '../faqNav';

//counterpart.registerTranslations('en', require('./translations/en'));

const Rules = () => {
  return (
      <div className = "row rules">
 <FAQNav>
        <a href="#before">Rules before starting a race</a>
        <a href="#while">Rules while racing</a>
        <a href="#outside">Rules outside of racing</a>
 </FAQNav>

<div className="pull-left col-md-9" id="faq">
    <h1>Racing Rules
        <Link to="/faq/rules">
        <img className="flag" src="http://cdn.speedrunslive.com/images/flags/United_States_of_America.png" alt="En" />
        </Link>
        <Link to="/faq/rules/sp">
        <img src="http://cdn.speedrunslive.com/images/flags/Spain.png" className="flag" alt="Sp" />
        </Link>
    </h1>
    <p> Below are the rules for racing on the SRL IRC network. While we recommend reading the <Link to="/faq">FAQ</Link> in full, you <em>must</em> 
        familiarize yourself with the following rules, or you put yourself at a high
        risk of being DQed from races or banned from the IRC channel.
    </p>

    <h1 id="before">Rules before starting a race</h1>
    <ul>
        <li>Online multiplayer races may be ended at the discretion of SRL moderation. This is especially true for randomly assigned
            1v1 matches such as poker, chess, or Starcraft.
            <p><strong>Result:</strong> Race ended.</p>
        </li>
        <li>No racing two different goals, ex. SM64 70 star vs 120 star, or SM64 70 star vs SMS any%.
            <p><strong>Result:</strong> Race ended.</p>
        </li>
        
        <li>No racing extremely short or unmeaningful goals. See <a href="/faq#whatrace">FAQ</a> for more details.
            <p><strong>Result:</strong> Race ended.</p>
        </li>
        <li>Team/coop races are allowed, but will not be recorded.
            <p><strong>Result:</strong> Race ended.</p>
            </li>
        <li>Do not start a race unless you have an opponent that will join.
            <p><strong>Result:</strong> Race ended.</p>
        </li>

    </ul>

    <h1 id="while">Rules while racing</h1>
    <ul>
        <li>Absolutely no emulator functions, such as savestates or speedups. No turbo-fire functions unless it is available
            on the original controller. No external devices such as game genie or gameshark. No scripts unless specifically
            allowed. No typing .done if you haven't finished the goal. See <a href="/faq#turboetc">FAQ</a> for more details.
            <p><strong>Result:</strong> DQed from race and perma-banned from <strong>#speedrunslive</strong>. We take this matter
            VERY seriously, and we hold a zero tolerance policy on cheating.</p>
        </li>

        <li>You must stream if you are playing on emulator or are playing a PC game. See <a href="/faq#proofcall">FAQ</a> for
            more details.
            <p><strong>Result:</strong> If caught playing on emulator or PC game without streaming, DQed from the race. If playing
            on console, and you are proof-called but cannot provide proof, DQed from the race. If you are highly suspected
            of cheating in either case, you may be added to a list requiring you to stream all future races, or become temporarily
            or permanently banned, depending on the circumstances.
            </p>
            <p>
            <strong>Note:</strong> In the “Videos” section of your twitch settings, it is highly recommended you enable the
            “Automatically archive my broadcasts” option. This will allow anyone to watch your VOD after you stop streaming.<em> If you livestreamed your race but cannot provide a video upon being proofcalled, you may be DQed.</em> Note that this option is off by default.
            </p>
            </li>

        <li>You may not use the following emulators for racing:
            <ul>
                <li><strong>SNES</strong> - ZSNES, snes9x 1.4x</li>
                <li><strong>N64</strong> - Project64 2.x</li>
                <li><strong>GB/GBC</strong> - VBA, VBA-M</li>
                <li><strong>GBA</strong> - VBA-M (use VBA instead. If VBA does not support your GBA game, please contact an op.)</li>
            </ul>
            <p><strong>Result:</strong> DQ with a warning; may be banned if repeated.</p>
        </li>
        <li>If you need to change a goal mid-race, be sure that every single entrant still racing agrees to it.
            <p><strong>Result:</strong> If even one person doesn’t respond or disagrees, the goal must stay as is.</p></li>
        <li>No extended breaks, such as sleeping, during a race. A safe go by is no more than 10 minutes at a time, per hour.
            <p><strong>Result:</strong> DQ'd from race.</p></li>

    </ul>

    <h1 id="outside">Rules outside of racing</h1>
    <ul>
        <li>No connecting via a tor service.
            <p><strong>Result:</strong> Ban as long as you use that service.</p></li>
        <li>No racing on more than 1 nick.
            <p><strong>Result:</strong> May be banned if repeated.</p></li>
        <li>If you consistently stream material that is clearly unacceptable to the front page, you will be warned.
            <p><strong>Result:</strong> If it continues (or is severe enough to not deserve a warning), you may be blacklisted
            from the front page.</p></li>
        <li>Do not use derogatory terms. Do not harass other members.
            <p><strong>Result:</strong> Warning, temporary ban, or permanent ban depending on the circumstances.</p></li>
        <li>Do not ban evade.</li>
    </ul>
    </div>
</div>

  );
}

export default Rules;
import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './glossary.scss'
import FAQNav from '../faqNav';

//counterpart.registerTranslations('en', require('./translations/en'));

const Glossary = () => {
  return (
    <div className="row glossary">

      <div className="pull-left col-md-8">
        <h1>Speedrunning Glossary
          <Link to="/faq/glossary">
          <img className="flag" src="http://cdn.speedrunslive.com/images/flags/United_States_of_America.png" alt="En" />
          </Link>
          <Link to="/faq/glossary/sp">
          <img src="http://cdn.speedrunslive.com/images/flags/Spain.png" className="flag" alt="Sp" />
          </Link>
        </h1>
      
        <div className="word">100%</div>
        <div className="definition">A run with a completion requirement of collecting 100% of the items. In games without a percentage counter, the
          community decides what parts of the game are important enough to count towards 100%. Not all games lend themselves
          well towards a 100% definition.</div>
      
        <div className="word">AmaRecTV</div>
        <div className="definition">A free capture program that may be found <a href="http://www.amarectv.com/english/amarectv_e.htm">here</a>. Using
          AmaRecTV as a video source for streaming works well and enables lossless video capture and streaming simultaneously.
          Highly recommended over Pinnacle if you use a Dazzle.</div>
      
        <div className="word">Any%</div>
        <div className="definition">A run with no additional completion requirements; anything goes. The "default" category for speedrunning a game.
          The term comes from the old school Metroid speedrunning community. Metroid has a percentage counter, while other
          games may not, but the term stuck around. </div>

        <div className="word">Autofire</div>
        <div className="note definition">see Turbo</div>

        <div className="word">Blind</div>
        <div className="definition">Having no experience with or beneficial knowledge of a game before running it.</div>
      
        <div className="word">Buffering</div>
        <div className="definition">A game allowing you to input an action while another is still going on. For example, in <em>Commander Keen IV</em> if you shoot and then hold jump, as soon as the shooting animation is over he will jump on the first possible
          frame.</div>
      
        <div className="word">Bug</div>
        <div className="note definition">see Glitch</div>
      
        <div className="word">Capture Card</div>
        <div className="definition">A device used to capture your TV screen for purposes of streaming or recording.</div>
      
        <div className="word">Category</div>
        <div className="definition">Different rulesets or completion requirements for a game. Typical categories would be any% and 100%. Typical restrictions
          might be 'warpless' or 'glitchless.' Some games do not fall neatly into percentage based completion requirements,
          so the categories should be named differently (such as <em>120 star</em> for <em>Super Mario 64</em>). </div>
      
        <div className="word">Damage Boost</div>
        <div className="definition">Intentionally getting hit in order to gain extra speed/height or to pass through enemies/obstacles quickly.</div>
      
        <div className="word">Dazzle</div>
        <div className="definition">A brand of capture card. This capture card is standard definition, and has a lack of support for audio drivers
          (AmaRecTV is one solution).</div>
      
        <div className="word">Death Warp</div>
        <div className="definition">Intentionally dying to save time, usually by avoiding backtracking.</div>
      
        <div className="word">Emulator</div>
        <div className="definition">Software that runs a game outside of its original console. Oftentimes emulators come with extra features that were
          not present on the original console, such as frame advance and save states. These functions are not allowed in
          races.</div>
      
        <div className="word">EzCap</div>
        <div className="definition">An inexpensive brand of capture card (standard definition).</div>
      
        <div className="word">FMLE / Flash Media Live Encoder</div>
        <div className="definition">Streaming software (can be found <a href="http://www.adobe.com/products/flashmediaserver/flashmediaencoder/">here</a>).
          A free alternative to XSplit, though harder to set up. If you're using FMLE you may be interested also using
          SCFH DSF to stream a screen region.</div>
      
        <div className="word">Frame</div>
        <div className="definition">The time it takes for the game to update the screen and poll input, typically 1/60th or 1/30th of a second, but
          can vary.</div>
      
        <div className="word">Frame Advance</div>
        <div className="definition">An emulator function to stop the game and creep forward frame by frame. This can be used to get the exact input
          necessary for certain difficult techniques. This is not allowed in races.</div>
      
        <div className="word">Frame Perfect</div>
        <div className="definition">A technique in a game that you only have a 1 frame window to successfully pull off.</div>
      
        <div className="word">Game Time</div>
        <div className="definition">Using a timing system that is provided within the game itself. Game timers sometimes do not count time spent on
          the pause screen, in menus, or during loading, so the timers often to not accurately represent real time.</div>
      
        <div className="word">Glitch</div>
        <div className="definition">Unintentional mistake in the game's code, often exploited.</div>
      
        <div className="word">Input Lag</div>
        <div className="definition">A delay between you performing an input and seeing it happen on the screen. Some HDTVs have significant input lag,
          as well as things like playing the game using a capture device without splitters.</div>
      
        <div className="word">Lag</div>
        <div className="definition">Slowdown when too much is happening for the system to handle. Lag might be caused by many things, such as being
          in a specific part of the game, having a lot of enemies onscreen, or using certain camera angles.</div>
      
        <div className="word">Lag Reduction</div>
        <div className="definition">Techniques to avoid lag from occuring (e.g. using specific camera angles, killing certain enemies, avoiding spawning
          extraneous objects).</div>
      
        <div className="word">Low%</div>
        <div className="definition">A run that completes the game with the bare minimum lowest percentage. This can take a lot longer than an any%
          run, depending on the game. This is not a worthy category for many games, and is definitely rarer than similar
          categories such as 100%.</div>
      
       <div className="word">Luck-Based</div>
        <div className="definition">A strategy that is influenced by the RNG, preventing it from being consistant. Some extremely precise tricks may
          also be called "luck-based" simply because of the low success rate, despite having nothing to do with RNG.</div>
      
        <div className="word">Luck Manipulation</div>
        <div className="definition">A TAS technique to get good luck, which manipulates the RNG by doing things such as waiting for the right frame,
          attacking on certain frames, or moving in certain ways. Rarely, this is possible to do in real time in some games.</div>
      
        <div className="word">NicoVideo</div>
        <div className="definition">Japanese site that has videos and streaming. Has a speedrunning community.</div>
      
        <div className="word">Non-TAS</div>
        <div className="definition">Done in real time without emulator functions.</div>
      
        <div className="word">NTSC</div>
        <div className="definition">The non-European version of a game. Runs at the full intended speed, unlike some PAL games.</div>
      
        <div className="word">Manipulation</div>
        <div className="definition">Something done by the player to control the outcome of the game's events (e.g. item drops, spawn locations, enemy
          behavior).</div>
      
        <div className="word">Mash</div>
        <div className="definition">Performing an input repeatedly, as fast as possible.</div>
      
        <div className="word">OoB / Out of Bounds</div>
        <div className="definition">To go outside of the playing field of the game. Sometimes vaguely defined.</div>
      
        <div className="word">Overflow &amp; Underflow</div>
        <div className="definition">A memory glitch that can be taken advantage of sometimes. For example, in <em>Castlevania: Symphony of the Night</em> you can use a glitch to equip a salable gem while you have the 'Sell gem' menu open. This lets you sell a gem
          while you have 0. Afterwards, you have 255 gems. </div>
      
        <div className="word">PAL</div>
        <div className="definition">The European version of a game. On older consoles, PAL games may run at 5/6ths speed, making them unrecommended
          to speedrun with.</div>
      
        <div className="word">Pause Buffer</div>
        <div className="definition">Buffering using the pause function of the game. Only applies to some games.</div>
      
        <div className="word">PR / Personal Record</div>
        <div className="definition">A person's best time in a category. Also called "PB / Personal Best."</div>
      
        <div className="word">Re-Records</div>
        <div className="definition">How many times a save state was loaded in the making of a TAS.</div>
      
        <div className="word">RNG / Random Number Generator</div>
        <div className="definition">The function in the game's code responsible for creating random events.</div>
      
        <div className="word">ROM</div>
        <div className="definition">The game as a file, to be read by an emulator.</div>
      
        <div className="word">RTA / Real Time Attack</div>
        <div className="definition">A speedrun done in real time.</div>
      
        <div className="word">Run</div>
        <div className="note definition">see Speedrun</div>
      
        <div className="word">Save State</div>
        <div className="definition">An emulator function that saves the current state of everything in the game, which can be reloaded at will. Not
          allowed in races.</div>
      
        <div className="word">Save Warp</div>
        <div className="definition">Saving and reloading to save time, typically to avoid backtracking. Similar to Death Warp. On SRL, all time spent
          reloading the game counts towards the final time.</div>
      
        <div className="word">SCFH DSF</div>
        <div className="definition">Screen capture program, for use with FMLE.</div>
      
        <div className="word">SDA / Speed Demos Archive</div>
        <div className="definition">Host of tons of speedrun videos &amp; host of awesome marathons. <a href="http://www.speeddemosarchive.com">http://www.speeddemosarchive.com</a></div>
      
        <div className="word">Sequence Break</div>
        <div className="definition">Doing something out of order in the intended sequence of events of a game.</div>
      
        <div className="word">Segmented</div>
        <div className="definition">A way of minimizing game time by redoing sections of a speedrun over and over.</div>
      
        <div className="word">Single Segment</div>
        <div className="definition">A speedrun that never loads a save.</div>
      
        <div className="word">Spawn</div>
        <div className="definition">Location and time where objects appear. Spawns may be random, fixed, or manipulatable by the player.</div>
      
        <div className="word">Speedrun</div>
        <div className="definition">Playing a game with the intent of completing a goal as fast as possible.</div>
      
        <div className="word">SRL / SpeedRunsLive</div>
        <div className="definition">A site where players speedrun in direct competition with others, live. </div>
      
        <div className="word">Sub-Pixel</div>
        <div className="definition">When a game tracks position more accurately than down to the pixel. Sometimes relevant when attempting various
          sequence breaks / glitches.</div>
      
        <div className="word">TAS / Tool Assisted Speedrun</div>
        <div className="definition">An input file created to play back what an optimal speedrun would look like, in an emulator.</div>
      
        <div className="word">TASVideos</div>
        <div className="definition">The largest TASing website. <a href="http://www.tasvideos.org">http://www.tasvideos.org</a></div>
      
        <div className="word">Turbo</div>
        <div className="definition">A third-party controller or emulator function that allows a button being held down to count as being pressed repeatedly
          as fast as possible. Not allowed in races.</div>
      
        <div className="word">TwinGalaxies</div>
        <div className="definition">Old school world record authority for arcade game highscores.</div>
      
        <div className="word">TwitchTV / JustinTV</div>
        <div className="definition">Live streaming website. Most speedrunners use this site to live stream their gameplay.</div>
      
        <div className="word">TWR / Tied World Record</div>
        <div className="definition">A record in a game that tracks the time/score internally, which has been tied by at least one other person.</div>
      
        <div className="word">UStream</div>
        <div className="definition">Live streaming website. A few people still use UStream for their speedrunning attempts.</div>
      
        <div className="word">UWR / Untied World Record</div>
        <div className="definition">A record in a game that tracks the time/score interally, that nobody else has achieved.</div>   
      
        <div className="word">VC / Virtual Console</div>
        <div className="definition">The Wii's official emulator.</div>     
      
        <div className="word">WAD</div>
        <div className="definition">A Wii channel, as a file. VC games are WADs.</div> 
      
        <div className="word">Warp</div>
        <div className="definition">A secret method of skipping past some of the levels/worlds in a game. Typically found in older games.</div>    
      
        <div className="word">WR / World Record</div>
        <div className="definition">The fastest time in the world for a category.</div>      
      
        <div className="word">WSplit</div>
        <div className="definition">The most popular timer program for speedrunning. It tracks how far ahead or behind you are of set checkpoints.
          Supports icons, custom colors, and has different display formats. Created by Wodanaz of SDA.</div>
      
        <div className="word">XSplit</div>
        <div className="definition">The most popular streaming software. </div>
      
        <div className="word">Zip</div>
        <div className="definition">A 2D game's wall ejection routine sending the player character through the wall rapidly.</div>
      
      </div>
    </div>
  );
}

export default Glossary;
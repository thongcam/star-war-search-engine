<div className='flex flex-column items-center' style={{backgroundImage:"url('https://steamuserimages-a.akamaihd.net/ugc/916912476088733298/A9222CAD7EAE0A34395B21322CE4742610E9B422/')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
  <style>
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
   </style>

   <h1 style={{fontFamily:"'Press Start 2P', cursive",color:'yellow'}} >STAR WARS SEARCH ENGINE</h1>

   {/* SEARCH BOX   */}
   <div className='pt3 w-60 '>
          <input placeholder="Search Star Wars stuff..." className='f3 pa4 ba b--dashed b--yellow w-100 br1 bw2'/>
   </div>
   {/* SEARCH BOX   */}

   <h2 className='f2 self-start ph4 white underline'>Filters:</h2>

    {/* FILTER CARDS */}
   <div className='flex justify-around flex-wrap'>
    <div className='dib br2 ma3 pr3 bb bw2 b--yellow grow shadow-5 flex items-center bg-white'>
       <div className='ma3 f3'>#People</div>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" style={{fill:'FFD700'}}/></svg>
    </div>
    <div className='dib br2 ma3 pr3 bb bw2 b--blue grow shadow-5 flex items-center bg-white'>
       <div className='ma3 f3'>#Films</div>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" style={{fill:'#357EDD'}}/></svg>
    </div>
    <div className='dib br2 ma3 pr3 bb bw2 b--red grow shadow-5 flex items-center bg-white'>
       <div className='ma3 f3'>#Starships</div>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" style={{fill:'FF4136'}}/></svg>
    </div>
    <div className='dib br2 ma3 pr3 bb bw2 b--light-purple grow shadow-5 flex items-center bg-white'>
       <div className='ma3 f3'>#Vehicles</div>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" style={{fill:'A463F2'}}/></svg>
    </div>
    <div className='dib br2 ma3 pr3 bb bw2 b--green grow shadow-5 flex items-center bg-white'>
       <div className='ma3 f3'>#Species</div>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" style={{fill:'19A974'}}/></svg>
    </div>
    <div className='dib br2 ma3 pr3 bb bw2 b--light-pink grow shadow-5 flex items-center bg-white'>
       <div className='ma3 f3'>#Planets</div>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" style={{fill:'FFA3D7'}}/></svg>
    </div>
    <div className='dib br2 ma3 pr3 bb bw2 b--moon-gray grow shadow-5 flex items-center bg-white'>
       <div className='ma3 f3'>#Unselected</div>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" style={{fill:'CCC'}}/></svg>
    </div>
  </div>
  {/* FILTER CARDS */}

  {/* CARD */}
  <div className='mv5 mh5 flex flex-wrap justify-center'>
    <div className='dib br3 ma4 grow shadow-5 bg-white'>
      <p className='pa1 yellow bg-black di br2 '>#People</p>
      <h1 className='ph3'>Luke Skywalker</h1>
      <div className='tc pt3 pb3 bg-yellow ph3 underline' style={{cursor:'pointer'}}>See more information</div>
    </div>
    <div className='dib br3 ma4 grow shadow-5 bg-white'>
      <p className='pa1 blue bg-black di br2 '>#Films</p>
      <h1 className='ph3'>A New Hope</h1>
      <div className='tc pt3 pb3 bg-blue ph3 underline' style={{cursor:'pointer'}}>See more information</div>
    </div>
    <div className='dib br3 ma4 grow shadow-5 bg-white'>
      <p className='pa1 red bg-black di br2 '>#Starships</p>
      <h1 className='ph3'>Death Stars</h1>
      <div className='tc pt3 pb3 bg-red ph3 underline' style={{cursor:'pointer'}}>See more information</div>
    </div>
    <div className='dib br3 ma4 grow shadow-5 bg-white'>
      <p className='pa1 light-purple bg-black di br2 '>#Vehicles</p>
      <h1 className='ph3'>Sand Crawler</h1>
      <div className='tc pt3 pb3 bg-light-purple ph3 underline' style={{cursor:'pointer'}}>See more information</div>
    </div>
    <div className='dib br3 ma4 grow shadow-5 bg-white'>
      <p className='pa1 green bg-black di br2'>#Species</p>
      <h1 className='ph3'>Wookie</h1>
      <div className='tc pt3 pb3 bg-green ph3 underline' style={{cursor:'pointer'}}>See more information</div>
    </div>
    <div className='dib br3 ma4 grow shadow-5 bg-white'>
      <p className='pa1 light-pink bg-black di br2 '>#Planets</p>
      <h1 className='ph3'>Tatooine</h1>
      <div className='tc pt3 pb3 bg-light-pink ph3 underline' style={{cursor:'pointer'}}>See more information</div>
    </div>
  </div>
  {/* CARD */}

</div>

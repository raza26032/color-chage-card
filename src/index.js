import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MediaCard({ profilePic, title, body, imgUrl }) {

  const [value, setValue] = React.useState(true);

  function cllick() {
    setValue((previousValue) => (!previousValue))
  }
  return <div>
    <input type="checkbox" onClick={cllick}></input>
    <div className="card-container">
      <div className={(value === true) ? "Dark" : "Bright"}>
        <img className="round" src={profilePic} />
        <div className="name"><a><b>{title}</b></a></div>
        <div className="content">
          <p>{body}</p>
        </div>
        <div className="square">
          <img className="square-post" src={imgUrl} />
        </div>
      </div>
    </div>
  </div>
}

ReactDOM.render(
  <>
    <MediaCard profilePic="https://pbs.twimg.com/profile_images/1162267138842755075/zxLifsgg.jpg"
      title="@ImranKhan" body="Imran Ahmed Khan Niazi HI PP is the 22nd and current Prime Minister of Pakistan and the chairman of the Pakistan Tehreek-e-Insaf. Before entering politics, Khan was an international cricketer and captain of the Pakistan national cricket team, which he led to victory in the 1992 Cricket World Cup."
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5SmSUMqFF_TkfroF-Ll4I3boH-juOhHegg&usqp=CAU" />
  </>,
  document.getElementById('root')
);
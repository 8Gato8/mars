import './Content.css';

function Content() {
  return (
    <main className="main">
      <div className="main__vector vector">
        <svg
          className="vector__small-circle"
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none">
          <circle cx="3" cy="3" r="3" fill="#D9D9D9" />
        </svg>
        <svg
          className="vector__line"
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="588"
          viewBox="0 0 2 590"
          fill="none">
          <path d="M0 0H2V597H0V0Z" fill="#D9D9D9" />
        </svg>
        <svg
          className="vector__big-circle"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none">
          <circle cx="5" cy="5" r="5" fill="#D9D9D9" />
        </svg>
      </div>
      <p className="main__text">ТОЧКА НАЗНАЧЕНИЯ:</p>
      <div className="main__banner">
        <video className="main__video" autoPdlay loop>
          <source src="../../assets/Mars.mp4" type="video/mp4" />
        </video>
        <div className="main__title-block">
          <h1 className="main__title">МАРС</h1>
        </div>
      </div>
    </main>
  );
}

export default Content;

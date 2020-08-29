import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../Utils/Button';

export default function Nav() {
  return (
    <>
      <nav className=" flex text-white flex-row justify-around py-1 lg:w-64 lg:flex-col lg:p-3 shadow-md">
        <NavLink to="/" className="hidden lg:block">
          <div
            className="text-white text-lg pt-2  flex items-center justify-center rounded-full hover:bg-secondary"
            style={{ width: '50px', height: '50px', padding: '1px' }}
            title="Safeshare Logo"
          >
            <svg
              style={{ width: '37px', height: '37px' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6161 12.4219C27.8862 -5.02801 3.32812 24 3.32812 24C3.32812 24 6.85509 18.8163 6.85509 12.4219C21.6161 2.58047 3.32812 0.84375 3.32812 0.84375C3.32812 0.84375 15.3459 29.8718 21.6161 12.4219Z"
                fill="#F4F4F9"
              />
            </svg>
          </div>
        </NavLink>
        <NavLink
          exact
          to="/"
          className="py-1 navlink"
          activeClassName="text-accent"
        >
          <div
            style={{ width: '-moz-fit-content', width: 'fit-content' }}
            className="flex py-2 px-3 items-center"
          >
            <div className="pr-3 text-2xl ">
              <svg viewBox="0 0 24 24" className="w-6 fill-current ">
                <g>
                  <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z" />
                </g>
              </svg>
            </div>
            <div className="text-xl font-bold hidden lg:block"> Home </div>
          </div>
        </NavLink>
        <NavLink
          to="/settings"
          activeClassName="text-accent"
          className="py-1 navlink"
        >
          <div
            style={{ width: '-moz-fit-content', width: 'fit-content' }}
            className="flex py-2 px-3 items-center"
          >
            <div className="pr-3 text-2xl">
              <svg viewBox="0 0 24 24" className="w-6 fill-current">
                <g>
                  <path d="M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.026-2.29-2.29S10.74 9.71 12 9.71s2.29 1.026 2.29 2.29-1.028 2.29-2.29 2.29z" />
                  <path d="M12.36 22.375h-.722c-1.183 0-2.154-.888-2.262-2.064l-.014-.147c-.025-.287-.207-.533-.472-.644-.286-.12-.582-.065-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51c-.836-.84-.896-2.154-.14-3.06l.098-.118c.186-.222.23-.523.122-.787-.11-.272-.358-.454-.646-.48l-.15-.014c-1.18-.107-2.067-1.08-2.067-2.262v-.722c0-1.183.888-2.154 2.064-2.262l.156-.014c.285-.025.53-.207.642-.473.11-.27.065-.573-.12-.795l-.094-.116c-.757-.908-.698-2.223.137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122.27-.112.452-.358.477-.643l.014-.153c.107-1.18 1.08-2.066 2.262-2.066h.722c1.183 0 2.154.888 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118c-.188.22-.234.522-.123.788.112.27.36.45.646.478l.152.014c1.18.107 2.067 1.08 2.067 2.262v.723c0 1.183-.888 2.154-2.064 2.262l-.155.014c-.284.024-.53.205-.64.47-.113.272-.067.574.117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096c-.217-.183-.53-.23-.79-.122-.273.114-.455.36-.48.646l-.014.15c-.107 1.173-1.08 2.06-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175.79.328 1.324 1.054 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148c.076-.842.61-1.567 1.392-1.892.793-.33 1.696-.182 2.333.35l.113.094c.178.148.366.18.493.18.206 0 .4-.08.546-.227l.51-.51c.284-.284.305-.73.048-1.038l-.1-.12c-.542-.65-.677-1.54-.352-2.323.326-.79 1.052-1.32 1.894-1.397l.155-.014c.397-.037.7-.367.7-.77v-.722c0-.4-.303-.73-.702-.768l-.152-.014c-.846-.078-1.57-.61-1.895-1.393-.326-.788-.19-1.678.353-2.327l.1-.118c.257-.31.236-.756-.048-1.04l-.51-.51c-.146-.147-.34-.227-.546-.227-.127 0-.315.032-.492.18l-.12.1c-.634.528-1.55.67-2.322.354-.788-.327-1.32-1.052-1.397-1.896l-.014-.155c-.035-.397-.365-.7-.767-.7h-.723c-.4 0-.73.303-.768.702l-.014.152c-.076.843-.608 1.568-1.39 1.893-.787.326-1.693.183-2.33-.35l-.118-.096c-.18-.15-.368-.18-.495-.18-.206 0-.4.08-.546.226l-.512.51c-.282.284-.303.73-.046 1.038l.1.118c.54.653.677 1.544.352 2.325-.327.788-1.052 1.32-1.895 1.397l-.156.014c-.397.037-.7.367-.7.77v.722c0 .4.303.73.702.768l.15.014c.848.078 1.573.612 1.897 1.396.325.786.19 1.675-.353 2.325l-.096.115c-.26.31-.238.756.046 1.04l.51.51c.146.147.34.227.546.227.127 0 .315-.03.492-.18l.116-.096c.406-.336.923-.524 1.453-.524z" />
                </g>
              </svg>
            </div>
            <div className="text-xl font-bold hidden lg:block">Settings</div>
          </div>
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="text-accent"
          className="py-1 navlink"
        >
          <div
            style={{ width: '-moz-fit-content', width: 'fit-content' }}
            className="flex py-2 px-3 items-center"
          >
            <div className="pr-3 text-2xl ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-6 fill-current "
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                  fill="currentColor"
                />
                <path
                  d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="text-xl font-bold hidden lg:block"> About </div>
          </div>
        </NavLink>
        <NavLink to="/create" className="hidden lg:block lg:mt-2">
          <Button>Invite Friends</Button>
        </NavLink>
      </nav>
    </>
  );
}

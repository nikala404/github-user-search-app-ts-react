import bitMapPng from "../assets/Bitmap.png";

export interface UserDisplayProps {
  name?: string;
  nickname?: string | null;
  date?: string | null;
  bio?: string;
}

export default function UserDisplay({
  name,
  nickname,
  date,
  bio,
}: UserDisplayProps) {
  return (
    <>
      <div id="user-display">
        <div id="user-info">
          <div className="bitmap-pic">
            <img src={bitMapPng} alt="" />
          </div>
          <div className="parent">
            <div className="name-date-div">
              <div id="name-nickname">
                <span className="name-nickname-span">
                  <h2>{name}</h2>
                  {nickname !== null && (
                    <p>
                      <a href={nickname}>{nickname}</a>
                    </p>
                  )}
                </span>
              </div>
              <div id="joined-date">
                <p>{date}</p>
              </div>
            </div>
            <div className="bio-div">
              <div id="bio">
                <p>{bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

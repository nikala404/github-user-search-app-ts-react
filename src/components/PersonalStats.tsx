export interface PersonalStatsProps {
  repos: string;
  reposQuantity: number | null;
  followers: string;
  followersQuantity: number | null;
  following: string;
  followingQuantity: number | null;
}
export default function PersonalStats({
  repos,
  reposQuantity,
  followers,
  followersQuantity,
  following,
  followingQuantity,
}: PersonalStatsProps) {
  return (
    <>
      <div id="personal-stats">
        <span className="stats">
          {repos}
          <br />
          <p>{reposQuantity}</p>
        </span>
        <span className="stats">
          {followers}
          <br />
          <p>{followersQuantity}</p>
        </span>
        <span className="stats">
          {following}
          <br />
          <p>{followingQuantity}</p>
        </span>
      </div>
    </>
  );
}

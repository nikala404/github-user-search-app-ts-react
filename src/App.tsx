import { useState, useEffect } from "react";
import "./App.css";
import LogoMode from "./components/LogoMode";
import SearchBar from "./components/SearchBar";
import UserDisplay, { UserDisplayProps } from "./components/UserDisplay";
import PersonalStats, { PersonalStatsProps } from "./components/PersonalStats";
import Links, { LinkProps } from "./components/Links";
import axios, { AxiosResponse } from "axios";

function App() {
  interface GitHubUser {
    login: string;
    id: number;
    url: string;
    company: string | null;
    created_at: string;
    bio: string | null;
    followers: number | null;
    following: number | null;
    public_repos: number | null;
    repos_url: string;
    location: string | null;
    name: string;
    twitter_username: string | null;
    organizations_url: string;
    blog: string | null;
  }

  const [name, setName] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [data, setData] = useState<GitHubUser | null>(null);
  const [status, setStatus] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<GitHubUser> = await axios.get(
          `https://api.github.com/users/${name}`
        );
        setStatus(response.status);
        if (status >= 200 && status < 300) {
          const responseData: GitHubUser = response.data;
          setData(responseData);
        } else {
          console.error(
            "Received non-successful status code:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        alert("Wrong username or user not found!");
      }
    };

    fetchData();
  }, [isClicked]);

  const userData: UserDisplayProps = {
    name: data?.name,
    nickname: `@${data?.login}`,
    date: `Joined At ${data?.created_at.slice(0, 10)}`,
    bio: data?.bio || "No bio available",
  };

  const PersonalStatsData: PersonalStatsProps = {
    repos: "Repos",
    reposQuantity: data?.public_repos!,
    followers: "Followers",
    followersQuantity: data?.followers!,
    following: "Following",
    followingQuantity: data?.following!,
  };

  const LinksData: LinkProps = {
    location: data?.location?.length ? data.location : "No Info",
    twitterLink: data?.twitter_username?.length
      ? data.twitter_username
      : "No Info",
    githubLink: data?.blog?.length ? data.blog : "No Info",
    companyLink: data?.company?.length ? data.company : "No Info",
  };

  return (
    <>
      <div className="parent-div">
        <main>
          <div id="form-div">
            <LogoMode />
            <SearchBar inputedName={setName} clicked={setIsClicked} />
            <UserDisplay {...userData} />
            <PersonalStats {...PersonalStatsData} />
            <Links {...LinksData} />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

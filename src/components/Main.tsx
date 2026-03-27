"use client";

//Next
import Image from "next/image";
import { useState } from "react";

//Components
import RepoCard from "./RepoCard";

//Type
type GitHubUser = {
  name: string;
  login: string;
  followers: number;
  bio: string;
  avatar_url: string;
};

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  pushed_at: string;
  created_at: string;
};

const Main = () => {
  const [user, setUser] = useState<string>("");
  const [userProfile, setUserProfile] = useState<GitHubUser | null>(null);
  const [userRepoProfile, setUserRepoProfile] = useState<GitHubRepo[] | null>(
    null,
  );

  const [urlProfile, urlRepoProfile]: [string, string] = [
    `https://api.github.com/users/${user}`,
    `https://api.github.com/users/${user}/repos`,
  ];

  const handleSearch = async () => {
    if (!user.trim()) {
      setUser("");
      return alert("Digite um usuário válido");
    }

    const responseProfile = await fetch(urlProfile);
    const dataProfile = await responseProfile.json();

    const responseRepoProfile = await fetch(urlRepoProfile);
    const dataRepoProfile = await responseRepoProfile.json();

    const sortedRepos = [...dataRepoProfile]
      .sort(
        (a: GitHubRepo, b: GitHubRepo) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
      )
      .slice(0, 4);

    setUser("");
    setUserProfile(dataProfile);
    setUserRepoProfile(sortedRepos);
  };

  return (
    <main className="bg-[#010409] text-white flex-1 px-[20%] py-15">
      <div className=" flex items-start justify-center">
        <input
          type="text"
          className="h-10 w-[30%] border border-[#30363D] bg-[#161B22] px-3 rounded-l-md text-sm"
          placeholder="Buscar por nome do usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button
          className="h-10 bg-[#238636] px-4 rounded-r-md cursor-pointer duration-300 hover:bg-[#2EA043]"
          onClick={() => handleSearch()}
        >
          Confirmar
        </button>
      </div>
      {userProfile && (
        <div className="flex flex-row gap-5 justify-start my-[10%]">
          <Image
            src={userProfile.avatar_url}
            alt="Teste"
            width={1000}
            height={1000}
            className="w-35 h-35 rounded-full"
          />
          <ul className="flex flex-col gap-2 w-full opacity-70 font-semibold">
            <li>Nome: {userProfile.name}</li>
            <li>Username: {userProfile.login}</li>
            <li>Seguidores: {userProfile.followers}</li>
            <li>Biografia: {userProfile.bio}</li>
          </ul>
        </div>
      )}
      {userRepoProfile && (
        <>
          <h1 className="font-semibold text-xl text-center opacity-70 mb-5">
            Repositórios atualizados recentemente
          </h1>
          {userRepoProfile.length != 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {userRepoProfile.map((repo) => (
                <div key={repo.id}>
                  <RepoCard
                    name={repo.name}
                    created_at={repo.created_at}
                    url={repo.html_url}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">Nenhum repositório encontrado :(</div>
          )}
        </>
      )}
    </main>
  );
};

export default Main;

type RepoCardProps = {
  name: string;
  created_at: string;
  url: string;
};

const RepoCard = ({ name, created_at, url }: RepoCardProps) => {
  return (
    <div className="flex flex-col justify-between h-25 px-4 py-2 bg-[#0D1117] border-2 border-[#30363D] rounded-md font-semibold">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl opacity-80">{name}</h1>
        <button className="border border-[#353B42] px-4 py-2 bg-[#21262D] rounded-lg">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Ir para o repo
          </a>
        </button>
      </div>
      <p className="text-sm opacity-70">
        Criado em: {new Date(created_at).toLocaleDateString("pt-BR")}
      </p>
    </div>
  );
};

export default RepoCard;

import React, { useState } from 'react';

export default function GitHubRepoFilter() {
  const [stars, setStars] = useState(1000);
  const [forks, setForks] = useState(500);
  const [language, setLanguage] = useState('');
  const [sort, setSort] = useState('stars');
  const [order, setOrder] = useState('desc');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRepositories = async () => {
    setLoading(true);
    setError(null);
    const query = `stars:>${stars}+forks:>${forks}${language ? `+language:${language}` : ''}`;
    const url = `https://api.github.com/search/repositories?q=${query}&sort=${sort}&order=${order}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRepos(data.items);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex mx-5 mt-20 justify-between sticky top-0 h-screen overflow-y-auto ">
        {/* //Search item from geihub repository */}
      <div className="w-1/3 p-4 bg-white rounded-xl shadow-md h-[60vh]  flex flex-col justify-center items-centerw">

        <h1 className='font-bold mx-3.5'>Git Hub Filter</h1>
        <div className="space-y-2">
            <label htmlFor="">Sort by Stars</label>
          <input
            type="number"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            placeholder="Minimum Stars"
            className="w-full p-2 border rounded"
          />
            <label htmlFor="">Sort by Forks</label>
          <input
            type="number"
            value={forks}
            onChange={(e) => setForks(e.target.value)}
            placeholder="Minimum Forks"
            className="w-full p-2 border rounded"
          />
            <label htmlFor="">Sort by Language</label>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Language"
            className="w-full p-2 border rounded"
          />
          <button
            onClick={fetchRepositories}
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Filter
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
        {/* //Display the search item */}
      <div className="w-2/3 p-4 space-y-4 grid overflow-y-auto ">
        {repos.map((repo, index) => (
          <div
            key={repo.id}
            className={`p-4 border rounded text-center ${index % 2 === 0 ? 'bg-green-200' : 'bg-blue-200'}`}
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold uppercase font-bold ">
              {repo.name}
            </a>
            <p> <b>Owner: </b>{repo.owner.login}</p>
            <p><b>Language: </b> {repo.language}</p>
            <p><b>Stars: </b> {repo.stargazers_count}</p>
            <p><b>Forks: </b> {repo.forks_count}</p>
            <p><b>Description: </b> {repo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
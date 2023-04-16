import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();

  useEffect(() => {
    if (searchTerm !== '') {
      getResults(`?query=${searchTerm}&limit=40`);
    }
  }, [searchTerm]);

  if (loading) return <Loading />;

  return (
    <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
      {results?.results?.map(({ url, title }, index) => (
        <div key={index} className="md:w-2/5 w-full">
          <a href={url} target="_blank" rel="noreferrer">
            <p className="text-sm">{url.length > 30 ? url.substring(0, 30) : url}</p>
            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

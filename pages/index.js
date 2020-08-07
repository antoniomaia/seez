import { useState } from 'react';
import useSWR from 'swr';

import Layout from '../components/layout';
import SearchInput from '../components/search-input';
import SearchResult from '../components/search-result';
import ErrorMessage from '../components/error-message';
import Header from '../components/header';

const fetcher = url => fetch(url).then(r => r.json());

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data } = useSWR(
    searchTerm ? `/api/search?searchTerm=${searchTerm}` : null,
    fetcher,
  );

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <Layout>
      <Header />
      <SearchInput searchTerm={searchTerm} handleChange={handleChange} />
      {data && data.result && (
        <SearchResult result={data.result} total={data.total} />
      )}
      <section className="container">
        {data && data.error && <ErrorMessage message={data.error} />}
        {searchTerm && !data && <div>Loading...</div>}
      </section>
      <style jsx>{`
        .container {
          margin: 0 20px;
        }
      `}</style>
    </Layout>
  );
};

export default Index;

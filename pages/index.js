import { useState } from 'react';
import useSWR from 'swr';

import Layout from '../components/layout';
import SearchInput from '../components/search-input';

const fetcher = (url) => fetch(url).then((r) => r.json());

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data } = useSWR(
    searchTerm ? `/api/search?searchTerm=${searchTerm}` : null,
    fetcher,
  );

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //if (error) return <div>failed to load</div>;
  //if (!data) return <div>loading...</div>;

  return (
    <Layout>
      <SearchInput searchTerm={searchTerm} handleChange={handleChange} />
    </Layout>
  );
};

export default Index;

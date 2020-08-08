import { useState } from 'react';
import useSWR from 'swr';

import Layout from '../components/layout';
import SearchInput from '../components/search-input';
import SearchResult from '../components/search-result';
import ErrorMessage from '../components/error-message';
import Header from '../components/header';
import useDebounce from '../hooks/useDebounce';
import { DEBOUNCE_TIME } from '../constants/general';
import Loading from '../components/loading';

const fetcher = url => fetch(url).then(r => r.json());

const searchFacts = searchTerm => {
  const { data } = useSWR(
    searchTerm ? `/api/search?searchTerm=${searchTerm}` : null,
    fetcher,
  );
  return data;
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_TIME);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const data = searchFacts(debouncedSearchTerm);

  return (
    <Layout>
      <Header />
      <section className="container">
        <div className="content">
          <SearchInput
            searchTerm={searchTerm}
            handleChange={handleChange}
            invalid={Boolean(data && data.error)}
          />
          {data && data.result && (
            <SearchResult result={data.result} total={data.total} />
          )}
          {data && data.error && (
            <section className="feedback">
              <ErrorMessage message={data.error} />
            </section>
          )}
          {searchTerm && !data && (
            <section className="feedback">
              <Loading />
            </section>
          )}
        </div>
      </section>

      <style jsx>{`
        .container {
          margin: 0 auto 20px auto;
          max-width: 970px;
        }

        .content {
          min-height: 600px;
        }

        .feedback {
          padding: 0 20px 50px 20px;
          max-width: 970px;
        }
      `}</style>
    </Layout>
  );
};

export default Index;

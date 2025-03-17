import { UsersPage } from '@/pages/UsersPage';
import { ErrorPage } from '@/widgets/ErrorPage';
import { useState } from 'react';

const App = () => {
   const [error, setError] = useState('');

   return (
      <main id="app" className="app">
         {error ? (
            <ErrorPage errorMessage={error} />
         ) : (
            <UsersPage setError={setError} />
         )}
      </main>
   );
};

export default App;

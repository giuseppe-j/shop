import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import { useStore } from './shared/store';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Filters from './components/Filters';
import { fetchData } from './shared';
import Loader from './components/Loader';
import Sidebar from './components/Sidebar';

const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  )
}

function Page() {
  const [toggleCart, setToggleCart] = useState(false);
  const setPs = useStore((state) => state.setProducts)

  const [filter, setFilter] = useState({ min: 0, max: 2000 })

  const handleFilterChange = (arr: number[]) => {
    setFilter({ min: arr[0], max: arr[1] });
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', filter],
    queryFn: async () => {
      const rs = await fetchData(filter);
      setPs(rs || [])
      return rs;
    },
  });
  return (
    <div className='App'>
      <Navbar toggleCart={() => setToggleCart(!toggleCart)} />
      {toggleCart && <Cart toggleCart={() => setToggleCart(!toggleCart)} />}
      <div className='container mx-auto py-5'>
        <div className='flex flex-row'>
          <Filters onFilterChange={handleFilterChange} />
          {isLoading ? <Loader /> : data && <ProductList />}
        </div>
      </div>
    </div>
  );
}

export default App;

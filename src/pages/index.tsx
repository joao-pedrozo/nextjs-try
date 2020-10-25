import { GetServerSideProps } from 'next';
import { Title } from '../styles/pages/Home'

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {

  async function handleSum(){
    const math = (await import('../lib/math')).default;

    window.alert(math.sum(2,2));
  }

  return (
   <div>
     <section>
      <Title>Products</Title>
      <ul>
        {recommendedProducts.map(recommendedProduct => {
          return (
            <li key={recommendedProduct.id}>
              {recommendedProduct.title}
            </li>
          )
        })}
      </ul>

     </section>

     <button onClick={handleSum}>
       Sum
     </button>
   </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}
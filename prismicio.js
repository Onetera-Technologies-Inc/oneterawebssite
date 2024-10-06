import { createClient } from '../prismicio'; // Adjust path based on your structure

export async function getStaticProps() {
  const client = createClient();
  const homepage = await client.getByType('homepage');
  
  return {
    props: { homepage },
  };
}


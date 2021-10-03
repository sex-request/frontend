import type { NextPage } from 'next';

import Heading from 'src/Heading';
import Participants from 'src/Participants.component';

const Home: NextPage = () => (
  <>
    <Heading />
    <Participants />
  </>
);

export default Home;

import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import PageWrapper from '../../components/PageWrapper';
import Module from '../../components/Module';
import EpisodesList from '../../components/EpisodesList'
import Welcome from '../../components/Welcome';
import { SearchCircle } from '../../components/Icons';
import theme from '../../config/theme';
import { EpisodesPageGrid } from '../../components/PageWrapper/styles';
import EpisodesSidebar from '../../components/EpisodesSidebar';
import { getEpisodes } from '../../data';

const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: min-content;
  grid-column: span 1;

  @media (max-width: 768px) {
    grid-gap: 12px;
  }
`

function Episodes({ episodes }) {
  return (
    <PageWrapper>
      <EpisodesPageGrid>
        <EpisodesSidebar />

        <Content>
          <EpisodesList episodes={episodes} />
        </Content>
      </EpisodesPageGrid>
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const episodes = await getEpisodes({ limit: 1000, offset: 0 });
  return { props: { episodes } }
}

export default Episodes;

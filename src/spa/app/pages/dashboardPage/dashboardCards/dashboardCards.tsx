import * as React from 'react';
import PhantomCard from 'shared/cards/phantomCard/phantomCard';
import Spinner from 'fallbacks/spinner/spinner';
import YoutubeCard from 'shared/cards/youtubeCard/youtubeCard';
import api, { Resource } from 'api/api';
import { GET_USER_CARDS, GetUserCardsResponse, UserCard } from 'schema/card';
import * as styles from './dashboardCards.module.less';

interface Props {
  resource: Resource<GetUserCardsResponse>;
}

const DashboardCardsContainer: React.FC = () => {
  const resource = api.query(GET_USER_CARDS);
  return (
    <React.Suspense fallback={<Spinner />}>
      <DashboardCards resource={resource} />
    </React.Suspense>
  );
};

const DashboardCards: React.FC<Props> = ({ resource }) => {
  const data = resource.data.read();
  return (
    <section className={styles.section}>
      {
        data.userCards.map((userCard: UserCard, index: number) => (
          <YoutubeCard
            key={`${userCard.cardData.youtubeCardData.videoId}-${index}`}
            youtubeVideoData={userCard.cardData.youtubeCardData}
          />
        ))
      }
      {
        // we create some phantom cards that do not appear visible but are rendered so that we can
        // `justify-content: center` our flexbox card content while having our last row be
        // left-aligned.
        Array(10).fill(null).map((value, index) => <PhantomCard key={`phantom-card-${index}`} />)
      }
    </section>
  );
};

export default DashboardCardsContainer;

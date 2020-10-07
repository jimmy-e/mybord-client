import * as React from 'react';
import Card from 'cards/card/card';
import EmptyCard from 'cards/emptyCard/emptyCard';
import PhantomCard from 'shared/cards/phantomCard/phantomCard';
import { useDashboardCardsContext } from 'context/dashboardCardsContext/dashboardCardsContext';
import * as styles from './userDashboardCards.module.less';

const UserDashboardCards: React.FC = () => {
  const { state } = useDashboardCardsContext();

  if (state.allIds.length > 0) {
    return (
      <section className={styles.section}>
        {
          state.allIds.map((userCardId: string) => (
            <Card key={userCardId} userCard={state.byId[userCardId]} />
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
  }

  return (
    <section className={styles.section}>
      <EmptyCard hasFilters={state.filters.hasFilters} />
    </section>
  );
};

export default UserDashboardCards;
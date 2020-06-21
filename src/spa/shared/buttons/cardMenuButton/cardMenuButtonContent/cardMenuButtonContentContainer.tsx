import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_USER_CARD } from 'schema/card';
import CardMenuButtonContentComponent from './cardMenuButtonContentComponent';

interface Props {
  cardId: string;
}

const CardMenuButtonContentContainer: React.FC<Props> = ({ cardId }) => {
  const [deleteYoutubeCard] = useMutation(DELETE_USER_CARD);
  const [isToDo, setIsToDo] = React.useState<boolean>(true);
  const [showPopConfirm, setShowPopConfirm] = React.useState<boolean>(false);
  const deleteButtonRef = React.useRef<HTMLDivElement>(null);
  const toggleToDo = (): void => setIsToDo((prevState) => !prevState);

  const handleDelete = async (): Promise<void> => {
    await deleteYoutubeCard({
      variables: { cardId },
    });
  };

  return (
    <CardMenuButtonContentComponent
      deleteButtonRef={deleteButtonRef}
      handleDelete={handleDelete}
      isToDo={isToDo}
      setShowPopConfirm={setShowPopConfirm}
      showPopConfirm={showPopConfirm}
      toggleToDo={toggleToDo}
    />
  );
};

export default CardMenuButtonContentContainer;
import { Variants } from 'types/framerMotion';

// transitions the opacity from one child to the next
export const getTwoChildOpacityTransition = (duration: number): Variants => ({
  lastChild: {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { duration },
    },
  },
  firstChild: {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: { duration },
    },
  },
});

// animation variants for our routing between pages
export const routingVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};
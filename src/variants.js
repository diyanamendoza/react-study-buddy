export const rSlideVariants = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  animate: {
    opacity: [0, 1],
    x: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    x: '-100vw',
    transition: { duration: 0.5 },
  },
}

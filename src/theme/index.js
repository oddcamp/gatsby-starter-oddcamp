import type from './sections/type';
import colors from './sections/colors';
import animations from './sections/animations';
import zIndex from './sections/z-index';
import mq from './sections/mq';

const index = {
  ...type,
  ...colors,
  ...animations,
  ...zIndex,
  ...mq,
};

export default index;

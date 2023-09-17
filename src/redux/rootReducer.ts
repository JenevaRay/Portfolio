// import { counterReducer } from './counter/slice';
import { pageReducer } from './page/slice'

const rootReducer = {
  page: pageReducer,
  // counter: counterReducer,
};

export default rootReducer;

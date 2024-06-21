import {createReducer, combineReducer, createStore} from 'redux';
import {Provider} from 'react-redux';
import ClassReducer from './ClassReducer.jsx';

const rootReducer = combineReducer({
    classes:ClassReducer
})
const store= createStore(rootReducer);


const StoreProvider = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );


export default StoreProvider;

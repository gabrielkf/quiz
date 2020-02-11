// import axios from "axios";

// import { allTopics } from '../state/store';
const current = {
  current: {
    topic: 'History',
    qNumber: '23',
    level: 'medium'
  }
};

const myUrl = `https://opentdb.com/api.php?amount=1&category=${current.current.qNumber}&difficulty=${current.current.level}&type=multiple`;

export { current, myUrl };

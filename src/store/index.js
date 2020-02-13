import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: {
      topic: '',
      qNumber: '',
      level: 'medium'
    },

    topics: {
      History: {
        qNumber: '23',
        answers: []
      },
      Geography: {
        qNumber: '22',
        answers: []
      },
      Mithology: {
        qNumber: '20',
        answers: []
      },
      Sports: {
        qNumber: '21',
        answers: []
      },
      Politics: {
        qNumber: '24',
        answers: []
      },
      'General Knowledge': {
        qNumber: '9',
        answers: []
      }
    }
  },
  mutations: {
    setCurrent(state, payload) {
      state.current.qNumber =
        state.topics[payload].qNumber;
      state.current.topic = payload;
    },
    ANSWER(state, payload) {
      state.topics[
        state.current.topic
      ].answers.push({
        level: state.current.level,
        correct: payload
      });
    }
  },
  actions: {
    submitAnswer({ commit }, payload) {
      commit('ANSWER', payload);
    }
  },
  getters: {
    getTopic(state) {
      return state.current.topic;
    },
    getQuery(state) {
      return state.current.qNumber;
    },
    getLevel(state) {
      return state.current.level;
    },
    getCompleted(state) {
      return state.topics[state.current.topic]
        .answers.length;
    },
    questionID(state) {
      let curTopic =
        state.topics[state.current.topic];
      return `${curTopic.answers}${curTopic.qNumber}`;
    }
  }
});

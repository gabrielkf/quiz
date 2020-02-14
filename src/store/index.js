import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nQuestions: 10,
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
      let currentAnswer =
        state.topics[state.current.topic].answers;

      currentAnswer.push({
        level: state.current.level,
        correct: payload
      });

      if (currentAnswer.length > 1) {
        if (
          payload &&
          currentAnswer[currentAnswer.length - 2]
            .correct
        ) {
          switch (state.current.level) {
            case 'easy':
              state.current.level = 'medium';
              break;
            case 'medium':
              state.current.level = 'hard';
          }
        } else if (
          !payload &&
          !currentAnswer[currentAnswer.length - 2]
            .correct
        ) {
          switch (state.current.level) {
            case 'hard':
              state.current.level = 'medium';
              break;
            case 'medium':
              state.current.level = 'easy';
          }
        }
      }
    }
  },

  actions: {
    submitAnswer({ commit }, payload) {
      commit('ANSWER', payload);
    }
  },

  getters: {
    getAllTopics(state) {
      return state.topics;
    },
    topicCompletion(state) {
      return state.current.topic
        ? state.topics[state.current.topic]
            .answers.length >= state.nQuestions
        : false;
    },
    getTopic(state) {
      return state.current.topic
        ? state.current.topic
        : false;
    },
    getQuery(state) {
      return state.current.qNumber;
    },
    getLevel(state) {
      return state.current.level;
    },
    getCompleted(state) {
      return state.current.topic
        ? state.topics[state.current.topic]
            .answers.length
        : false;
    },
    questionID(state) {
      let curTopic =
        state.topics[state.current.topic];
      return `${curTopic.answers}${curTopic.qNumber}`;
    },
    getScore(state) {
      let score = {
        easy: {
          right: 0,
          wrong: 0
        },
        medium: {
          right: 0,
          wrong: 0
        },
        hard: {
          right: 0,
          wrong: 0
        }
      };

      if (state.current.topic) {
        state.topics[
          state.current.topic
        ].answers.map(answer => {
          answer.correct
            ? (score[answer.level].right += 1)
            : (score[answer.level].wrong += 1);
        });
      }

      return score;
    }
  }
});

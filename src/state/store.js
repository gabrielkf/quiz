export const current = {
  current: {
    topic: 'History',
    qNumber: '23',
    level: 'medium'
  },

  setTopic(topic) {
    this.current.topic = topic;
    this.current.qNumber =
      allTopics.topics[topic].qNumber;
  },
  setLevel(level) {
    this.current.level = level;
  }
};

export const allTopics = {
  topics: {
    History: {
      qNumber: '23', //query number
      completed: 0,
      started: false,
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
    },
    Geography: {
      qNumber: '22', //query number
      completed: 0,
      started: false,
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
    },
    Mithology: {
      qNumber: '19', //query number
      completed: 0,
      started: false,
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
    },
    Sports: {
      qNumber: '20', //query number
      completed: 0,
      started: false,
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
    },
    Politics: {
      qNumber: '24', //query number
      completed: 0,
      started: false,
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
    },
    'General Knowledge': {
      qNumber: '9', //query number
      completed: 0,
      started: false,
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
    }
  },

  setStart(topic) {
    this.topics[topic].started = true;
  },
  incRight(topic, level) {
    this.topics[topic][level].right++;
    this.topics[topic].complete++;
  },
  incWrong(topic, level) {
    this.topics[topic][level].wrong++;
    this.topics[topic].complete++;
  }
};

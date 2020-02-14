<template>
  <div class="question-container">
    <div v-if="loaded" class="question-title">
      <p>Question {{ completed + 1 }}</p>
      <small class="aside">{{ level }}</small>
    </div>
    <div v-else class="loading">Loading</div>
    <div class="question" v-html="question"></div>
    <div class="answers-container">
      <div
        class="answers"
        v-for="item in options"
        :key="item.id"
        v-html="item.answer"
        @click="submitAnswer(item.id)"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  name: 'Question',

  data() {
    return {
      question: '',
      options: [],
      right: null,
      loaded: false
    };
  },

  computed: {
    ...mapGetters({
      topic: 'getTopic',
      qNumber: 'getQuery',
      level: 'getLevel',
      completed: 'getCompleted',
      finished: 'topicCompletion'
    })
  },

  methods: {
    submitAnswer(answer) {
      let correct =
        answer === this.right ? true : false;
      this.$store.dispatch(
        'submitAnswer',
        correct
      );
      if (this.finished) {
        this.$router.push('/result');
      }
    }
  },

  mounted(
    qNumber = this.qNumber,
    level = this.level
  ) {
    axios
      .get(
        `https://opentdb.com/api.php?amount=1&category=${qNumber}&difficulty=${level}&type=multiple`
      )
      .then(res => {
        // handle success
        this.question =
          res.data.results[0].question;

        const numOptions = 4; //number of options
        let sort = Math.floor(
          numOptions * Math.random()
        ); //random id for correct answer
        this.right = sort;
        console.log(`option ${sort + 1}`);

        let shuffled = [
          {
            answer:
              res.data.results[0].correct_answer,
            id: sort
          }
        ];

        for (
          let i = 0, j = 0;
          i < numOptions;
          i++
        ) {
          if (i != sort) {
            shuffled.push({
              answer:
                res.data.results[0]
                  .incorrect_answers[j],
              id: i
            });
            j++;
          }
        }
        this.options = shuffled.sort((a, b) => {
          return a.id - b.id;
        });
      })
      .catch(error => {
        console.log(error);
        this.options = ['No question found'];
      })
      .finally(() => {
        this.loaded = true;
      });
  }
};
</script>

<style>
.question-container {
  box-sizing: border-box;
  height: 100%;
  padding: 10px 20px;
  margin: auto 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.question-title {
  height: 20px;
  padding: 0;
  margin: auto 10px;
  font-family: Avenir;
  font-size: 24px;
  line-height: 30px;
  text-align: left;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.loading {
  height: 100%;
  font-family: Avenir;
  font-size: 45px;
  line-height: 60px;
  text-align: center;
  color: rgb(177, 2, 2);

  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.question {
  margin: auto 10px;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.2px;
  text-align: left;
}

.aside {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  letter-spacing: 1px;
}

.answers-container {
  padding: 0;
  margin: auto 0;
}

.answers {
  background: #ffffff;
  border: 1px solid #c9cccf;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(52, 60, 88, 0.4);
  border-radius: 8px;
  margin: 10px;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;

  height: 45px;
  cursor: pointer;
}
.answers:hover {
  background-color: #c2c2c2;
}
</style>
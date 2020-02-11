<template>
  <div class="container">
    <div class="box">
      <div v-html="question"></div>
      <div>
        <div
          class="answers"
          v-for="item in answers"
          :key="item.id"
          @click="submitAnswer(item.id)"
          v-html="item.option"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { currentQuestion } from "@/state/store";
import { myUrl } from '@/utils/apiRequest';
import axios from 'axios';

export default {
  name: 'Question',

  data() {
    return {
      question: null,
      right: null,
      answers: []
    };
  },

  methods: {
    getQuestion() {
      axios
        .get(myUrl)
        .then(res => {
          // handle success
          this.question =
            res.data.results[0].question;

          let numOptions = 4; //number of options
          let sort = Math.floor(
            numOptions * Math.random()
          ); //random id for correct answer
          console.log(sort);
          this.right = sort;

          let shuffled = [
            {
              option:
                res.data.results[0]
                  .correct_answer,
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
                option:
                  res.data.results[0]
                    .incorrect_answers[j],
                id: i
              });
              j++;
            }
          }

          this.answers = shuffled.sort((a, b) => {
            return a.id - b.id;
          });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
          this.answers = 'No question found';
        });
    },
    submitAnswer(answer) {
      if (answer === this.right) {
        console.log('CORRECT');
      } else {
        console.log('WRONG');
      }
      setTimeout(this.getQuestion(), 750);
    },
  },

  mounted() {
    this.getQuestion();
  }
};
</script>

<style>
.box {
  background: #ffffff;
  border: 1px solid #e4e4e6;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  border-radius: 8px;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;

  width: 600px;
  height: 350px;
}

.question {
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.2px;
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
.answers :hover {
  background-color: #c2c2c2;
}
</style>
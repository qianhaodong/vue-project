<template>
	<BaseLayout :tips="tips">
        <template v-if="!!currentQuestion">
            <div class="question-wrap">
                <span>{{ currentQuestion.topic_name }}</span>
                <div class="answer-list">
                    <div
                        class="answer-item"
                        :class="{ 'active': !!currentAnswer && (answerItem.topic_answer_id === currentAnswer.topic_answer_id) }"
                        v-for="(answerItem, answerIndex) in currentQuestion.topic_answer"
                        :key="answerIndex"
                        @click="handleAnswerClick(answerItem)"
                    >
                        {{ answerIndexList[answerIndex] }}. {{ answerItem.answer_name }}
                    </div>
                </div>
            </div>
            <img
                v-if="questionIndex !== questionList.length - 1"
                class="icon3"
                src="@/assets/images/2-2.png"
                alt=""
                @click="handleClick"
            />
            <img
                v-else
                class="icon3"
                src="@/assets/images/3-1.png"
                alt=""
                @click="handleSubmit"
            />
        </template>
	</BaseLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getQuestionList } from '@/apis/answer'

export default {
	name: 'Answer',
	data() {
		return {
			answerIndexList: ['A', 'B', 'C', 'D'],
			questionIndex: 0,
			questionList: [],
		}
	},
	computed: {
		...mapGetters(['answeredList']),
		tips() {
			return !!this.currentQuestion
				? this.currentQuestion.topic_name
				: '题目一'
		},
		currentQuestion() {
			return this.questionList[this.questionIndex] || null
		},
        currentAnswer() {
            return this.answeredList[this.questionIndex] || null
        },
	},
	created() {
		this._getQuestionList()
	},
	methods: {
		...mapActions(['setAnsweredList']),

		handleClick() {
            // 判断未选择答案
            if (!this.currentAnswer) {
                this.$toast('请选择答案')
                return
            }
			this.questionIndex++
		},

		handleAnswerClick(answer) {
            this.answeredList.splice(this.questionIndex, 1, answer)
            this.setAnsweredList(this.answeredList)
        },

        handleSubmit() {
            this.$router.push({ path: '/result' })
        },

		_getQuestionList() {
			getQuestionList().then((res) => {
				this.questionList = res
			})
		},
	},
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>

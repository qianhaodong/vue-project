<template>
	<div class="answer-result-wrap">
		<div class="answer-score">
			<div class="score-wrap">
				<span>{{ score }}</span>
				<span>分！</span>
			</div>
			<div class="score-tips" v-if="!!scoreTips">{{ scoreTips }}</div>
		</div>
		<img
			class="icon2"
			src="@/assets/images/4-3.png"
			alt=""
			@click="handleShareClick"
		/>

		<!-- share -->
		<div
			v-if="shareVisible"
			class="share-wrap"
			@click="shareVisible = false"
		>
			<img src="@/assets/images/5-2.png" alt="" />
		</div>
	</div>
</template>

<script>
import { getAnswerResult } from '@/api'
import { mapGetters } from 'vuex'

export default {
	name: 'AnswerResult',
	data() {
		return {
			score: 0,
			scoreTips: '',
			scoreTipList: [
				'你说，是不是把知识都还给小学老师了？',
				'还不错，但还需要继续加油哦！',
				'不要嘚瑟还有进步的空间！',
				'智商离爆表只差一步了！',
				'你也太聪明啦，新时代农民工欢迎你！',
			],
			shareVisible: false,
		}
	},
	computed: {
		...mapGetters(['answeredList']),
	},
	created() {
		this._getAnswerResult()
	},
	methods: {
		handleShareClick() {
			this.shareVisible = true
		},

		_getAnswerResult() {
			getAnswerResult().then((res) => {
				// 过滤出正确的选择
				const answerResult = res.filter((item, index) => {
					if (this.answeredList[index].topic_answer_id === item) {
						return item
					}
				})
				this.score = (answerResult.length / 5) * 100
				this.scoreTips = answerResult.length
					? this.scoreTipList[answerResult.length - 1]
					: this.scoreTipList[0]
			})
		},
	},
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>

<template>
    <BaseLayout :tips="tips">
        <img class="icon2" src="@/assets/images/1-2.png" alt="" />
		<img
			class="icon3"
			src="@/assets/images/1-4.png"
			alt=""
			@click="start"
		/>
    </BaseLayout>
</template>

<script>
export default {
	name: 'HomePage',
	data() {
		return {
			tips: '第一周',
		}
	},
	methods: {
		start() {
            this.$router.push({ path: '/answer' })
		},
	},
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>

<template>
    <div class="base-layout-wrap">
		<div class="top-icon">
			<img class="icon1" src="@/assets/images/WechatIMG2.png" alt="" />
			<span class="tips">{{ tips }}</span>
		</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BaseLayout',
    props: {
        tips: {
            type: String,
            default: '第一周',
        },
    },
}
</script>

<style lang="less" scoped>
.base-layout-wrap {
    position: relative;
    height: 100%;
    background: url('~@/assets/images/1-1.jpg') no-repeat;
    background-size: 100% 100%;
    overflow: hidden;

    .top-icon {
        position: absolute;
        top: -30px;
        right: 40px;
        width: 76px;
        height: 172px;

        .icon1 {
            width: 100%;
            height: 100%;
        }

        .tips {
            position: absolute;
            left: 50%;
            bottom: 26px;
            transform: translateX(-48%);
            width: 50px;
            color: #a57c50;
            font-size: 13px;
            font-weight: 600;
            text-align: center;
        }
    }
}
</style>

<template>
    <div class="w-full">
        <el-row :gutter="20" class="mt-6" style="margin-left: 0;margin-right:0">
            <el-col :span="6">
                <div class="statistic-card ">
                    <el-statistic value="￥98500.00">
                        <template #title>
                            <div style="display: inline-flex; align-items: center">
                                总收入
                                <el-tooltip effect="dark" content="2024年总收入" placement="top">
                                    <el-icon style="margin-left: 4px" :size="12">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                    </el-statistic>
                    <div class="statistic-footer">
                        <div class="footer-item">
                            <span>超过去年</span>
                            <span class="green">
                                24%
                                <el-icon>
                                    <CaretTop />
                                </el-icon>
                            </span>
                        </div>
                    </div>
                    <div class="absolute right-10 top-1/3">
                        <el-icon size="36">
                            <TrophyBase />
                        </el-icon>
                    </div>
                </div>

            </el-col>
            <el-col :span="6">
                <div class="statistic-card">
                    <el-statistic value="￥693700">
                        <template #title>
                            <div style="display: inline-flex; align-items: center">
                                活跃用户（个）
                                <el-tooltip effect="dark"
                                    content="Number of users who logged into the product in one month" placement="top">
                                    <el-icon style="margin-left: 4px" :size="12">
                                        <Warning />
                                    </el-icon>
                                </el-tooltip>
                            </div>
                        </template>
                    </el-statistic>
                    <div class="statistic-footer">
                        <div class="footer-item">
                            <span>与上个月对比</span>
                            <span class="red">
                                12%
                                <el-icon>
                                    <CaretBottom />
                                </el-icon>
                            </span>
                        </div>
                    </div>
                    <div class="absolute right-10 top-1/3">
                        <el-icon size="36">
                            <Moon />
                        </el-icon>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="statistic-card">
                    <el-statistic :value="72000" title="New transactions today">
                        <template #title>
                            <div style="display: inline-flex; align-items: center">
                                今日新交易
                            </div>
                        </template>
                    </el-statistic>
                    <div class="statistic-footer">
                        <div class="footer-item">
                            <span>与昨日对比</span>
                            <span class="green">
                                16%
                                <el-icon>
                                    <CaretTop />
                                </el-icon>
                            </span>
                        </div>
                        <div class="footer-item">
                            <el-icon :size="14">
                                <ArrowRight />
                            </el-icon>
                        </div>
                    </div>
                    <div class="absolute right-10 top-1/3">
                        <el-icon size="36">
                            <Coin />
                        </el-icon>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="statistic-card">
                    <el-statistic :value="72000" title="New transactions today">
                        <template #title>
                            <div style="display: inline-flex; align-items: center">
                                订单
                            </div>
                        </template>
                    </el-statistic>
                    <div class="statistic-footer">
                        <div class="footer-item">
                            <span>对昨日对比</span>
                            <span class="green">
                                16%
                                <el-icon>
                                    <CaretTop />
                                </el-icon>
                            </span>
                        </div>
                        <div class="footer-item">
                            <el-icon :size="14">
                                <ArrowRight />
                            </el-icon>
                        </div>
                    </div>
                    <div class="absolute right-10 top-1/3">
                        <el-icon size="36">
                            <Tickets />
                        </el-icon>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>

</template>

<script lang="ts" setup>
import {
    ArrowRight,
    CaretBottom,
    CaretTop,
    Tickets,
    Warning,
} from '@element-plus/icons-vue'
</script>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
    background-color: var(--el-fill-color) !important;
}

.el-statistic {
    --el-statistic-content-font-size: 28px;
}

.statistic-card {
    height: 100%;
    padding: 20px;
    border-radius: 4px;
    background-color: var(--el-bg-color-overlay);
    @apply border relative hover:shadow-lg cursor-pointer transition-all;
}

.statistic-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 12px;
    color: var(--el-text-color-regular);
    margin-top: 16px;
}

.statistic-footer .footer-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.statistic-footer .footer-item span:last-child {
    display: inline-flex;
    align-items: center;
    margin-left: 4px;
}

.green {
    color: var(--el-color-success);
}

.red {
    color: var(--el-color-error);
}
</style>
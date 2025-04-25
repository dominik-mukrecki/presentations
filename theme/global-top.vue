<script setup>
import GlobalStripes from './components/GlobalStripes.vue';
import TitleRenderer from '#slidev/title-renderer';
</script>

<template>
    <div>
        <GlobalStripes />
    </div>
    <header>z
        <div class="slides-compass">
            <div>
                <span>
                    <SlideCurrentNo class="slide-current-no" />
                </span>
                <span>
                    <SlidesTotal class="slides-total" />
                </span>
            </div>
            <div>
                <span>
                    <Toc maxDepth="1" mode="onlyCurrentTree" />
                </span>
            </div>
        </div>
    </header>
</template>
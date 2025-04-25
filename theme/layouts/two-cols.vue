<template>
  <div class="slidev-layout two-cols">
    <div class="left-title">
      <slot name="left-title" />
    </div>
    <div class="left-content">
      <slot name="left-content" />
    </div>
    <div class="right-title">
      <slot name="right-title" />
    </div>
    <div class="right-content">
      <slot name="right-content" />
    </div>
  </div>
</template>


<template>
  <button 
    type="button"
    :class="[
      'btn', 
      `btn-${size}`, 
      `btn-${type}`,
      {'btn-block': block},
      {'btn-stroke': stroke}
    ]"
  >
    <Icon v-if="iconName?.length" :name="iconName" />
    <span v-if="label?.length">{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: String,
  type: {
    type: String as PropType<'primary' | 'secondary' | 'white'>,
    default: 'primary',
  },
  size: {
    type: String as PropType<'xs' | 'md' | 'lg'>,
    default: 'md',
  },
  iconName: String,
  stroke: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
});

const appConfig = useAppConfig()
const primary = computed(() => appConfig.theme.colors.primary)
const secondary = computed(() => appConfig.theme.colors.secondary)

</script>

<style lang="scss" scoped>
@use '@/assets/_variables.scss' as *;

.btn {
    @include flex(flex-start, center);
    overflow: clip;
    line-height: 1;
    text-decoration: none;
    color: $black;
    cursor: pointer;
    white-space: nowrap;
    transition: .2s ease-in-out;

    &-primary {
        background-color: v-bind(primary);
        color: $black;
        border: 1px solid transparent;
        svg path {
            fill: $black !important;
        }
    }

    &-secondary {
        background-color: v-bind(secondary);
        color: $white;
        border: 1px solid transparent;
        svg path {
            fill: $black !important;
        }
    }

    &-white {
        background-color: $white;
        color: $black;
        border: 1px solid transparent;

        svg path {
            fill: $black !important;
        }
    }

    &-stroke {
        border-width: 1px;
        border-style: solid;
        background-color: transparent;

        &.btn-primary {
            border-color: v-bind(primary);
            color: v-bind(primary);
            &:hover {
                background-color: v-bind(primary);
                color: $black;
            }
        }

        &.btn-secondary {
            border-color: v-bind(secondary);
            color: v-bind(secondary);

             &:hover {
                background-color: v-bind(secondary);
                color: $black;
            }
        }

        &.btn-white {
            border-color: $white;
            color: $white;

            &:hover {
                background-color: $white;
                color: $black;
            }
        }
    }

    &-block {
        width: 100%;
    }
    &-stroke {
        border: 1px solid $black;
        background-color: transparent;
    }
    &-xs {
        padding: .45rem .5rem;
        gap: .4rem;
        border-radius: .3rem;
        font-size: .8rem;
        svg {
            @include fixed-size(.9rem);
        }
    }
    &-md {
        padding: .5rem .75rem;
        gap: .5rem;
        border-radius: .4rem;
        font-size: .9rem;
        svg {
            @include fixed-size(1.1rem);
        }
    }
    &-lg {
        padding: .65rem .8rem;
        gap: .75rem;
        border-radius: .6rem;
        font-size: 1.1rem;
        svg {
            @include fixed-size(1.3rem);
        }
    }
}
</style>

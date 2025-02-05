<template>
  <component :is="name" class="heroicon" />
</template>

<script>
import {
  HomeIcon,
  UserIcon,
  Bars3Icon,
  PowerIcon,
  ArrowRightStartOnRectangleIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/solid'

export default {
  name: 'Icon',
  components: {
    HomeIcon,
    UserIcon,
    Bars3Icon,
    PowerIcon,
    ArrowRightStartOnRectangleIcon,
    UserCircleIcon,
    MagnifyingGlassIcon,
    ChevronRightIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

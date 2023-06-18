<script setup lang="ts">
import { membersRef } from '@/firebase'
import { useCollection } from 'vuefire'
import MembersCount from '@/components/MembersCount.vue'
import PersonalCardInfo from '@/components/PersonalCardInfo.vue'
import UserSummaryCard from '@/components/UserSummaryCard.vue'

const members = useCollection(membersRef)
</script>

<template>
  <div class="container mt-5">
    <div class="row mb-3">
      <div class="col-6 col-sm-4 col-lg-3">
        <PersonalCardInfo />
      </div>
      <div class="col-6 col-sm-5 col-md-4 col-lg-4">
        <MembersCount />
      </div>
    </div>

    <h2 class="mt-5 mb-3">Members</h2>

    <div class="row">
      <UserSummaryCard v-for="member in members" class="col" :key="member.id" :member="member" />
    </div>
  </div>
</template>

<style scoped>

</style>

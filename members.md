---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const admin = [
  {
    avatar: 'https://cdn.jianyuelab.net/personal/avatar.jpg',
    name: 'JianyueHugo',
    title: '技术组组长',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
    ]
  },
]

const member = [
  {
    avatar: 'https://cdn.jianyuelab.net/personal/avatar.jpg',
    name: 'JianyueHugo',
    title: '正式组员',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>管理组</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="admin" />
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="member" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

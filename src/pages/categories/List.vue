<script setup lang="ts">
  // Hooks
  import { onMounted, ref } from "vue";
  import { userApi } from "@/api";

  // Components
  import { Page } from "@/components/structure";

  const token = localStorage.token;
  const user = (localStorage.user) ? JSON.parse(localStorage.user) : null;
  const studentList = ref([]);

  /**
   * Get profile data
   */
  async function getStudentList() {
    try {
      // const csrfResponse = await userApi.getCsrfCookie();
      const response = await userApi.getStudentList();
      const { students } = response.data;

      studentList.value = students.data.map(student => student)
    }
    catch (error) {
      throw Error(error);
    }
  }

  onMounted(() => {
    getStudentList();
  })
</script>

<template>
  <Page class="page-category-list">
    <h1>This is a Categories page</h1>

    <ul>
      <li v-for="student in studentList" class="py-1 px-2">
        {{ student.first_name }} {{ student.last_name }}
      </li>
    </ul>
  </Page>
</template>

<script setup lang="ts">
  import { PostCard } from "@/components/post";

  const videoItem = {
    id: 1,
    title: "Some title here",
    description: "Some sort of description, with many words",
    author: "John Sina",
    channel: "sina-burns",
    likesCount: 300,
    viewsCount: 1200,
    runtime: 3400,
    previewUrl: "https://garderobus.ru/wp-content/uploads/2019/09/post_5d8c2c049640e.jpeg"
  };
  const videoList = [];

  const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  for (let i = 1; i <= 32; i++) {
    const runtime = random(3*60, 12*60);
    videoList.push({...videoItem, id: i, runtime})
  }
</script>

<template>
  <div class="row p-0 m-0">
    <aside class="col-sm-2">

    </aside>
    <section class="col-sm-10">
      <div class="row pt-6">

        <div v-for="video in videoList" :key="video.id" class="col-xs-3">
          <PostCard
            :id="video.id"
            :title="video.title"
            :description="video.description"
            :previewUrl="video.previewUrl"
            :author="video.author"
            :channel="video.channel"
            :likesCount="video.likesCount"
            :viewsCount="video.viewsCount"
            :runtime="video.runtime"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { ref } from "vue";
  import { useI18n } from "vue-i18n";

  export default {
    // props: {
    //   title: String
    // },
    // setup(props) {
    setup() {
      const loading = ref(false);
      const title = "Some title";
      const { t } = useI18n();

      const form = ref({
        email: "",
        password: "",
        remember_me: false
      });

      return {
        title,
        loading,
        form,
        t
      }
    },
    methods: {
      toggleLoading () {
        this.loading = !this.loading;
      },

      onSubmit (e) {
        this.toggleLoading();
        e.preventDefault();

        setTimeout(() => {
          this.toggleLoading();
        }, 1200)
        console.log(this.form);
      }
    }
  }
</script>

<template>
  <section class="page">

    <div class="signin-form-wrapper">
      <h3 class="text-bold pb-2">
        IN DEVELOPMENT: Restore password
        <!-- {{ $t('pages.signin.title') }} -->
      </h3>
      <p>{{ $t('pages.signin.subtitle') }}</p>
      <form @submit="(e) => onSubmit(e)" class="signin-form">
        <div class="pb-4">
          <it-input
            v-model="form.email"
            :label-top="$t('user.email')"
            :placeholder="$t('user.email')"
          />
        </div>
        <div class="pb-4">
          <it-input
            v-model="form.password"
            :label-top="$t('user.password')"
            :placeholder="$t('user.password')"
          />
        </div>
        <div class="pb-4">
          <it-checkbox
            type="primary"
            :label="$t('pages.signin.remember_me')"
            v-model="form.remember_me"
          />
        </div>
        <footer class="form-footer">
          <it-button
            :loading="loading"
            type="primary"
            block
          >
            {{ $t('app.signin') }}
          </it-button>
        </footer>
      </form>
    </div>

  </section>
</template>

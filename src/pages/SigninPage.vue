<script lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useI18n } from "vue-i18n";
  import { useUserStore } from "@/stores/user";

  export default {
    // props: {
    //   title: String
    // },
    // setup(props) {
    setup() {
      const loading = ref(false);
      const title = "Some title";

      const { t } = useI18n();
      const router = useRouter();
      const userStore = useUserStore();

      const form = ref({
        email: "",
        password: "",
        remember_me: false
      });

      const toggleLoading = () => {
        loading.value = !loading.value;
      };

      const onSubmit = async (e) =>  {
        toggleLoading();
        e.preventDefault();

        try {
          // TODO: replace to const { value: formValue } = form;
          const { email, password } = form.value;

          await userStore.getCrfs()

          // TODO: replace to .signin(formValue)
          await userStore.signin({email, password})

          router.push({name: 'profile'});
        }
        catch(error) {
          throw new Error('' + error);
        }
        finally {
          toggleLoading();
        }
      };

      return {
        onSubmit,
        title,
        loading,
        form,
        t
      }
    },
  }
</script>

<template>
  <section class="page">

    <div class="signin-form-wrapper">
      <h3 class="text-bold pb-2">
        {{ $t('pages.signin.title') }}
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
            <!-- @click="e => onSubmit(e)" -->

            {{ $t('app.signin') }}
          </it-button>
        </footer>

        <div class="columns-2 pt-4 pr-1 pl-1">
          <div>
            <RouterLink to="/restore-password">
              {{ $t('app.forgot_password') }}
            </RouterLink>
          </div>
          <div class="text-right">
            <RouterLink to="/signup">
              {{ $t('app.signup') }}
            </RouterLink>
          </div>
        </div>

      </form>
    </div>

  </section>
</template>

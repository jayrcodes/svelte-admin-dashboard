<script lang="ts">
  import CustomButton from '../components/CustomButton.svelte';

  let email: string = '';
  let password: string = '';

  function handleSubmit() {
    console.log(email, password);
  }
</script>

<div class="login flex justify-center items-center bg-gray-100 m-0">
  <form
    on:submit|preventDefault={handleSubmit}
    class="flex flex-col p-2 rounded bg-white"
  >
    <input
      class="mb-2 p-2 rounded"
      type="text"
      value={email}
      placeholder="Email"
    />
    <input
      class="mb-6 p-2 rounded"
      type="text"
      value={password}
      placeholder="Password"
    />
    <CustomButton title="Sign in" />
  </form>
  <pre>{email}</pre>
  <pre>{password}</pre>
</div>

<style>
  .login {
    height: 100vh;
  }

  form {
    width: 425px;
  }
</style>

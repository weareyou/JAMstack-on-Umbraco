<script>
  import { errors } from '../../../utils/form';

  export let name = '';
  export let errorMessages = {};
</script>

<style lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/typography';

  .c-error-message {
    @include typography.font-size(vars.$milli);
    color: var(--color-error);
  }
</style>

{#if $errors[name]}
  <p
    id={`error_${name}`}
    class="c-error-message"
  >
    {errorMessages[$errors[name]]}
  </p>
{/if}

<script>
  export let href = null;
  export let type = 'button';
  export let label = 'button label';
  export let icon = null;
  export let hideLabel = false;
  // export let modifier = '';
  export let isActive = false;
  export let onClick = null;
  export let disabled = false;

  let className = '';
  export { className as class };
</script>

<style lang="scss">
  @use 'src/sass/generic/utilities';
  @use 'node_modules/@supple-kit/supple-css/utilities/visually-hidden';

  /*  Block
      ========================================================================= */

  .c-button {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    border: 1px solid var(--color-black);
    border-radius: 2px;
    font-family: var(--font-family-secondary);
    line-height: 1;
    font-weight: 500;
    text-decoration: none;
    background-color: var(--color-green);
    color: var(--color-black);
    appearance: none;
    transition: var(--base-transition-duration-short) var(--base-timing-function);

    #{utilities.$global-interaction-states},
    &[aria-current] {
      background-color: var(--color-gray-light);
      color: var(--color-black);
      text-decoration: none;
      outline: none;
    }

    &[disabled] {
      opacity: 0.5;
    }
  }


  /*  Elements
      ========================================================================= */

  .c-button__inner {
    display: inline-flex;
    align-items: stretch;
  }

  .c-button__label {
    display: flex;
    padding: var(--space-small);
  }
</style>

<button
  class="c-button  {className}"
  {href}
  on:click={onClick}
  {type}
  aria-current={isActive ? 'true' : null}
  {disabled}
>
  <span class="c-button__inner">
    <span class="c-button__label" class:u-visually-hidden="{hideLabel}">
      {label}
    </span>
    {#if icon}
      <span class="c-button__wrap-icon">
        <mark>icon</mark>
      </span>
    {/if}
  </span>
</button>

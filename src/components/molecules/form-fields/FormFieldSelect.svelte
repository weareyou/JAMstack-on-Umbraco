<script>
  import Label from '../../atoms/input/Label.svelte';
  import ErrorMessage from '../../atoms/input/ErrorMessage.svelte';
  import InputSelect from '../../atoms/input/InputSelect.svelte';

  export let label;
  export let input;
  export let options;
  export let errorMessages;
</script>

<div>
  <Label {...label} />

  <InputSelect {...input} {options} />

  <ErrorMessage
    {errorMessages}
    name={input.name}
  />
</div>

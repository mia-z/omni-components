<script lang="ts">
    import Button from "../components/Button.svelte";
    import Highlight, { LineNumbers } from "svelte-highlight";
    import typescript from "svelte-highlight/languages/typescript";
</script>

<div class={"w-full flex flex-col gap-y-2"}>
    <div class={""}>

    </div>
    <Button primary sm>
        Button sm
    </Button>
    <Button primary md>
        Button
    </Button>
    <Button primary lg>
        Button lg
    </Button>
    <Button primary xl>
        Button xl
    </Button>
    <Button primary link href={"https://google.com"}>
        Button as anchor
    </Button>
    <Button primary block>
        Button full width
    </Button>
    <Button primary>
        Primary
    </Button>
    <Button secondary>
        Secondary
    </Button>
    <Button tertiary>
        Tertiary
    </Button>
    <Button error>
        Error
    </Button>
    <Button success>
        Success
    </Button>
</div>
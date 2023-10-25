<script lang="ts">
    import { OmniComponentsContext } from "..";
    import ButtonPage from "./pages/ButtonPage.svelte";
    import onedark from "svelte-highlight/styles/onedark";
</script>

<svelte:head>
    {@html onedark}
</svelte:head>

<OmniComponentsContext />

<div class={"min-h-screen p-5 flex"}>
    <ButtonPage />
</div>

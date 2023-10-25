<script lang="ts">
    export let link = false;
    export let target = "_blank";
    export let rel = "noreferrer noopener";
    export let href: string | undefined = link ? "" : undefined;
    export let block: boolean = false;
    export let normalCase = false;

    //Sizes
    export let sm = false;
    export let lg = false;
    export let xl = false;
    export let md = (sm || lg || xl) ? false : true;

    //Colourways
    export let primary = false;
    export let secondary = false;
    export let tertiary = false;
    export let error = false;
    export let success = false;

    //Shadows
    export let shadowSm = false;
    export let shadowMd = false;
    export let shadowLg = false;
    export let shadowXl = false;

    if (link === true && href === "") {
        console.warn("Must provide href to button when decalred as link");
    }

</script>

<svelte:element
    this={link ? "a" : "button"}
    {href}
    target={link ? target : undefined}
    rel={link ? rel : undefined}
    class={`w-fit py-2 px-3 line-clamp-1 font-semibold rounded-md uppercase font-nunito transition-colors ${$$props.class}`}
    class:flex={link}
    
    class:normal-case={normalCase}

    class:w-full={block}

    class:shadow-sm={shadowSm}
    class:shadow-md={shadowMd}
    class:shadow-ld={shadowLg}
    class:shadow-xl={shadowXl}

    class:h-8={sm}
    class:text-xs={sm}
    class:h-10={md}
    class:text-sm={md}
    class:h-14={lg}
    class:text-base={lg}
    class:h-16={xl}
    class:text-xl={xl}

    class:bg-neutral-600={primary}
    class:hover:bg-neutral-500={primary}
    class:active:bg-neutral-700={primary}
    class:focus:bg-neutral-700={primary}

    class:bg-indigo-600={secondary}
    class:hover:bg-indigo-500={secondary}
    class:active:bg-indigo-700={secondary}
    class:focus:bg-indigo-700={secondary}

    class:bg-fuchsia-600={tertiary}
    class:hover:bg-fuchsia-500={tertiary}
    class:active:bg-fuchsia-700={tertiary}
    class:focus:bg-fuchsia-700={tertiary}

    class:bg-red-600={error}
    class:hover:bg-red-500={error}
    class:active:bg-red-700={error}
    class:focus:bg-red-700={error}

    class:bg-green-600={success}
    class:hover:bg-green-500={success}
    class:active:bg-green-700={success}
    class:focus:bg-green-700={success}
>
    {#if link}
        <div class={"m-auto"}>
            <slot />
        </div>
    {:else}
        <slot />
    {/if}
</svelte:element>
<script>
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
  import PollList from "./components/list.svelte";
  import CreatePollForm from "./components/form.svelte";
  import Tabs from "./shared/tabs.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChange = (e) => {
    activeItem = e.detail;
  };

  const handleAdd = () => {
    activeItem = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList  />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    /* text-align: center; */
    padding: 1em;
    max-width: 960px;
    margin: 40px auto;
  }
  /* color: #ff3e00; */

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

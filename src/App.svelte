<script>
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
  import PollList from "./components/list.svelte";
  import CreatePollForm from "./components/form.svelte";
  import Tabs from "./shared/tabs.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => (activeItem = e.detail);

  const handleAdd = () => {
    activeItem = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    /* width: 100%; */
    max-width: 960px;
    padding: 1em;
    margin: 40px auto;
  }
</style>

<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(
      `/${params.lang}/chastnaya-zhizn-kotoruyu-my-uzhe-poteryali-chast-1-vvodnaya/post.json`
    );
    const data = await res.json();
    if (res.status === 200) {
      return { data: data, lang: params.lang };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Post from "../../../components/post.svelte";
  import Pidor from "./pidor.svelte";

  export let data;
  export let lang;
</script>

<Post post={data.meta} {lang} showContent={false} />

<div class="content">
  {@html data.postParts[0]}
</div>

<Pidor />

<div class="content">
  {@html data.postParts[1]}
</div>

<script context="module">
  export async function preload() {
    const res = await this.fetch(
      '/ru/chastnaya-zhizn-kotoruyu-my-uzhe-poteryali-chast-1-vvodnaya/post.json',
    );
    const data = await res.json();
    if (res.status === 200) {
      return { data: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Post from 'components/post.svelte';
  import Fingerprint from 'components/posts/privacy-pt1/fingerprint.svelte';
  import Pidor from 'components/posts/privacy-pt1/pidor.svelte';

  export let data;
</script>

<Post post={data}>
  <div class="content">
    {@html data.content[0]}
  </div>

  <Pidor />

  <div class="content">
    {@html data.content[1]}
  </div>

  <Fingerprint />

  <div class="content">
    {@html data.content[2]}
  </div>
</Post>

<script context="module">
  import { goto } from "@sapper/app";
  import { langStore, setCurrentLang } from "./store";

  if (typeof window !== "undefined") {
    const lang = setCurrentLang();
    goto("./" + lang);
  }
</script>

<script context="module">
  let rawLang = "";
  if (typeof navigator !== "undefined") {
    rawLang = (navigator.language || navigator.userLanguage).slice(0, 2);
  }
  // Only support two langs for now
  const lang = rawLang === "ru" ? rawLang : "en";

  if (typeof window !== "undefined") {
    window.location.href = `./${lang}`;
  }
</script>

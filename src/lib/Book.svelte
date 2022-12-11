<script lang="ts">
  import "../css/book.css";
  import { getAnswer } from "../ts/main";

  let opened = false;
  let text = "";

  function click() {
    opened = !opened;
    if (opened) text = getAnswer();
  }
</script>

<button class="book" class:opened on:click={click}>
  <div class="back" />
  <div class="page6">
    <div class="answer">
      <p>{text}</p>
    </div>
  </div>
  <div class="page5" />
  <div class="page4" />
  <div class="page3" />
  <div class="page2" />
  <div class="page1" />
  <div class="front">
    <h1 class="header">The Book<br />of Answers</h1>
    <p class="info">Created by IzKuipers.</p>
  </div>
</button>
